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
