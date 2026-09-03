import { readdir } from "node:fs/promises";

/**
 * Turn an arbitrary project name into a valid npm package name:
 * lowercase, spaces/invalid chars collapsed to hyphens, no leading/trailing
 * or repeated hyphens. Mirrors the subset of npm naming rules that matters for
 * a scaffolded private app.
 */
export function toPackageName(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-~]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

/**
 * Derive a friendly, title-cased heading from a (possibly hyphenated) name,
 * used to rewrite the scaffolded README's H1. e.g. "my-gcds-app" -> "My Gcds App".
 */
export function toTitle(input: string): string {
  return toPackageName(input)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** True when the target directory does not exist or is empty (ignoring .git). */
export async function isDirEmpty(dir: string): Promise<boolean> {
  try {
    const entries = await readdir(dir);
    return entries.filter((e) => e !== ".git").length === 0;
  } catch {
    // ENOENT — directory doesn't exist yet, which counts as "empty".
    return true;
  }
}

/**
 * Detect the package manager that invoked us via npm's user-agent string,
 * so `pnpm create` / `yarn create` install with the matching client.
 * Defaults to npm.
 */
export function detectPackageManager(): "npm" | "pnpm" | "yarn" | "bun" {
  const ua = process.env.npm_config_user_agent ?? "";
  if (ua.startsWith("pnpm")) return "pnpm";
  if (ua.startsWith("yarn")) return "yarn";
  if (ua.startsWith("bun")) return "bun";
  return "npm";
}

/** Compare the running Node version against a `major.minor.patch` minimum. */
export function meetsNodeVersion(min: string): boolean {
  const parse = (v: string) =>
    v.replace(/^v/, "").split(".").map((n) => parseInt(n, 10) || 0);
  const [curMajor = 0, curMinor = 0, curPatch = 0] = parse(process.versions.node);
  const [minMajor = 0, minMinor = 0, minPatch = 0] = parse(min);
  if (curMajor !== minMajor) return curMajor > minMajor;
  if (curMinor !== minMinor) return curMinor > minMinor;
  return curPatch >= minPatch;
}
