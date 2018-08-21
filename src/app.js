const routesFactory = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

  app.use(express.static(path.join(__dirname, "/client/build")));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(routes);

  return app;
};
