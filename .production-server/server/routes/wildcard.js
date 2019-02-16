"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = ({ app }) => {
    const router = express_1.Router();
    const handle = app.getRequestHandler();
    router.get('*', handle);
    return router;
};
exports.default = routes;
//# sourceMappingURL=wildcard.js.map