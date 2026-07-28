# HTML Starter with GCDS Components

This starter helps you bootstrap a vanilla HTML site using GC Design System Web Components from [`@gcds-core/components`](https://www.npmjs.com/package/@gcds-core/components).

## What this starter includes

- Static HTML pages with Vite for local development and builds
- GC Design System Web Components
- English and French page examples as separate HTML files
- GCDS header, top navigation, breadcrumbs, container, and footer
- Sample pages (Home, About, About Topic, Report a Bug)
- A small optional JavaScript enhancement for the report bug form
- Unit tests with Vitest
- End-to-end tests with Playwright
- Accessibility smoke tests with axe-playwright
- Linting, format checks, and a composite `check` script

## Route contract

- `/` and `/en/`
- `/en/about`
- `/en/about/topic`
- `/en/report-a-bug`
- `/fr/`
- `/fr/a-propos`
- `/fr/a-propos/sujet`
- `/fr/signaler-un-bug`

## Project setup

```sh
npm install
```

## Development

```sh
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Quality checks

```sh
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run check
```

## Tests

```sh
# Unit tests
npm run test:unit

# E2E tests
npx playwright install
npm run test:e2e

# E2E tests only in Chromium
npm run test:e2e -- --project=chromium
```

## Optional local co-development with gcds-components

By default this starter uses published npm packages. If you want to test local Web Component changes from a sibling checkout:

1. Build or link packages from your local [`gcds-components`](https://github.com/cds-snc/gcds-components/) checkout.
2. Override dependencies in this starter to local `file:` paths.
3. Run `npm install` again in this starter.

This workflow is optional and not required for normal starter usage.
