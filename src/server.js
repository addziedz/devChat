const appFactory = require("./app");
const config = require("./config");

(async function main() {
  const app = await appFactory();

  // TODO: Socket.io potrzebuje jako argumentu instancji serwera - nalezy zastanowic sie ponownie nad architektura
  const server = app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}!`);
  });

  // Tworzymy socket (io) po stronie serwera, ktory bedzie obslugiwal serwer
  const io = require("socket.io")(server);

  // io oczekuje socketa konkrentego klienta
  io.on("connection", socket =>
    // nasluchujemy na wiadomosc od konkretnego (pojedynczego) klienta i odpowiadamy jako serwer (io) do wszystkich klientow
    socket.on("chat_message", msg => io.emit("chat_message", msg))
  );
})();
