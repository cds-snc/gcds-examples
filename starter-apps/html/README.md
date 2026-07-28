# HTML Starter with GCDS Components

This is a starter you can use to bootstrap a vanilla HTML site with Vite and GCDS Components.

## Project Structure

A brief overview of the project structure:

```graphql
html-template/                   # Project root (HTML)
├── e2e/                         # End-to-end tests
│   ├── reportABug/              # Report-a-bug e2e scenarios
│   ├── a11y.spec.js             # Accessibility smoke checks
│   ├── aboutPageBreadcrumbs.spec.js
│   └── app.spec.js
├── en/                          # English static HTML pages
│   ├── about/
│   │   └── topic/
│   └── report-a-bug/
├── fr/                          # French static HTML pages
│   ├── a-propos/
│   │   └── sujet/
│   └── signaler-un-bug/
├── public/                      # Static assets
├── src/                         # Shared assets and optional JavaScript enhancements
│   ├── utils/                   # Utility functions
│   │   └── githubIssue.js
│   ├── main.js                  # GCDS web-component and CSS imports
│   ├── report-bug.js            # Report bug form enhancement
│   └── style.css                # Site-only CSS helpers
├── .gitignore                   # Git ignore rules
├── index.html                   # Root English HTML page
├── package.json                 # Project metadata and dependencies
├── eslint.config.js             # ESLint configuration
├── playwright.config.js         # Playwright configuration
├── vitest.config.js             # Vitest configuration
└── vite.config.js               # Vite configuration
```

## Future / Planned

The `html-template` project is the first framework-free starter template, built with static HTML files to establish a complete base structure for GCDS Web Components starter sites. Future variants can follow the same page, testing, and GCDS component patterns.
