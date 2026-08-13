[La version française suit.](#Application-de-démarrage-HTML-(HTML-de-base)-avec-les-composants-de-Système-de-design-GC)

# HTML Starter App (Plain HTML) with GCDS Components

This starter helps you bootstrap a plain HTML website using GC Design System components loaded directly from the [design system CDN](https://cdn.design-system.canada.ca/) — no build step, no bundler, no `npm install` required.

If you want more advanced tooling (templating, partials, a build step) while still writing plain HTML/CSS/JS, see the upcoming static-site-generator variant of this starter (not yet available).

## What this starter includes

- Plain HTML pages using `<gcds-*>` web components from the CDN
- Localized routing via folders/files (`en` / `fr`), matching the route contract below
- Shared app shell (GCDS header, top navigation, breadcrumbs, container, footer)
- Each page is a self-contained file
- Sample pages (Home, About, About Topic, Report a Bug, Not Found)
- A working Report a Bug form with client-side validation

## Route contract

- `/en/` and `/fr/`
- `/en/about/` and `/fr/a-propos/`
- `/en/about/topic/` and `/fr/a-propos/sujet/`
- `/en/report-a-bug/` and `/fr/signaler-un-bug/`
- `/404.html` (see the TODO comment in that file if your host supports locale-specific error pages)

## Development

There's nothing to install. Either:

- Open `en/index.html` (or `fr/index.html`) directly in your browser, or
- Serve the folder with any static file server, for example:
  ```sh
  npx serve .
  ```

## Keeping the CDN links up to date

Every page links to a specific pinned version of `@gcds-core/components` and `@gcds-core/css-shortcuts`. Check the changelogs below periodically and update the version numbers in each HTML file:

- [`@gcds-core/components` changelog](https://github.com/cds-snc/gcds-components/blob/main/CHANGELOG.md)
- [`@gcds-core/css-shortcuts` changelog](https://github.com/cds-snc/gcds-css-shortcuts/blob/main/CHANGELOG.md)

## Deploying

This is plain static HTML. Deploy it to any static host (GitHub Pages, Netlify, S3, etc.). Remember to:

- Remove the `<!-- TODO -->` comments before shipping to production
- Configure your host to serve `404.html` as the error page
- Consider a server-level redirect from `/` to `/en/` instead of the meta-refresh in [`index.html`](index.html), if your host supports it

---

# Application de démarrage HTML (HTML de base) avec les composants de Système de design GC

Cette application de démarrage HTML peut être utilisé afin d’amorcer un site web HTML de base en utilisant les composants de Système de design GC chargés directement du [CDN du système de design system](https://cdn.design-system.canada.ca/). Aucune autre étape à faire ou installation avec npm n’est requise.

Si vous désirez un outil plus avancé pour des gabarits, fragments réutilisables (partials) ou étape de développement tout en utilisant du HTML de base, CSS et Javascript, restez à l’affût du prochain variant de cet application de démarrage, le static-site-generator, qui n’est pas encore disponible.


## Ce que cet application de démarrage inclut

- Pages HTML de base qui utilisent les composants web `<gcds-*>` du CDN
- Routage localisé par les dossiers/fichiers (`en` / `fr`), conforme au contrat de route ci-dessous
- Application Shell partagés (en-tête, barre de navigation supérieure, chemin de navigation, conteneur, pied de page)
- Chaque page est un fichier indépendant
- Pages d’exemples (Accueil, À propos, À propos d’un sujet, Signaler un bogue, Page introuvable)
- Un formulaire fonctionnel pour signaler un bogue avec validation coté client

## Contrat de route

- `/en/` et `/fr/`
- `/en/about/` et `/fr/a-propos/`
- `/en/about/topic/` et `/fr/a-propos/sujet/`
- `/en/report-a-bug/` et `/fr/signaler-un-bug/`
- `/404.html` (voir les commentaire TODO dans ce fichier si vous utilisez des pages d’erreur spécifiques)

## Développement

Il n’y a rien à installer. Veuillez seulement :

- Ouvrir `en/index.html` (ou `fr/index.html`) directement dans votre navigateur, ou
- Servir le dossier avec n’importe quel serveur de fichier statique, par exemple :
  ```sh
  npx serve .
  ```

## Garder les liens CDN à jour

Chaque page pointent vers une version spécifique de `@gcds-core/components` et `@gcds-core/css-shortcuts`. Vérifiez régulièrement le journal des modification ci-dessous et mettre à jour les numéros de versions dans chaque fichier HTML :

- [Journal des modifications `@gcds-core/components`](https://github.com/cds-snc/gcds-components/blob/main/CHANGELOG.md#journal-des-modifications)
- [Journal des modifications `@gcds-core/css-shortcuts`](https://github.com/cds-snc/gcds-css-shortcuts/blob/main/CHANGELOG.md#journal-des-modifications)

## Mise en oeuvre

Du HTML de base est utilisé. Publiez-le sur tout service d’hébergement statique (GitHub Pages, Netlify, S3, etc.). Rappelez-vous :

- d’enlever les commentaires `<!-- TODO -->` avant de publier en production
- de configurer votre serveur d'hébergement afin d’utiliser la page d’erreur `404.html`
- de considérer une redirection au niveau du serveur de `/` à `/en/` au lieu du meta-refresh dans [`index.html`](index.html) si votre hébergement le supporte
