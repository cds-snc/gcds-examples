# Vue3 Starter App with GCDS Components Vue Package
This is a starter app that you can use to bootstrap your project using Vue 3 and GCDS Components.

## Project Structure
A brief overview of the project structure:

```graphql
vue-template/                     # Project root (JavaScript)
├── e2e/                          # End-to-end tests
├── public/                       # Static assets
├── src/                          # Source files
│   ├── components/               # Vue components
│   │   ├── __tests__/            # Unit tests
│   │   ├── forms/                # Form components
│   │   ├── AppLink.vue           # GCDS implementation of a router link component
│   │   ├── Container.vue         # Example usage of gcds-container
│   │   ├── DateModified.vue      # Example usage of gcds-date-modified
│   │   ├── Header.vue            # Example usage of gcds-header
│   │   ├── Footer.vue            # Example usage of gcds-footer
│   │   ├── HeaderBreadcrumbs.vue # Example usage of gcds-breadcrumbs
│   │   ├── Heading.vue           # Example usage of gcds-heading
│   │   ├── NavLink.vue           # Example usage of gcds-nav-link
│   │   └── Text.vue              # Example usage of gcds-text
│   ├── config/                   # Configuration files
│   ├── i18n/                     # Localization files
│   ├── router/                   # Router configuration
│   ├── stores/                   # Pinia stores
│   ├── utils/                    # Utility functions
│   ├── views/                    # Route views (Home.vue, About/, NotFound.vue, ReportABug.vue)
│   ├── App.vue                   # Root component
│   └── main.js                   # Entry point
├── .eslintrc.cjs                 # ESLint configuration
├── .prettierrc.json              # Prettier configuration
├── package.json                  # Project metadata and dependencies
├── playwright.config.js          # Playwright configuration
├── vitest.config.js              # Vitest configuration
└── vite.config.js                # Vite configuration
```

## Future / Planned
The `vue-template` project is the first starter template, built in JavaScript to establish the base structure for GCDS Vue starter apps. Future variants like `vue-template-typescript` can follow the same pattern.
