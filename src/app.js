const routesFactory = require("./routes");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(express.static("client/public"));
  // app.use(express.static("public"));
  // app.static(path.join(__dirname, "client/build"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(routes);

  return app;
};
