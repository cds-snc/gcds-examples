[La version française suit.](#Application-de-démarrage-HTML-avec-composants-GCDS)

# HTML Starter App with GCDS Components

This is a starter app that you can use to bootstrap your project using plain HTML and GCDS Components, loaded directly from the design system CDN. No build step, no bundler, no npm install required.

## Project Structure

A brief overview of the project structure:

```graphql
html-basic-template/              # Project root (plain HTML/CSS/JS)
├── en/                           # English pages
│   ├── about/
│   │   ├── topic/
│   │   │   └── index.html        # Nested topic page, demonstrates two-level breadcrumbs
│   │   └── index.html            # About page
│   ├── report-a-bug/
│   │   └── index.html            # Report a bug form
│   └── index.html                # Home page
├── fr/                           # French pages, same structure as en/
│   ├── a-propos/
│   │   ├── sujet/
│   │   │   └── index.html
│   │   └── index.html
│   ├── signaler-un-bug/
│   │   └── index.html
│   └── index.html
├── 404.html                      # Not found page
├── index.html                    # Redirects to en/
├── report-a-bug.js               # Shared submit/validation logic for both language forms
└── README.md                     # Project documentation
```

## Future / Planned

The `html-basic-template` project is the first and default HTML starter template. It uses plain HTML/CSS/JS with no build tooling, to establish the base structure for GCDS HTML starter apps. Future variants like `html-ssg-template` will follow the same pattern using a static site generator for more advanced templating, while still outputting plain HTML.

---

# Application de démarrage HTML avec composants de Système de design GC

Cette application de démarrage HTML peut être utilisé afin d'amorcer un site web HTML de base en utilisant les composants de Système de design GC chargés directement du CDN du système de design. Aucune autre étape à faire ou installation avec npm n'est requise.

## Structure du projet

Voici un bref aperçu de la structure du projet:

```graphql
html-basic-template/              # Base du projet (HTML de base/CSS/JS)
├── en/                           # Pages en anglais
│   ├── about/
│   │   ├── topic/
│   │   │   └── index.html        # Page de sujet imbriqué qui démontre un chemin de navigation à deux niveaux
│   │   └── index.html            # Page À propos
│   ├── report-a-bug/
│   │   └── index.html            # Page du formulaire Signaler un bogue
│   └── index.html                # Page d'accueil
├── fr/                           # Pages en français, même structure que /en
│   ├── a-propos/
│   │   ├── sujet/
│   │   │   └── index.html
│   │   └── index.html
│   ├── signaler-un-bug/
│   │   └── index.html
│   └── index.html
├── 404.html                      # Page introuvable
├── index.html                    # Redirige vers en/
├── report-a-bug.js               # Fichier pour la logique de soumission et validation pour les formulaires dans les deux langues
└── README.md                     # Documentation du projet
```

## À venir

L'application de démarrage `html-basic-template` est la première application disponible et celle à utiliser par défaut. Elle utilise les languages de programmation HTML, CSS et Javascript sans avoir a utilisé d'autres outils de développement pour obtenir une structure de base avec le GCDS. De futurs variants tel que `html-ssg-template` suivront des modèles similaires utilisant un générateur de site static pour des gabarits plus avancés, tout en produisant du HTML de base.
