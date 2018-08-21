const routesFactory = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = async function appFactory() {
  const app = express();
  const routes = await routesFactory();

    app.get('/api/hello', (req, res) => {
        res.send({express: 'Hello From Express'});
    });

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, "/client")));
        app.use(express.static(path.join(__dirname, "/client/build")));
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
    }
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(routes);

  return app;
};
