# Vue3 with GCDS Components Vue Package
This package is an example of how you can use the GCDS Components Vue package in a Vue3 project that uses Vite

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
   - [Clone the repository and change into the vue3 example app](#clone-the-repository-and-change-into-the-vue3-example-app)
   - [Install dependencies](#install-dependencies)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Vue 3 + Vite](#vue-3--vite)
- [Recommended IDE Setup](#recommended-ide-setup)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v14.x or later
- **npm**: v6.x or later (or **yarn** v1.x or later)

## Installation

To set up the project, follow these steps:

1. **Clone the repository and change into the vue3 example app**:
    ```sh
    git clone https://github.com/cds-snc/gcds-examples
    cd vue3/
    ```

2. **Install dependencies**:
    ```sh
    npm install
    # or if you prefer yarn
    yarn install
    ```

## Running the Application

To start the development server, use the following command:

```sh
npm run dev
# or if you prefer yarn
yarn dev
```
This will start the application on http://localhost:5137 (or another port if specified in the configuration).

## Project Structure
A brief overview of the project structure:

```graphql
vue3/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── assets/             # Project assets
│   ├── components/         # Vue components
│   │   ├── Colors.vue      # Example of using the GCDS select component
│   │   ├── Header.vue      # Example of using the GCDS header component
│   │   └── HelloWorld.vue
│   ├── App.vue             # Root component
│   ├── main.js             # Entry point
│   └── style.css           # Stylesheets
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration

```
   
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
