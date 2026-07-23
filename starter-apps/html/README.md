# HTML Starter App with GCDS Components

This is a starter app that you can use to bootstrap your project using HTML, JavaScript, Vite, and GCDS Components.

## Project Structure

A brief overview of the project structure:

```graphql
html-template/                   # Project root (JavaScript)
├── e2e/                         # End-to-end tests
│   ├── reportABug/              # Report-a-bug e2e scenarios
│   ├── a11y.spec.js             # Accessibility smoke checks
│   ├── aboutPageBreadcrumbs.spec.js
│   └── app.spec.js
├── public/                      # Static assets
├── src/                         # Source files
│   ├── i18n/                    # EN/FR translation resources
│   │   └── resources.js
│   ├── routing/                 # Localized route constants + helpers
│   │   ├── constants.js
│   │   ├── localizedRoutes.js
│   │   └── localizedRoutes.test.js
│   ├── utils/                   # Utility functions
│   │   └── githubIssue.js
│   ├── main.js                  # GCDS web-component app shell and pages
│   └── style.css                # App-only CSS helpers
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Project metadata and dependencies
├── eslint.config.js             # ESLint configuration
├── playwright.config.js         # Playwright configuration
├── vitest.config.js             # Vitest configuration
└── vite.config.js               # Vite configuration
```

## Future / Planned

The `html-template` project is the first framework-free starter template, built in JavaScript to establish a complete base structure for GCDS Web Components starter apps. Future variants can follow the same localized routing, testing, and GCDS component patterns.
