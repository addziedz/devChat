const routesFactory = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();
    //const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));

    app.get('/api/hello', (req, res) => {
        res.send({express: 'Hello From Express'});
    });

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    } else {
        app.use(express.static("public"));
    }
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(routes);

  return app;
};
