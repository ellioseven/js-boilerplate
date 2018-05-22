# js-boilerplate

A starting point for modern JavaScript development.

## Goals

- Support modern browsers (IE 11)
- Encourage consistency & best practices
- Adhere to ES specifications
- Minimal third party libraries
- Container based development environment
- Simple and effective testing

## Ecosystem

- [yarn](https://yarnpkg.com/en/): Package management
- [babel](https://babeljs.io): Transpiler
- [webpack](https://webpack.js.org): Build tool
- [docker](https://www.docker.com): Virtualisation
- [eslint](https://eslint.org): Code linting
- [editorconfig](http://editorconfig.org): Code formatting
- [circleci](https://circleci.com): Continuous integration

### Polyfills

- [babel](https://babeljs.io/docs/usage/polyfill)
- [fetch](https://github.com/github/fetch)

## Requirements

- [docker](https://docs.docker.com/install)
- [docker-compose](https://docs.docker.com/compose/install)

## Instructions

Configure:

```
cp .env.example .env && edit .env
```

Enter development environment:

```
docker-compose run --rm node bash
```

Install dependencies:

```
yarn install
```

Build project:

```
yarn run build
```

Run tests:

```
yarn run test
```

## Todo

- Ensure babel covers IE 11
- Provide testing workflow
