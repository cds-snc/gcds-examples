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
