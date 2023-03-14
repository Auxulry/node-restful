# Node Restful

# Features
- Thorough documentation: Written with the same care as NodeJS docs.
- Guaranteed consistency: Opinionated linting for NodeJS and Typescript/JSON integrated into Visual Studio Code and run against staged files on pre-commit.

## Table Of Contents
- [Getting Started](#getting-started)
- [Pre-Configured](#pre-configured)
- [Environment](#environment)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Linting and Formating](#linting-and-formating)
- [Editor intergration](#editor-integration)

## Getting Started
Make sure you have the following installed:
- Node (at least the latest LTS)
- Eslint (at least the lates)
- Typescript (at least the latest)

```bash
# 1. Clone the repository.
git clone https://github.com/MochamadAkbar/node-restful.git

# 2. Enter your cloned directory.
cd node-restful

# 3. Install dependencies. Make sure yarn installed: https://yarnpkg.com/
yarn install

# 4. Run on your local.
# This command is a default to run development mode,
# and wil be listen http://localhost:5000
yarn run dev

```

## Pre-Configured
- ExpressJS as framework.
- typeorm as main database.
- tsyrings as dependecy injector.
- jsonwebtoken

## Environment
For the first time you must create environment in root directory. This List Environment must be create in this project:
- `.env`

`.env.example` is example `.env` for this source

## Available Scripts
In the project directory, you can run:

```bash
# 1. Run in development mode
yarn run dev

# 2. Run in production server
yarn run start

# 3. Build (note: make sure the environment is correct for build)
yarn run build

# 4. Delete node_modules and re-install dependencies from package.json
yarn run install:clean

# 5. Run the unit-test
yarn run test

# 6. Watch the unit-test
yarn run test:watch

# 7. Check Lint all files
yarn run lint

# 8. Check Lint all files, fixing many violations automatically
yarn run list:fix

# 9. Typeorm CLI
yarn run typeorm

# 10. Typeorm CLI create migration
yarn run migrate:create [path-to-miration/migration-name]

# 11. Typeorm CLI run migrations
yarn run migrate:run

# 12. Typeorm CLI revert migrations
yarn run migrate:revert
```

## Architecture
```
├── src
|   ├── domain
|   |   ├── entities
|   |   |   ├── user.entity.ts
|   |   |   └── ...
|   |   ├── repositories
|   |   |   ├── user.repository.ts
|   |   |   └── ...
|   |   └── usecases
|   |       ├── auth.usecase.ts
|   |       └── ...
|   ├── exceptions
|   |   ├── http.exception.ts
|   |   ├── not-found.exception.ts
|   |   └── ...
|   ├── injector
|   ├── interfaces
|   |   ├── controllers
|   |   |   ├── user.controller.ts
|   |   |   └── ...
|   |   ├── database
|   |   |   ├── migrations
|   |   |   ├── database.provider.ts
|   |   |   └── ...
|   |   ├──  middlewares
|   |   |   ├── auth.middleware.ts
|   |   |   └── ...
|   |   └── routes
|   |       ├── auth.controller.ts
|   |       └── ...
|   ├── third-party
|   |   └── swagger.ts
|   ├── types
|   |   └── ...
|   ├── utils
|   |   └── ...
|   ├── application.ts
|   ├── config.ts
|   ├── server.ts
├── tests
|   ├── domain
|   |   ├── entities
|   |   |   ├── user.entity.spec.ts
|   |   |   └── ...
|   |   ├── repositories
|   |   |   ├── user.repository.spec.ts
|   |   |   └── ...
|   |   └── usecases
|   |       ├── user.usecase.spec.ts
|   |       └── ...
|   └── interfaces
|       ├── controllers
|       |   ├── user.controller.spec.ts
|       |   └── ...
|       └── middlewares
|           ├── auth.middleware.spec.ts
|           └── ...
├── node_modules
├── .editorconfig
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── docker-compose.yaml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md

```
Contains the database
- `domain`
Contains the domain layer of the application, which includes entities, repositories, and use cases.

    - `entities` Contains the core entities of the application.
    - `repositories` Contains the interfaces for accessing the data layer.
    - `usecases` Contains the high-level business logic of the application.

- `exceptions`
Contains the http error exceptions handler.
- `injector`
Contains dependency injector for the application.
- `interfaces`
Contains the interfaces layer of the application, which includes controllers, middlewares, routes and data access implementation details.

    - `controllers` Contains the endpoint implementations for the application.
    - `database` Contains the database access implementation details.
    - `middlewares` Contains the middlewares for the application.
    - `routes` Contains the routes for the application.

- `third-party`
Contains module/libs for the application.
- `types`
Contains types declaration for the application.
- `utils`
Contains the utilities for the application
- `application.ts`
Contains the entry point of the application.
- `config.ts`
Contains the configuration settings for the application.
- `server.ts`
Contains the HTTP server implementation of the application.


## Linting & Formating
- [Languages](#languages)
- [Scripts](#scripts)
    - [Terminal](#terminal)
    - [Editor](#editor)
- [Configuration Eslint](#configuration-eslint)

### Languages
- **Typescript** is linted by ESLint.

### Scripts
There are a few different contexts in which the linters run.

### Terminal
```bash
# Lint all files
yarn run lint

# Lint all files, fixing many violations automatically
yarn run lint:fix
```

### Editor
In supported editors, all files will be linted and formatted on-save. See [Editor Integration](#editor-integration) for details.

### Configuration ESLint
This projects with opinionated defaults, but you can edit each tools configuration in the following config files:

- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- `.eslintrc.json`
- `.eslintignore`

## Editor integration
- [Visual Studio Code](#visual-studio-code)
    - [Configuration](#configuration-vscode)

### Visual Studio Code
This project is best developed in VS Code. With the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions) and setting in your VS Code, you get:

- Syntax highlighting for all files
- Intellisense for all files
- Lint-on-save for all files
- In-editor results on save for unit tests

Recommended for this project:
- EditorConfig
- ESLint
- Javascript (ES6) code snippets

### Configuration VSCode
To Configure extendsions in your VS Code enter command:

For Windows and Linux.
```
CRTL + X
```

For Mac.
```
COMMAND + X
```

To Configure Lint-on-save.
In your local VS Code Create User Setting or edit in Json file and will be automatically generated setting.json. And enter this code.

```json
{
    "extensions.ignoreRecommendations": false,
    "eslint.validate": [
        "typscript",
        "javascript"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

This project uses ESLint to catch errors and avoid bikeshedding by enforcing a common code style.

### Customize configuration
- See [ExpressJS Documentation](https://expressjs.com/en/4x/api.html).
- See [Typeorm Documentation](https://typeorm.io/).