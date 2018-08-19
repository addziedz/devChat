const routesFactory = require("./routes");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } else {
    app.use(express.static("public"));
  }

  // app.use(express.static("client/public"));
  // app.static(path.join(__dirname, "client/build"));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(routes);

  return app;
};
