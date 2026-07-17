# Angular Starter App with GCDS Components Angular Package

This is a starter app that you can use to bootstrap your project using Angular and GCDS Components

## Project Structure

A brief overview of the project structure:

```graphql
angular-template/                                                     # Project root
├── e2e/                                                              # End-to-end tests
├── public/                                                           # Static assets
├── src/                                                              # Source files
│   ├── app/                                                          # Project assets
│   │   ├── layout/                                                   # Files and components related to global layout
│   │   │   ├── header.component.(html,scss,ts.spec.ts)               # Template, Styles, Typescript and unit test for the header component
│   │   ├── pages/                                                    # Files and components related to pages
│   │   │   ├── about/                                                # Files and components related to about page
│   │   │   │   ├── topic/                                            # Files and components related to topic page
│   │   │   │   │   ├── topic.component.(html,scss,ts.spec.ts)        # Template, Styles, Typescript and unit test for the topic page
│   │   │   │   ├── about.component.(html,scss,ts.spec.ts)            # Template, Styles, Typescript and unit test for the about page
│   │   │   ├── home/                                                 # Files and components related to home page
│   │   │   │   ├── home.component.(html,scss,ts.spec.ts)             # Template, Styles, Typescript and unit test for the home page
│   │   │   ├── report-a-bug/                                         # Files and components related to report a bug page
│   │   │   │   ├── report-a-bug.component.(html,scss,ts.spec.ts)     # Template, Styles, Typescript and unit test for the report a bug page
│   │   ├── app.component.(html,scss,ts.spec.ts)                      # Template, Styles, Typescript and unit test for app component
│   │   ├── app.config.ts                                             # App initialization config
│   │   ├── app.routes.ts                                             # App routes config
│   │   ├── breadcrumb.service.(ts,spec.ts)                           # Exemple breadcrumb service integrated with Angular Router
│   ├── locale/                                                       # Translation Files
│   │   ├── messages.fr.xlf                                           # French Translation
│   │   ├── messages.g.xlf                                            # Original Translation (English)
│   ├── index.html                                                    # HTML template
│   ├── main.ts                                                       # Entry point
│   ├── styles.scss                                                   # Main style file
├── .editorconfig                                                     # IDE config
├── .gitignore                                                        # Git ignore rules
├── .prettierrc                                                       # Prettier configuration
├── angular.json                                                      # Angular configuration
├── eslint.config.js                                                  # Prettier configuration
├── package.json                                                      # Project metadata and dependencies
├── package-lock.json                                                 # Project metadata and dependencies
├── playwright.config.js                                              # Playwright configuration
├── README.md                                                         # Project documentation
├── tsconfig.json                                                     # Global typescript configuration
├── tsconfig.app.json                                                 # App only typescript configuration
├── tsconfig.spec.json                                                # Test only typescript configuration
```
