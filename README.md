# web-next

The source code using nextjs, reactjs, redux, es6, ts, express, tslint, jest..

## Links

- [Link Demo](https://web-next.herokuapp.com/)
- [Issue project board](https://trello.com/b/loEbAQ1g/web-next)

## Folder Structure

Our source is created by CNA, after createing it should look something like:

```
├── node_modules
    ├── [...]
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

### Installing dependencies

```sh
yarn
```

### Run the app

#Running the app with the dev environment

```sh
yarn dev
```

#Running the app with the production environment

```sh
yarn prod
```

**TROUBLESHOOTING NOTE**: If you are having trouble running the app for the first time please delete the `node_module` and run yarn again.

### Running Tests

```sh
yarn test
```

### Running Linter

```sh
yarn lint
```

### Running Linter fix

```sh
yarn lint-fix
```

### Running Bunddle Analyze

```sh
yarn analyze
```

### Redux dev tools

_Add details of how to access the app from within Chrome_

To view the state in the app install [the Redux dev tools Chrome plugin](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph/related).

## Deployment

_to be completed_

## Question and Issues
[Nextjs] (https://github.com/zeit/next.js/)