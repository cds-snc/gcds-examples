# React Starter App (TypeScript) with GCDS Components

This starter app helps you bootstrap a React + TypeScript project using GC Design System components from [`@gcds-core/components-react`](https://www.npmjs.com/package/@gcds-core/components-react).

## What this starter includes

- React 19 + TypeScript + Vite
- Localized routing (`en` / `fr`) with `react-router-dom`
- i18n with `i18next` + `react-i18next`
- Shared app shell using GCDS header, top navigation, breadcrumbs, container, and footer
- Sample pages (Home, About, About Topic, Report a Bug, Not Found)
- Unit tests with Vitest + Testing Library
- End-to-end tests with Playwright
- Accessibility smoke tests with axe-playwright
- Linting, format checks, type checks, and a composite `check` script

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
npm run typecheck
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

## Optional local co-development with gcds-components-main

By default this starter uses published npm packages. If you want to test local wrapper/component changes from a sibling checkout:

1. Build or link packages from `../gcds-components-main`.
2. Override dependencies in this starter to local `file:` paths.
3. Run `npm install` again in this starter.

This workflow is optional and not required for normal starter usage.
