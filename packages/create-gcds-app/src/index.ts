import { parseArgs } from "node:util";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve, join, basename } from "node:path";
import * as p from "@clack/prompts";
import pc from "picocolors";
import { downloadTemplate } from "giget";
import {
  TEMPLATES,
  DEFAULT_REF,
  REPO,
  findTemplate,
  gigetSource,
  type Template,
} from "./templates.js";
import {
  toPackageName,
  toTitle,
  isDirEmpty,
  detectPackageManager,
  meetsNodeVersion,
} from "./utils.js";

const MIN_NODE = "22.12.0";

function printHelp(): void {
  const list = TEMPLATES.map((t) => `${t.id}`).join(", ");
  console.log(`
    ${pc.bold("create-gcds-app")} — create a new project from official GC Design System starter templates

    ${pc.bold("Usage")}
      npx create-gcds-app@latest [directory] [options]

    ${pc.bold("Options")}
      -t, --template <id>   Framework to use (${list})
          --ref <git-ref>   Branch/tag/commit to pull templates from (default: ${DEFAULT_REF})
          --no-install      Skip installing dependencies
          --no-git          Skip initializing a git repository
      -h, --help            Show this help
`);
}

function cancel(message = "Operation cancelled."): never {
  p.cancel(message);
  process.exit(1);
}

async function main(): Promise<void> {
  // Node's parseArgs has no built-in `--no-*` negation, so the skip flags are
  // declared explicitly rather than as negations of `install`/`git`.
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      template: { type: "string", short: "t" },
      ref: { type: "string" },
      "no-install": { type: "boolean", default: false },
      "no-git": { type: "boolean", default: false },
      help: { type: "boolean", short: "h", default: false },
    },
  });

  if (values.help) {
    printHelp();
    return;
  }

  const skipInstall = values["no-install"];
  const skipGit = values["no-git"];

  p.intro(pc.bgBlue(pc.white(" create-gcds-app ")));

  // Warn early if Node is too old for the starter apps to install/build.
  if (!meetsNodeVersion(MIN_NODE)) {
    p.log.warn(
      pc.yellow(
        `The starter apps require Node >= ${MIN_NODE}, but you're on ${process.versions.node}. ` +
          `Scaffolding will continue, but install/build may fail.`,
      ),
    );
  }

  // --- 1. Target directory -------------------------------------------------
  const dirArg = positionals[0];
  const dirInput =
    dirArg ??
    (await p.text({
      message: "Where should we create your app?",
      placeholder: "my-gcds-app",
      defaultValue: "my-gcds-app",
      validate: (v) =>
        v && v.includes("..") ? "Path cannot traverse upward." : undefined,
    }));
  if (p.isCancel(dirInput)) cancel();

  const projectName = basename(resolve(dirInput as string));
  const targetDir = resolve(process.cwd(), dirInput as string);

  if (!(await isDirEmpty(targetDir))) {
    const overwrite = await p.confirm({
      message: `${pc.cyan(dirInput as string)} is not empty. Continue and write into it anyway?`,
      initialValue: false,
    });
    if (p.isCancel(overwrite) || !overwrite) cancel();
  }

  // --- 2. Framework / template --------------------------------------------
  let template: Template | undefined;
  if (values.template) {
    template = findTemplate(values.template);
    if (!template) {
      cancel(
        `Unknown template "${values.template}". Available: ${TEMPLATES.map((t) => t.id).join(", ")}`,
      );
    }
  } else {
    const choice = await p.select({
      message: "Which framework would you like to use?",
      options: TEMPLATES.map((t) => ({ value: t.id, label: t.label })),
    });
    if (p.isCancel(choice)) cancel();
    template = findTemplate(choice as string)!;
  }

  // --- 3. Install / git prompts (skipped when the flag is passed) ----------
  const installDeps = skipInstall
    ? false
    : await (async () => {
        const v = await p.confirm({
          message: "Install dependencies now?",
          initialValue: true,
        });
        return p.isCancel(v) ? cancel() : v;
      })();

  const initGit = skipGit
    ? false
    : await (async () => {
        const v = await p.confirm({
          message: "Initialize a git repository?",
          initialValue: true,
        });
        return p.isCancel(v) ? cancel() : v;
      })();

  // --- 4. Fetch the template from the repo ---------------------------------
  const ref = values.ref ?? DEFAULT_REF;
  const source = gigetSource(template!, ref);

  const s = p.spinner();
  s.start(
    `Fetching the ${template!.label} starter from ${pc.dim(`${REPO}#${ref}`)}`,
  );
  try {
    await downloadTemplate(source, {
      dir: targetDir,
      // Always pull a fresh copy: never serve a stale cached template, so the
      // user gets exactly what's on `main` right now. giget pulls a git tarball,
      // so node_modules/dist (gitignored) are naturally excluded.
      force: true,
      forceClean: false,
    });
  } catch (err) {
    s.stop("Fetch failed.");
    p.log.error(
      `Could not download the template from ${source}.\n` +
        `Check your network connection and that the ref "${ref}" exists.\n` +
        `${pc.dim(String(err instanceof Error ? err.message : err))}`,
    );
    process.exit(1);
  }
  // giget reports success even when the requested subdirectory doesn't exist
  // on the ref (it just extracts nothing). Guard against handing the user a
  // silent empty scaffold — most likely the framework isn't on `main` yet.
  if (!existsSync(join(targetDir, "package.json"))) {
    s.stop("Template was empty.");
    p.log.error(
      `No template found at ${pc.cyan(source)}.\n` +
        `The ${template!.label} starter may not exist on "${ref}" yet. ` +
        `Try a different framework, or pass --ref <branch> to pull from where it lives.`,
    );
    process.exit(1);
  }
  s.stop("Template downloaded.");

  // --- 5. Patch package.json name + README title ---------------------------
  await patchProjectMetadata(targetDir, projectName);

  // --- 6. git init ---------------------------------------------------------
  if (initGit && !existsSync(join(targetDir, ".git"))) {
    const git = spawnSync("git", ["init"], { cwd: targetDir, stdio: "ignore" });
    if (git.status === 0) {
      spawnSync("git", ["add", "-A"], { cwd: targetDir, stdio: "ignore" });
      spawnSync(
        "git",
        [
          "commit",
          "-m",
          "Initial commit from create-gcds-app",
          "--no-gpg-sign",
        ],
        { cwd: targetDir, stdio: "ignore" },
      );
    } else {
      p.log.warn(
        "git init failed (is git installed?). Skipping repository setup.",
      );
    }
  }

  // --- 7. Install dependencies ---------------------------------------------
  const pm = detectPackageManager();
  if (installDeps) {
    const installSpinner = p.spinner();
    installSpinner.start(`Installing dependencies with ${pm}`);
    const install = spawnSync(pm, ["install"], {
      cwd: targetDir,
      stdio: "ignore",
    });
    if (install.status === 0) {
      installSpinner.stop("Dependencies installed.");
    } else {
      installSpinner.stop(
        "Dependency install failed — you can run it yourself below.",
      );
    }
  }

  // --- 8. Next steps -------------------------------------------------------
  const steps = [`cd ${dirInput as string}`];
  if (!installDeps) steps.push(`${pm} install`);
  steps.push(`${pm === "npm" ? "npm run" : pm} dev`);

  p.note(steps.join("\n"), "Next steps");
  p.outro(pc.green("Your GC Design System app is ready. 🍁"));
}

