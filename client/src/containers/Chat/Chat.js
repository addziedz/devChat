import React, {Component} from "react";
import io from "socket.io-client";
import "./Chat.css";

class Chat extends Component {

  initSocket = () => {
      const socket = io("https://dev-chat-01.herokuapp.com");
    socket.on("connect", () => {
      console.log("Connected");
    });
    this.setState({ socket });
  };

  constructor(props) {
    super(props);

    this.state = {
      socket: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  render() {
    return (
      <div className="chat">
        <h2 className="chat-active-username" id="active_username">{this.props.user}</h2>
        <div className="chat-message-list" id="chat_main_room"></div>
        <div className="chat-message-panel" id="chat_message_control">
          <input className="chat-message__input" id="single_message" type="text" placeholder="Message" autoFocus/>
          <button className="chat-button__send" id="send_message">Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;