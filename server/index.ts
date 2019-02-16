const dev = require('./utils').isDev();
if (dev) { require('dotenv').config(); }

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as next from 'next';

import routes from './routes';

const host = process.env.HOST || 'localhost';
const port = +process.env.PORT || 3000;
const cookieSecret = process.env.COOKIE_SECRET || 'mycookiesecret';
const app = next({ dev });

app.prepare()
  .then(() => {
    const server = express();

    // set cookie
    server.use(cookieParser(cookieSecret));

    if (process.env.LOCAL_COMPRESSION) {
      const compression = require('compression');
      server.use(compression());
    }

    // routes
    server.use(routes({ app, dev }));

    // start app
    server.listen(port, host, (err) => {
      if (err) { throw err; }
      // tslint:disable-next-line:no-console
      console.log(`> App ready at http://${host}:${port}`);
    });

    return server;
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log('> App failed to start', err);
  });
