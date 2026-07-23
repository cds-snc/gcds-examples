[La version française suit.](#contribuer-à-create-gcds-app-2)

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

# create-gcds-app

Créez un nouveau projet à partir des modèles de démarrage [Système de design GC](https://design-system.canada.ca/).

## Usage

```sh
npx create-gcds-app@latest
```

Vous serez invité à entrer un répertoire, un cadre de travail et à confirmer si vous souhaitez installer des dépendances et initialiser git.

## Comment tout ça fonctionne

Les applications de départ ne sont **pas** incluses dans ce paquet. Au moment de l’exécution, l’interface de ligne de commande (ILC) récupère le modèle choisi directement à partir du référentiel [`cds-snc/gcds-examples`](https://github.com/cds-snc/gcds-examples) (`starter-apps/<framework>/<framework>-template`) sur la branche `main`, à l’aide du paquet [giget](https://github.com/unjs/giget). Ainsi&nbsp;:

- Les utilisateurs ont toujours accès à la **dernière version** d’une application de départ – aucune republication de l’ILC n’est nécessaire lorsqu’un modèle change.
- `node_modules/`, `dist/`, et d’autres fichiers «&nbsp;gitignored&nbsp;» ne sont **jamais** copiés, car giget tire une archive git tar (git tarball) qui ne contient que des fichiers validés.

Après le téléchargement, l’ILC corrige le `name` du `package.json` et le titre H1 du fichier README pour qu’ils correspondent au nom du répertoire, puis exécute au besoin `git init` et installe les dépendances avec le gestionnaire de paquets qui l’a interpelé.

## Contribuer

Voir [CONTRIBUTING.MD](CONTRIBUTING.md) pour le développement local, l’ajout d’un cadre et la publication.
