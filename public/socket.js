// Nawiazanie polaczenia - obiekt io dostajemy z dolaczonej biblioteki socket.io.js (patrz plik main.handlebars)
const socket = io.connect();

// Korzystamy z DOM API, aby uzyskac referencje do elementow drzewa
const message = document.getElementById("single_message");
const btn_send = document.getElementById("send_message");
const chat_main_room = document.getElementById("chat_main_room");
const username = document.getElementById("username_control");
const btn_login = document.getElementById("btn_login");
const active_username = document.getElementById("active_username");

const sendMessage = () => {
    if (message.value) {
        socket.emit("chat_message", {
            msg: message.value,
            user: active_username.innerHTML
        });
        message.value = "";
    }
};

if (btn_login) {
    // Po wpisaniu wiadomosci i kliknieciu przycisku send wysylamy login
    btn_login.addEventListener("click", () => {
        if (username.value) {
            socket.emit("new_user", username.value);
        }
    });
}

if (btn_send && message) {
    // Po wpisaniu wiadomosci i kliknieciu przycisku wyslij, wysylamy zdarzenie 'chat' do serwera poprzez socketa
    btn_send.addEventListener("click", () => {
        sendMessage();
    });

    message.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}

// Socket nasluchuje na zdarzenie 'chat' z serwera, po ktorym aktualizuje glowny okno czatu
socket.on("chat_message", data => {
    chat_main_room.insertAdjacentHTML("beforeend", `<p><b>${data.message.user}: </b> ${data.message.msg}</p>`);
    chat_main_room.scrollTo(0, chat_main_room.scrollHeight);
});