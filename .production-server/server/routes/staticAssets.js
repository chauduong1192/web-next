"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const STATIC_ASSETS_ROUTES = [
    '/service-worker.js',
    '/robots.txt',
];
exports.STATIC_ASSETS_ROUTES = STATIC_ASSETS_ROUTES;
const routes = ({ dev }) => {
    const router = express_1.Router();
    const handler = (req, res) => {
        const filePath = path.join(__dirname, dev ? '../../.next/static' : '../../static', req.path);
        res.status(200).sendFile(filePath);
    };
    STATIC_ASSETS_ROUTES.forEach((p) => {
        router.get(p, handler);
    });
    return router;
};
exports.default = routes;
//# sourceMappingURL=staticAssets.js.map