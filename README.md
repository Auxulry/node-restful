# Express Typescript

# Features
- Thorough documentation: Written with the same care as Express Js docs.
- Guaranteed consistency: Opinionated linting for Express Js and JavaScript/JSON integrated into Visual Studio Code and run against staged files on pre-commit.

## Table Of Contents
- [Getting Started](#getting-started)
- [Environment](#environment)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- Linting and Formating
- [Editor intergration](#editor-integration)

## Getting Started
Make sure you have the following installed:
- Node (at least the latest LTS)
- Eslint (at least the lates)
- Typescript (at least the latest)

```bash
# 1. Clone the repository.
git clone https://github.com/MochamadAkbar/express-typescript.git

# 2. Enter your cloned directory.
cd express-typescript

# 3. Install dependencies. Make sure npm installed: https://www.npmjs.com/get-npm
npm install

# 4. Run on your local.
# This command is a default to run development mode,
# and wil be listen http://localhost:5000
npm run start

```

## Environment
For the first time you must create environment in root directory. This List Environment must be create in this project:
- `.env` or `.env.local`

All of examples `env` located in `/environment`


## Available Scripts
In the project directory, you can run:

```bash
# 1. Run in development mode
npm run serve

# 2. Run in production server
npm run start

# 3. Build (note: make sure the environment is correct for build)
npm run build

# 4. Delete node_modules and re-install dependencies from package.json
npm run install:clean

# 5. Run the unit-test
npm run test

# 6. Watch the unit-test
npm run test:watch

# 7. Check Lint all files
npm run lint

# 8. Check Lint all files, fixing many violations automatically
npm run list:fix
```

## Architecture
```
├── environment/ # All of example environment used in this project.
    └──development
└── src/ # This is current Express Js Directory
    ├── config/
        └── database.ts.
    ├── controllers/
    ├── middleware/
    ├── routes/
    ├── services/
    ├── tests/
    ├── types/
    ├── index.js # Root of Express Js.
    ├── .editorconfig # This file will help you development and make your code clean.
    ├── .eslintrc.json # All of Eslint setup and rules.
    ├── .gitignore
    ├── .mocharc.json
    ├── README.md
    └── tsconfig.json
```

## Linting & Formating
- [Languages](#languages)
- [Scripts](#scripts)
    - [Terminal](#terminal)
    - [Editor](#editor)
- [Configuration Eslint](#configuration-eslint)

This project uses ESLint to catch errors and avoid bikeshedding by enforcing a common code style.

### Languages
- **Typescript** is linted by ESLint.

### Scripts
There are a few different contexts in which the linters run.

### Terminal
```bash
# Lint all files
npm run lint

# Lint all files, fixing many violations automatically
npm run lint:fix
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

### Customize configuration
See [Express.js Documentation](https://expressjs.com/en/4x/api.html).