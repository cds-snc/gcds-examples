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
