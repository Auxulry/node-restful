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
yarn run start:dev

```

## Pre-Configured
- NestJS as framework.
- typeorm as orm.
- joi as validator.
- jsonwebtoken.

## Environment
For the first time you must create environment in root directory. This List Environment must be create in this project:
- `.env`

`.env.example` is example `.env` for this source

## Available Scripts
In the project directory, you can run:

```bash
# 1. Build (note: make sure the environment is correct for build)
yarn run build

# 2. clear latest build and reBuild (note: make sure the environment is correct for build)
yarn run build:clean

# 3. Run prettier format
yarn run format

# 4. Run in production server
yarn run start

# 5. Run in development server
yarn run start:dev

# 6. Run in development server with debug mode
yarn run start:debug

# 7. Delete node_modules and re-install dependencies from package.json
yarn run install:clean

# 8. Typeorm CLI
yarn run typeorm

# 9. Typeorm CLI create migration
yarn run migrate:create [./path-to-miration/migration-name]

# 10. Typeorm CLI run migrations
yarn run migrate:run

# 11. Typeorm CLI revert migrations
yarn run migrate:revert

# 12. Check Lint all files
yarn run lint

# 13. Check Lint all files, fixing many violations automatically
yarn run list:fix

# 14. Run the jest
yarn run test

# 15. Watch the unit-test
yarn run test:watch

# 16. Watch the unit-test with coverage
yarn run test:cov

# 17. Watch the unit-test with debug mode
yarn run test:debug

# 18. Watch the e2e test
yarn run test:e2e
```

## Architecture
```
├── src
|   ├── common
|   ├── decorators
|   ├── domain
|   |   ├── ...
|   |   ├── module-name
|   |   |   ├── entities
|   |   |   ├── controllers
|   |   |   ├── repositories
|   |   |   ├── services
|   |   |   └── *.module.ts
|   |   ├── controller.ts
|   |   ├── entity.ts
|   |   ├── repository.ts
|   |   ├── schema.ts
|   ├── exceptions
|   |   ├── http.exception.ts
|   |   └── ...
|   ├── interfaces
|   |   ├── database
|   |   |   ├── migrations
|   |   |   ├── database.module.ts
|   |   |   └── database.service.ts
|   ├──  middlewares
|   |   ├── auth.middleware.ts
|   |   └── ...
|   ├── types
|   |   └── ...
|   ├── app.controller.ts
|   ├── app.module.ts
|   ├── app.service.ts
|   ├── config.ts
|   └── msin.ts
├── tests
|   ├── *.e2e-spect.ts
|   └── jest-e2e.json
├── node_modules
├── .editorconfig
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── docker-compose.yaml
├── Dockerfile
├── nest-cli.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── README.md

```
Contains the database
- `common`
Contains the utilities for the application
- `decorators`
Contains the custom decorators for the application
- `domain`
Contains the domain layer of the application, which includes all modules and detail entities, controllers, repositories, schemas and services.

    - `entities` Contains the core entities of the application.
    - `controllers` Contains the endpoint implementations for the application.
    - `schemas` Contains the joi schemas and open api schemas for the application.
    - `repositories` Contains the interfaces for accessing the data layer.
    - `services` Contains the high-level business logic of the application.

- `exceptions`
Contains the http error exceptions handler.
- `interfaces`
Contains the interfaces layer of the application, which includes data access implementation details.

    - `database` Contains the database access implementation details.
- `middlewares`
Contains the middlewares for the application.
- `types`
Contains types declaration for the application.
- `app.controller.ts`
Contains the root endpoint implementations of the application.
- `app.module.ts`
Contains the root nest modules of the application.
- `app.service.ts`
Contains the root high-level business logic of the application.
- `config.ts`
Contains the configuration settings for the application.
- `main.ts`
Contains the HTTP server implementation of the application.
- `tests`
Contains the unit test and e2e test of the application.


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
- See [NestJS Documentation](https://docs.nestjs.com/).
- See [Typeorm Documentation](https://typeorm.io/).
- See [Joi Documentation](https://joi.dev/)