/**
 * Rewrite the scaffolded package.json `name` and the README H1 to match the
 * user's chosen project name. Both failures are non-fatal — a scaffold that
 * exists is more useful than one aborted over a cosmetic rename.
 */
async function patchProjectMetadata(
  targetDir: string,
  projectName: string,
): Promise<void> {
  const pkgName = toPackageName(projectName) || "gcds-app";

  // package.json name + reset version.
  const pkgPath = join(targetDir, "package.json");
  if (existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(await readFile(pkgPath, "utf8"));
      pkg.name = pkgName;
      pkg.version = "0.0.0";
      await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
    } catch {
      p.log.warn(
        "Could not update package.json name; leaving the template default.",
      );
    }
  }

  // README H1 -> friendly title.
  const readmePath = await firstExisting(targetDir, ["README.md", "readme.md"]);
  if (readmePath) {
    try {
      const readme = await readFile(readmePath, "utf8");
      const title = toTitle(projectName) || "GCDS App";
      const replaced = readme.replace(/^#\s.*$/m, `# ${title}`);
      if (replaced !== readme) await writeFile(readmePath, replaced);
    } catch {
      // Non-fatal: leave README as-is.
    }
  }
}

async function firstExisting(
  dir: string,
  names: string[],
): Promise<string | undefined> {
  let entries: string[];
  try {
    entries = await readdir(dir);
  } catch {
    return undefined;
  }
  for (const name of names) {
    if (entries.includes(name)) return join(dir, name);
  }
  return undefined;
}

main().catch((err) => {
  p.log.error(String(err instanceof Error ? err.stack : err));
  process.exit(1);
});
