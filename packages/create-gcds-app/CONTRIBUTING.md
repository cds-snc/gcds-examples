# Contributing to create-gcds-app

## Development

```sh
npm install
npm run dev
npm run build
npm run typecheck

# Try it locally against a real fetch:
node dist/index.js /tmp/test-app --template vue --no-install
```

## Adding a framework

Templates are declared in [`src/templates.ts`](src/templates.ts). The prompt and giget fetch spec derive from the `TEMPLATES` array, so adding HTML, Angular, or anything else is a single entry there — but also update the hard-coded CI matrix in [`.github/workflows/validate-starter-templates.yml`](../../.github/workflows/validate-starter-templates.yml) to keep it in sync.

## Publishing

```sh
npm version <patch|minor|major>
npm publish        # prepublishOnly runs the build
```

Because templates are fetched at runtime, you only need to republish when the **CLI's own behaviour** changes, not when a starter app changes.
