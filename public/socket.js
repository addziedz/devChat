// Nawiazanie polaczenia - obiekt io dostajemy z dolaczonej biblioteki socket.io.js (patrz plik main.handlebars)
const socket = io.connect();

// Korzystamy z DOM API, aby uzyskac referencje do elementow drzewa
const message = document.getElementById("message");
const btn_send = document.getElementById("send");
const chat_main_room = document.getElementById("chat_main_room");

// Po wpisaniu wiadomosci i kliknieciu przycisku wyslij, wysylamy zdarzenie 'chat' do serwera poprzez socketa
btn_send.addEventListener("click", () => {
  socket.emit("chat_message", message.value);
  message.value = "";
});

// Socket nasluchuje na zdarzenie 'chat' z serwera, po ktorym aktualizuje glowny okno czatu
socket.on("chat_message", data => chat_main_room.insertAdjacentHTML("beforeend", `<p>${data}</p>`));
