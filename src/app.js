const routesFactory = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    } else {
        app.use(express.static("public"));
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(routes);

  return app;
};
