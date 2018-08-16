module.exports = async function routes() {
  const router = require("express").Router();

  router.get("/", (req, res) => {
      res.render("login");
  });

    router.post("/main", (req, res) => {
        if (req.body.username) {
            res.render("home", {
                username: req.body.username
            });
        }
  });

  return router;
};
