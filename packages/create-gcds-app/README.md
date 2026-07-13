# create-gcds-app

Create a new project from [GC Design System](https://design-system.canada.ca/) starter templates.

## Usage

```sh
npx create-gcds-app@latest
```

You'll be prompted for a directory, a framework, and whether to install dependencies and initialize git.

## How it works

The starter apps are **not** bundled into this package. At runtime the CLI fetches the chosen template directly from the [`cds-snc/gcds-examples`](https://github.com/cds-snc/gcds-examples) repo (`starter-apps/<framework>/<framework>-template`) on the `main` branch, using [giget](https://github.com/unjs/giget). This means:

- Users always get the **latest** starter app — no CLI republish required when a template changes.
- `node_modules/`, `dist/`, and other gitignored files are **never** copied, because giget pulls a git tarball that only contains committed files.

After download, the CLI patches the new project's `package.json` `name` and the README's H1 to match the directory name, then optionally runs `git init` and installs dependencies with whichever package manager invoked it.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development, adding a framework, and publishing.
