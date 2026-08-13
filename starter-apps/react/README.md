[La version française suit.](#Application-de-démarrage-React-avec-composants-de-Système-de-design-GC)

# React Starter App with GCDS Components

This is a starter app that you can use to bootstrap your project using React, TypeScript, and GCDS Components.

## Project Structure

A brief overview of the project structure:

```graphql
react-template/                  # Project root (TypeScript)
├── e2e/                         # End-to-end tests
│   ├── reportABug/              # Report-a-bug e2e scenarios
│   ├── a11y.spec.ts             # Accessibility smoke checks
│   ├── aboutPageBreadcrumbs.spec.ts
│   └── app.spec.ts
├── public/                      # Static assets
├── src/                         # Source files
│   ├── components/              # React shared components
│   │   ├── AppLink.tsx          # Router-aware wrapper for GCDS links/nav/breadcrumb items
│   │   ├── AppShell.tsx         # Header, navigation, breadcrumbs, container, footer shell
│   │   └── AppShell.test.tsx    # Unit test for shell locale-link behavior
│   ├── i18n/                    # i18n configuration and translations
│   │   ├── index.ts             # i18next setup + document lang/dir helpers
│   │   └── resources.ts         # EN/FR translation resources
│   ├── pages/                   # Route pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── AboutTopic.tsx
│   │   ├── ReportABug.tsx
│   │   ├── NotFound.tsx
│   │   ├── ReportABug.test.tsx
│   │   └── NotFound.test.tsx
│   ├── routing/                 # Localized route constants + helpers
│   │   ├── AppRoutes.tsx
│   │   ├── LocaleRoute.tsx
│   │   ├── constants.ts
│   │   ├── localizedRoutes.ts
│   │   └── localizedRoutes.test.ts
│   ├── types/                   # Type definitions
│   │   └── report.ts
│   ├── utils/                   # Utility functions
│   │   └── githubIssue.ts
│   ├── main.tsx                 # Entry point
│   └── setupTests.ts            # Vitest setup
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Lockfile
├── eslint.config.js             # ESLint configuration
├── playwright.config.ts         # Playwright configuration
├── vitest.config.ts             # Vitest configuration
├── vite.config.ts               # Vite configuration
├── tsconfig.app.json            # App TypeScript config
├── tsconfig.node.json           # Tooling TypeScript config
└── tsconfig.json                # TS project references
```

## Future / Planned

The `react-template` project is the first React starter template, built in TypeScript to establish a complete base structure for GCDS React starter apps. Future variants can follow the same pattern (for example SSR-oriented setups).

---

# Application de démarrage React avec composants de Système de design GC

Cette application de démarrage HTML peut être utilisé afin d’amorcer un projet en utilisant React, TypeScript et les composants de Système de design GC.

## Structure du projet

Voici un bref aperçu de la structure du projet:

```graphql
react-template/                  # Base du projet (TypeScript)
├── e2e/                         # Tests de bout en bout
│   ├── reportABug/              # Scénarios de test de signalement de bogue
│   ├── a11y.spec.ts             # Vérifications sommaires d'accessibilité
│   ├── aboutPageBreadcrumbs.spec.ts
│   └── app.spec.ts
├── public/                      # Ressources statiques
├── src/                         # Fichiers source
│   ├── components/              # Composants React partagés
│   │   ├── AppLink.tsx          # Enveloppe compatible avec le routeur pour les liens, la navigation et le chemin de navigation
│   │   ├── AppShell.tsx         # En-tête, navigation, chemin de navigation, conteneur et structure du pied de page
│   │   └── AppShell.test.tsx    # Test unitaire du comportement du lien de langue du conteneur
│   ├── i18n/                    # Configuration de l'internationalisation et traductions
│   │   ├── index.ts             # Configuration d'i18next et fonctions utilitaires pour la langue et la direction du document
│   │   └── resources.ts         # Ressources de traduction EN/FR
│   ├── pages/                   # Pages de routage
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── AboutTopic.tsx
│   │   ├── ReportABug.tsx
│   │   ├── NotFound.tsx
│   │   ├── ReportABug.test.tsx
│   │   └── NotFound.test.tsx
│   ├── routing/                 # Constantes et fonctions utilitaires de routage localisé
│   │   ├── AppRoutes.tsx
│   │   ├── LocaleRoute.tsx
│   │   ├── constants.ts
│   │   ├── localizedRoutes.ts
│   │   └── localizedRoutes.test.ts
│   ├── types/                   # Définitions de types
│   │   └── report.ts
│   ├── utils/                   # Fonctions utilitaires
│   │   └── githubIssue.ts
│   ├── main.tsx                 # Point d'entrée
│   └── setupTests.ts            # Configuration de Vitest
├── .gitignore                   # Règles d'exclusion Git
├── index.html                   # Modèle HTML
├── package.json                 # Métadonnées du projet et dépendances
├── package-lock.json            # Fichier de verrouillage des dépendances
├── eslint.config.js             # Configuration d'ESLint
├── playwright.config.ts         # Configuration de Playwright
├── vitest.config.ts             # Configuration de Vitest
├── vite.config.ts               # Configuration de Vite
├── tsconfig.app.json            # Configuration TypeScript de l'application
├── tsconfig.node.json           # Configuration des outils TypeScript
└── tsconfig.json                # Références du projet TS
```

## À venir

L'application de démarrage `react-template` est la première application disponible et celle à utiliser par défaut. Elle utilise le language Typescript et établie une structure de base pour le développement d'applications avec React. De futurs variants, comme les configurations axées sur le rendu côté serveur (SSR), suivront des modèles similaires.
