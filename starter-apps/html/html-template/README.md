# HTML Starter App with GCDS Components

This starter app helps you bootstrap a framework-free HTML + JavaScript project using GC Design System Web Components from [`@gcds-core/components`](https://www.npmjs.com/package/@gcds-core/components).

## What this starter includes

- HTML + JavaScript + Vite
- GC Design System Web Components
- Localized routing (`en` / `fr`) with small route helpers
- Shared app shell using GCDS header, top navigation, breadcrumbs, container, and footer
- Sample pages (Home, About, About Topic, Report a Bug, Not Found)
- Unit tests with Vitest
- End-to-end tests with Playwright
- Accessibility smoke tests with axe-playwright
- Linting, format checks, and a composite `check` script

## Route contract

- `/:locale/`
- `/:locale/about` and `/:locale/a-propos`
- `/:locale/about/topic` and `/:locale/a-propos/sujet`
- `/:locale/report-a-bug` and `/:locale/signaler-un-bug`

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
