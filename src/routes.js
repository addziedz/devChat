module.exports = async function routes() {
  const router = require("express").Router();
  const path = require("path");

  // router.get("/", (req, res) => {
  //     res.sendFile(path.join("/app/client/build/index.html"));
  // });

  // router.post("/main", (req, res) => {
  //   if (req.body.username) {
  //     res.render("home", {
  //       username: req.body.username
  //     });
  //   }
  // });

  // router.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname + "/client/build/index.html"));
  // });

  return router;
};
