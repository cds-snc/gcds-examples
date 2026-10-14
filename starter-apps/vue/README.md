[La version française suit.](#Application-de-démarrage-Vue3-avec-composants-de-Système-de-design-GC)

# Vue3 Starter App with GCDS Components Vue Package

This is a starter app that you can use to bootstrap your project using Vue3 and GCDS Components

## Project Structure

A brief overview of the project structure:

```graphql
vue-template/                     # Project root (Javascript)
├── e2e/                          # End-to-end tests
├── public/                       # Static assets
├── src/                          # Source files
│   ├── assets/                   # Project assets
│   ├── components/               # Vue components
│   │   ├── __tests__/            # Unit tests
│   │   ├── forms/                # Form components
│   │   ├── AppLink.vue           # GCDS implementation of a router link component
│   │   ├── Container.vue         # Example of usage of the GCDS container component
│   │   ├── DateModified.vue      # Example of usage of the GCDS date modified component
│   │   ├── Header.vue            # Example of usage of the GCDS header component
│   │   ├── Footer.vue            # Example of usage of the GCDS footer component
│   │   ├── HeaderBreadcrumbs.vue # Example of usage of the GCDS breadcrumbs component
│   │   ├── Heading.vue           # Example of usage of the GCDS heading component
│   │   ├── NavLink.vue           # Example of usage of the GCDS nav link component
│   │   └── Text.vue              # Example of usage of the GCDS text component
│   ├── config                    # Configuration files
│   │   └── constants.js          # Constants file
│   ├── i18n                      # Configuration files
│   │   ├── en.js                 # English translations
│   │   └── fr.js                 # French translations
│   │   └── index.js              # Constants file
│   ├── router                    # Router config folder
│   │   └── index.js              # Router configuration
│   ├── stores                    # Pinia store folder
│   │   └── formStore.js          # Example store file for forms
│   ├── utils                     # Utility functions
│   │   ├── nav.js                # Navigation utility functions
│   │   └── refresh.js            # Utility function to refresh states
│   ├── views                     # Views folder
│   │   ├── About/                # View files for the about page
│   │   ├── HomeView.vue          # Example view file
│   │   ├── NotFound.vue          # Page not found view file
│   │   └── ReportABug.vue        # Example view file using GCDS components
│   ├── App.vue                   # Root component
│   └──main.js                    # Entry point
├── .gitignore                    # Git ignore rules
├── index.html                    # HTML template
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
├── .eslintrc.js                  # ESLint configuration
├── .prettierrc.js                # Prettier configuration
├── playwright.config.js          # Playwright configuration
├── vitest.config.js              # Vite test configuration
└── vite.config.js                # Vite configuration
```

## Future / Planned

The `vue-template` project is the default and first starter template, built in JavaScript to establish the base structure for GCDS Vue starter apps; future variants like `vue-template-typescript` will follow the same pattern with TypeScript support.

---

# Application de démarrage Vue3 avec composants de Système de design GC

Cette application de démarrage HTML peut être utilisé afin d’amorcer un projet en utilisant Vue3 et les composants de Système de design GC.

## Structure du projet

Voici un bref aperçu de la structure du projet:

```graphql
vue-template/                     # Base du projet (Javascript)
├── e2e/                          # Dossier des tests de bout en bout
├── public/                       # Dossier ressources statiques
├── src/                          # Dossier des fichiers source
│   ├── assets/                   # Dossier de ressources du projet
│   ├── components/               # Composants Vue
│   │   ├── __tests__/            # Tests unitaires
│   │   ├── forms/                # Composants de formulaires
│   │   ├── AppLink.vue           # Implémentation d'un composant de lien routeur
│   │   ├── Container.vue         # Exemple d'utilisation du composant Conteneur
│   │   ├── DateModified.vue      # Exemple d'utilisation du composant Date de modification
│   │   ├── Header.vue            # Exemple d'utilisation du composant En-tête
│   │   ├── Footer.vue            # Exemple d'utilisation du composant Pied de page
│   │   ├── HeaderBreadcrumbs.vue # Exemple d'utilisation du composant Chemin de navigation
│   │   ├── Heading.vue           # Exemple d'utilisation du composant Titre
│   │   ├── NavLink.vue           # Exemple d'utilisation du composant Lien de navigation
│   │   └── Text.vue              # Exemple d'utilisation du composant Texte
│   ├── config                    # Dossier de configuration
│   │   └── constants.js          # Fichier de constantes
│   ├── i18n                      # Dossier de configuration des langues supportées
│   │   ├── en.js                 # Traduction en anglais
│   │   └── fr.js                 # Traduction en français
│   │   └── index.js              # Fichier de constantes
│   ├── router                    # Dossier de configuration routeur
│   │   └── index.js              # Router configuration
│   ├── stores                    # Dossier stores
│   │   └── formStore.js          # Example de fichier store pour formulaires
│   ├── utils                     # Fonctions utils (utilité)
│   │   ├── nav.js                # Fonction utilité de navigatio,
│   │   └── refresh.js            # Fonction utilité du rafraichissement des états
│   ├── views                     # Dossier des fichiers views (affichage)
│   │   ├── About/                # Fichier de l'affichage pour la page à propos
│   │   ├── HomeView.vue          # Fichier de l'affichage pour la page d'accueil
│   │   ├── NotFound.vue          # Fichier de l'affichage pour la page introuvable
│   │   └── ReportABug.vue        # Fichier de l'affichage pour la page signaler un bogue
│   ├── App.vue                   # Composant de base
│   └──main.js                    # Point d'entrée
├── .gitignore                    # Règlements Git ignore
├── index.html                    # Gabarit HTML
├── package.json                  # Métadonnées et dépendances du projet
├── README.md                     # Documentation du projet
├── .eslintrc.js                  # Configurations ESLint
├── .prettierrc.js                # Configurations Prettier
├── playwright.config.js          # Configurations Playwright
├── vitest.config.js              # Test de configuration Vite
└── vite.config.js                # Configurations Vite 
```

## À venir

L'application de démarrage `vue-template` est la première application disponible et celle à utiliser par défaut. Elle utilise le language JavaScript et établie une structure de base pour le développement d'applications avec Vue. De futurs variants tel que `vue-template-typescript` suivront des modèles similaires avec le support pour TypeScript.
