[La version française suit.](#contribuer-à-create-gcds-app)

# Contributing to create-gcds-app

## Development

```sh
npm install
npm run dev
npm run build
npm run typecheck

# Faites-en l’essai localement avec une extraction réelle:
node dist/index.js /tmp/test-app --template vue --no-install
```

## Adding a framework

Templates are declared in [`src/templates.ts`](src/templates.ts). The prompt and giget fetch spec derive from the `TEMPLATES` array, so adding HTML, Angular, or anything else is a single entry there — but also update the hard-coded CI matrix in [`.github/workflows/validate-starter-templates.yml`](../../.github/workflows/validate-starter-templates.yml) to keep it in sync.

## Publishing

```sh
npm version <patch|minor|major>
npm publish        # prepublishOnly exécute la version
```

Because templates are fetched at runtime, you only need to republish when the **CLI's own behaviour** changes, not when a starter app changes.

--------

# Contribuer à create-gcds-app

## Développement

```sh
npm install
npm run dev
npm run build
npm run typecheck

# Try it locally against a real fetch:
node dist/index.js /tmp/test-app --template vue --no-install
```

## Ajouter un cadre

Les modèles sont déclarés dans [`src/templates.ts`](src/templates.ts). La spécification d’extraction de la fonction d’invite et du paquet giget proviennent de la matrice `TEMPLATES`. Ainsi, il suffit d’une seule entrée à cet endroit pour ajouter un cadre HTML, Angular ou autre. Toutefois, il faut également mettre à jour de la matrice CI figée dans le code du référentiel [`.github/workflows/validate-starter-templates.yml`](../../.github/workflows/validate-starter-templates.yml) pour la synchroniser.

## Publication

```sh
npm version <patch|minor|major>
npm publish        # prepublishOnly runs the build
```

Étant donné que les modèles sont extraits au moment de l’exécution, vous n’avez besoin de les publier que lorsque le **comportement de l’interface de ligne de commande (ILC)** change, et non lorsqu’une application de départ change.
