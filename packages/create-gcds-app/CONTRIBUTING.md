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

Templates are declared in [`src/templates.ts`](src/templates.ts). Adding HTML, Angular, or anything else is a single entry in the `TEMPLATES` array — the prompt, fetch spec, and CI validation matrix all derive from it.

## Publishing

```sh
npm version <patch|minor|major>
npm publish        # prepublishOnly runs the build
```

Because templates are fetched at runtime, you only need to republish when the **CLI's own behaviour** changes, not when a starter app changes.
