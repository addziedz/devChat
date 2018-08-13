const routesFactory = require("./routes");
const express = require("express");
const exphbs = require("express-handlebars");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(express.static("public"));

  app.use(routes);

  return app;
};
