"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ssrCache_1 = require("../utils/ssrCache");
const getGenericReqParams = req => ({
    ...req.query,
    id: req.params.id,
    language: req.language,
});
const prettyUrlRouter = ({ app }) => {
    const route = express_1.Router();
    route.get('/', async (req, res) => {
        try {
            await ssrCache_1.default(app, req, res, '/', getGenericReqParams(req));
        }
        catch (err) {
            app.renderError(err, req, res, '/', getGenericReqParams(req));
        }
    });
    route.get('/about', async (req, res) => {
        try {
            await ssrCache_1.default(app, req, res, '/about', getGenericReqParams(req));
        }
        catch (err) {
            app.renderError(err, req, res, '/about', getGenericReqParams(req));
        }
    });
    return route;
};
exports.default = prettyUrlRouter;
//# sourceMappingURL=prettyUrlRouter.js.map