const dev = require('./utils').isDev();
if (dev) { require('dotenv').config(); }

import cookieParser from 'cookie-parser';
import express from 'express';
import next from 'next';

import routes from './routes';

const app = next({ dev });
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
const cookieSecret = process.env.COOKIE_SECRET;
const localCompression = process.env.LOCAL_COMPRESSION;

app.prepare()
  .then(() => {
    const server = express();

    // set cookie
    server.use(cookieParser(cookieSecret));

    if (localCompression) {
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
