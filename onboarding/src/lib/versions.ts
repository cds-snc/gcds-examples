/**
 * Latest published GCDS versions, looked up on the npm registry when the site
 * builds, so CDN links and "Current version" always show the newest release.
 * Rebuild the site to pick up a new release.
 *
 * If npm can't be reached (for example an offline build), it falls back to
 * the version installed in node_modules.
 *
 * Build-time only: don't import this from a <script> that runs in the browser.
 */
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

async function latest(pkg: string): Promise<string> {
  try {
    const res = await fetch(`https://registry.npmjs.org/-/package/${pkg}/dist-tags`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { latest } = (await res.json()) as { latest?: string };
    if (!latest) throw new Error('no "latest" tag');
    return latest;
  } catch (error) {
    const installed: string = require(`${pkg}/package.json`).version;
    console.warn(`[versions] Couldn't get the latest ${pkg} from npm (${error}). Using installed ${installed}.`);
    return installed;
  }
}

export const [GCDS_VERSION, TOKENS_VERSION, SHORTCUTS_VERSION] = await Promise.all([
  latest('@gcds-core/components'),
  latest('@gcds-core/tokens'),
  latest('@gcds-core/css-shortcuts'),
]);
