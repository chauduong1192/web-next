# Web-next

<div align="center">
  <a href="https://codeclimate.com/github/chauduong1192/web-next/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/f84fe0e7cf5adaf536a5/maintainability" />
  </a>
  <a href="https://codecov.io/gh/chauduong1192/web-next">
    <img src="https://codecov.io/gh/chauduong1192/web-next/branch/master/graph/badge.svg" />
  </a>
  <a href="https://github.com/chauduong1192/web-next/runs/765177210?check_suite_focus=true">
    <img src="https://github.com/chauduong1192/web-next/workflows/CI/badge.svg" alt="Build Status" />
  </a>
  <a href="https://github.com/styled-components/styled-components">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" alt="Build Status" />
  </a>
</div>

The source code using nextjs, reactjs, redux, es6, ts, express, tslint, jest..

## Links

- [Link Demo](https://web-next.herokuapp.com/)
- [Issue project board](https://trello.com/b/loEbAQ1g/web-next)

## Folder Structure

Our source is created by CNA, after createing it should look something like:

```
├── node_modules
    ├── [...]
├── __tests__
├── .github
├── apis
├── components
    ├── Common
    └── Component1
    └── Component2
├── redux
├── server
    ├── routers
    ├── index.js
├── next.config.js
├── package.json
├── pages
    └── index.js
├── public
    └── fonts
    └── icons
    └── images
    └── locales
    └── styles
├── templates
    └── components
    └── redux
    └── storybook
└── yarn.lock
├── README.md
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

Now we are using the custom server that using Express, so if you want to modify routers just focus on `./server/routes/prettyUrlRouter.ts`

The `./public` directory maps to `/public` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

### Environment Variables

See `.env` for development defaults.

| Variable               | Notes                                                              |
| -----------------      | ------------------------------------------------------------------ |
| `NODE_ENV`             | Node environment variables. Default: development                   |
| `HOST`                 | Host of app. Default: localhost                                    |
| `PORT`                 | Port of app. Default: 3000                                         |
| `API_URL`              | Url api service. Need to change this if you have other url for api |

### Prerequisites

- [NodeJS](htps://nodejs.org), version >= 10.0.0 . (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)

I am using `yarn` to install the package.
- `npm install -g yarn`

### Install

```sh
yarn
```

### Run the app

Running the app with the dev environment

```sh
yarn dev
```

Running the app with the production environment

```sh
yarn prod
```

**TROUBLESHOOTING NOTE**: If you are having trouble running the app for the first time please delete the `node_module` and run yarn again.

### Running Tests

```sh
yarn test
```

### Running Generate Component or Redux template

Generate component
```sh
yarn gen type_of_gen type_of_component component_name 
```
type_of_gen: Type of generator as component, redux.
type_of_component: Type of component as single, many.

```sh
Ex: yarn gen component single ComponentA 
```

### Running Linter

```sh
yarn lint
```

### Running Bunddle Analyze

```sh
yarn analyze
```

### Redux dev tools

_Add details of how to access the app from within Chrome_

To view the state in the app install [the Redux dev tools Chrome plugin](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph/related).

## Question and Issues
(https://github.com/chauduong1192/web-next/issues)
