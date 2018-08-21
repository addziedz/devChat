const appFactory = require("./app");
const config = require("./config");

(async function main() {
  const app = await appFactory();

  const server = app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}!`);
  });

    const io = require("socket.io")(server);
    io.on("connection", socket => {
    console.log("User connected!!!");
    socket.on("chat_message", (msg, user) =>
      io.emit("chat_message", { username: user, message: msg })
    );
  });
})();
