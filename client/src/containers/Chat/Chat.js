import React, { Component } from "react";
import io from "socket.io-client";
import MessageList from "../../components/MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";
import UserList from "../../components/UserList/UserList";
import "./Chat.css";
import MessageTyping from "../../components/MessageTyping/MessageTyping";

const socket = io("/");

class Chat extends Component {
  typingReceive = username => {
    this.setState({ typing: username });
  };
  handleTypingSubmit = typingMessage => {
    typingMessage
      ? socket.emit("typing", this.state.username)
      : socket.emit("typing", typingMessage);
  };
  state = {
    users: [],
    messages: [],
    text: "",
    username: "",
    typing: ""
  };

  componentWillMount() {
    this.setUsername();
  }

  chatUpdate(users) {
    this.setState({ users });
  }

  setUsername() {
    const username = `Guest ${Math.floor(Math.random() * 10)}`;
    this.setState({ username });
    socket.emit("join", username);
  }

  messageReceive(message) {
    const messages = [...this.state.messages, message];
    console.log(this.state.username);
    console.log(message.from);
    this.setState({ messages });
  }

  handleMessageSubmit(message) {
    this.messageReceive(message);
    socket.emit("message", message);
  }

  componentDidMount() {
    console.log(this.props.dupa);
    socket.on("message", message => this.messageReceive(message));
    socket.on("updateUsers", ({ users }) => this.chatUpdate(users));
    socket.on("typing", username => this.typingReceive(username));
  }

  render() {
    return (
      <div className="Chat">
        <div className="ChatHeader">
          <div className="ChatTitle">DevChat</div>
          <div className="ChatCurrentlyRoom">Kitowcy-room</div>
          <div className="ChatUserSettings">User Settings</div>
        </div>
        <div className="ChatBody">
          <UserList users={this.state.users}/>
          <div className="MessageWrapper">
            <MessageList
              messages={this.state.messages}
              currentUser={this.state.username}
            />
            {this.state.typing ? (
              <MessageTyping typing={this.state.typing}/>
            ) : null}
            <MessageForm
              username={this.state.username}
              onMessageSubmit={message => this.handleMessageSubmit(message)}
              onMessageTyping={typing => this.handleTypingSubmit(typing)}
            />
          </div>
          <div className="ChatRoom">ROOMS</div>
        </div>
      </div>
    );
  }
}

export default Chat;
