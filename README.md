# js-boilerplate

A starting point for modern JavaScript development.

## Goals

- Support modern browsers
- Encourage consistency & best practices
- Adhere to ES specifications
- Minimal third party libraries
- Container based development environment

## Ecosystem

- [babel](https://babeljs.io): Transpiler
- [webpack](https://webpack.js.org): Build tool
- [docker](https://www.docker.com): Virtualisation
- [eslint](https://eslint.org): Code linting

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
npm run-script build
```

## Roadmap

- Provide testing workflow
