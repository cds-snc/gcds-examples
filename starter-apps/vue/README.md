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
