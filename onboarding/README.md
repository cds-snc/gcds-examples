# GCDS developer onboarding

A guided onboarding site for developers who are new to the GC Design System, built with [Astro](https://astro.build) and GCDS components.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## How it's put together

- **Published packages only.** The site runs on `@gcds-core/components`, `@gcds-core/tokens` and `@gcds-core/css-shortcuts` from npm, pinned in `package.json`.
- **Version numbers shown on the site** (CDN links, "Current version") are the latest releases on npm, looked up when the site builds (`src/lib/versions.ts`). Rebuild to pick up a new release. If npm can't be reached, the build uses the installed versions. Keep the installed packages up to date too, so the site runs the same version it tells people to use.
- **Live examples** use [`@gcds-extensions/code-display`](https://github.com/gcds-extensions/code-display) through `Demo.astro`. It renders the markup and generates HTML, React, Vue and Angular code, following the reader's framework choice. Each example needs a **single root element**: v1.0.1 drops everything after the first one in the React, Vue and Angular output. Use `landmark` for page-level components such as the header and footer, which renders them in an iframe.
- **Static code** (terminal commands, config files, full pages) uses `CodeBlock.astro` / `FwCode.astro`. `FwCode` derives React from HTML (`src/lib/convert.ts`).
- **Playground data** comes from `src/data/gcds-components-<version>.json`, a copy of `packages/web/specs/components.json` from the matching [gcds-components](https://github.com/cds-snc/gcds-components) release tag. It feeds the code display's Attributes, Slots and Events tabs (`src/lib/playground.ts`). Replace it when you upgrade `@gcds-core/components`.
- **Token explorer** on the tokens page lists every global colour and spacing token, read at build time from `@gcds-core/tokens` (`src/lib/tokens.ts`). Keep that package's version the same as `@gcds-core/components`.
- **Progress and framework choice** are stored in `localStorage` only. There's no backend.
