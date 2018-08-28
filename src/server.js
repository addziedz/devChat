const appFactory = require("./app");
const config = require("./config");
const userService = require("./userService");

(async function main() {
  const app = await appFactory();
  const server = app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}!`);
  });
  const io = require("socket.io")(server);
  const us = userService();

  io.on("connection", socket => {
    console.log("User connected!!!" + socket.id);

    socket.on("join", username => {
      us.addUser({
        id: socket.id,
        username
      });
      io.emit("updateUsers", {
        users: us.getAllUsers()
      });
    });

    socket.on("disconnect", () => {
      us.removeUser(socket.id);
      socket.broadcast.emit("updateUsers", {
        users: us.getAllUsers()
      });
    });

    socket.on("message", message => {
      // const {username} = us.getUserById(socket.id);
      socket.broadcast.emit("message", {
        text: message.text,
        from: message.from
      });
    });

    socket.on("typing", username => {
      console.log(username);
      socket.broadcast.emit("typing", username);
    });
  });
})();
