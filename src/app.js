const routesFactory = require("./routes");
const express = require("express");

module.exports = async function appFactory() {
    const app = express();
    const routes = await routesFactory();

    app.use(routes);

    return app;
};
