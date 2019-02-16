"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev = require('./utils').isDev();
if (dev) {
    require('dotenv').config();
}
const cookieParser = require("cookie-parser");
const express = require("express");
const next = require("next");
const routes_1 = require("./routes");
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
    server.use(routes_1.default({ app, dev }));
    // start app
    server.listen(port, host, (err) => {
        if (err) {
            throw err;
        }
        // tslint:disable-next-line:no-console
        console.log(`> App ready at http://${host}:${port}`);
    });
    return server;
})
    .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log('> App failed to start', err);
});
//# sourceMappingURL=index.js.map