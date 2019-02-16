"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nextI18NextMiddleware = require("next-i18next/middleware");
const nextI18next = require('./../../i18nnext');
const prettyUrlRouter_1 = require("./prettyUrlRouter");
const staticAssets_1 = require("./staticAssets");
const wildcard_1 = require("./wildcard");
const assetPrefix = process.env.ASSET_PREFIX;
const routes = (props) => {
    const router = express_1.Router();
    // for change asset prefix(cdn,..)
    if (assetPrefix) {
        props.app.setAssetPrefix(assetPrefix);
    }
    else {
        router.use(staticAssets_1.default(props));
    }
    // handle i18n translation
    router.use(nextI18NextMiddleware(nextI18next));
    // handle all routers
    router.use(prettyUrlRouter_1.default(props));
    // handle default router
    router.use(wildcard_1.default(props));
    return router;
};
exports.default = routes;
//# sourceMappingURL=index.js.map