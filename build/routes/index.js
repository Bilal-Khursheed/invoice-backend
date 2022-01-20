"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = require("express");
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const UserRouter_1 = require("./UserRouter");
const InvoiceRouter_1 = require("./InvoiceRouter");
const ItemsRouter_1 = require("./ItemsRouter");
let swaggerDoc;
try {
    swaggerDoc = require('../../swagger.json');
}
catch (error) {
    console.log('***************************************************');
    console.log('  Seems like you doesn\`t have swagger.json file');
    console.log('  Please, run: ');
    console.log('  $ swagger-jsdoc -d swaggerDef.js -o swagger.json');
    console.log('***************************************************');
}
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    /**
     * @description
     *  Forwards any requests to the /v1/users URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/users', UserRouter_1.default);
    app.use('/v1/invoice', InvoiceRouter_1.default);
    app.use('/v1/items', ItemsRouter_1.default);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    if (swaggerDoc) {
        app.use('/docs', swaggerUi.serve);
        app.get('/docs', swaggerUi.setup(swaggerDoc));
    }
    else {
        app.get('/docs', (req, res) => {
            res.send('<p>Seems like you doesn\'t have <code>swagger.json</code> file.</p>' +
                '<p>For generate doc file use: <code>swagger-jsdoc -d swaggerDef.js -o swagger.json</code> in terminal</p>' +
                '<p>Then, restart your application</p>');
        });
    }
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map