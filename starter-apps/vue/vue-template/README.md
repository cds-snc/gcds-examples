# vue-starter-app

This template should help get you started developing with Vue 3 in Vite using GCDS Components from [@gcds-core/components-vue](https://www.npmjs.com/package/@gcds-core/components-vue).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# Runs the end-to-end tests
npm run test:e2e

# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
```

### Linting and formatting

```sh
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

### Run all checks

```sh
npm run check
```
