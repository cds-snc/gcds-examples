import { parseArgs } from "node:util";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve, join, basename, extname } from "node:path";
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

  // Fail fast on stray positionals (e.g. an unquoted "My App" the shell split
  // into two args) rather than silently scaffolding into just the first one.
  if (positionals.length > 1) {
    cancel(
      "Too many arguments — expected at most one directory. Quote names with spaces, or run with --help.",
    );
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
  // The prompt's own validate() only runs when no CLI arg is given — apply the
  // same check here so a positional argument can't skip it.
  if (dirArg && dirArg.includes("..")) {
    cancel("Path cannot traverse upward.");
  }
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
  // Templates without a package.json (e.g. HTML starter) have nothing to install,
  // skip the prompt entirely rather than asking a question that has no effect.
  const installDeps =
    skipInstall || !template!.hasPackageJson
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
  // Not every template has a package.json (e.g. HTML starter), check for any
  // files at all rather than one specific name.
  if (await isDirEmpty(targetDir)) {
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

  // --- 5b. Resolve any <version-number> CDN placeholders -------------------
  await injectLatestCdnVersions(targetDir);

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
  if (template!.hasPackageJson) {
    if (!installDeps) steps.push(`${pm} install`);
    steps.push(`${pm === "npm" ? "npm run" : pm} dev`);
  } else {
    // No package.json to install/run — this template is plain static files.
    steps.push("open en/index.html in your browser");
    steps.push("# or serve it locally:");
    steps.push("npx serve .");
  }

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

// Matches e.g. `@gcds-core/components@<version-number>` in a CDN URL. The
// package name is captured so this works for any @gcds-core/* package.
// Templates that don't use this placeholder (React/Vue, which get real versions
// via npm install) simply won't match.
const CDN_VERSION_PATTERN = /@gcds-core\/([a-z-]+)@<version-number>/g;

// Extensions worth scanning for the placeholder (skips images/fonts/etc.)
const SCANNABLE_EXTENSIONS = [
  ".html",
  ".htm",
  ".js",
  ".mjs",
  ".css",
  ".md",
  ".json",
];

/**
 * Templates with no package.json (e.g. HTML starter) can't get their GCDS CDN
 * links via npm install like React/Vue do, so they ship with a `<version-number>`
 * placeholder instead of a hardcoded version that would inevitably go stale.
 * This looks up each package's latest version from npm and fills it in, so the
 * scaffolded app works immediately instead of 404ing on the CDN.
 *
 * Fails soft: a template with no placeholder is untouched (no network calls
 * at all), and a failed registry lookup just leaves that package's
 * placeholder in place with a warning, rather than aborting the scaffold.
 */
async function injectLatestCdnVersions(targetDir: string): Promise<void> {
  const files = (await walkFiles(targetDir)).filter((f) =>
    SCANNABLE_EXTENSIONS.includes(extname(f)),
  );

  const matchingFiles = new Map<string, string>();
  const packagesNeeded = new Set<string>();

  for (const file of files) {
    let content: string;
    try {
      content = await readFile(file, "utf8");
    } catch {
      continue;
    }
    const matches = content.matchAll(CDN_VERSION_PATTERN);
    let found = false;
    for (const match of matches) {
      found = true;
      packagesNeeded.add(match[1]!);
    }
    if (found) matchingFiles.set(file, content);
  }

  if (packagesNeeded.size === 0) return; // this template doesn't use the placeholder

  const s = p.spinner();
  s.start("Looking up the latest GC Design System versions");

  const resolved = new Map<string, string>();
  const failed: string[] = [];
  await Promise.all(
    Array.from(packagesNeeded).map(async (pkg) => {
      try {
        const res = await fetch(
          `https://registry.npmjs.org/@gcds-core/${pkg}/latest`,
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { version?: string };
        if (!data.version) throw new Error("no version in response");
        resolved.set(pkg, data.version);
      } catch {
        failed.push(pkg);
      }
    }),
  );

  if (resolved.size > 0) {
    for (const [file, content] of matchingFiles) {
      let updated = content;
      for (const [pkg, version] of resolved) {
        updated = updated
          .split(`@gcds-core/${pkg}@<version-number>`)
          .join(`@gcds-core/${pkg}@${version}`);
      }
      if (updated !== content) await writeFile(file, updated);
    }
  }

  if (failed.length > 0) {
    s.stop("Some GC Design System versions couldn't be resolved.");
    p.log.warn(
      `Couldn't reach npm to look up the latest version for: ${failed
        .map((pkg) => `@gcds-core/${pkg}`)
        .join(", ")}.\n` +
        `Those CDN links still have the <version-number> placeholder — check the package's ` +
        `changelog and update them manually.`,
    );
  } else {
    s.stop("Updated to the latest GC Design System versions.");
  }
}

async function walkFiles(dir: string): Promise<string[]> {
  let results: string[] = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(await walkFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
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
