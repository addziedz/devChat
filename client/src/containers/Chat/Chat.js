import React, {Component} from "react";
import io from "socket.io-client";
import MessageList from '../../components/MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';
import UserList from '../../components/UserList/UserList';
import "./Chat.css";

const socket = io('/');

class Chat extends Component {

    typingReceive = (username) => {
        this.setState({typing: username})
    };

    // initSocket = () => {
    //   let socket;
    //   if (process.env.NODE_ENV === "production") {
    //     socket = io();
    //   } else {
    //     socket = io("http://localhost:5000");
    //   }
    //   socket.on("connect", () => {
    //     console.log("Connected");
    //   });
    // };

  componentWillMount() {
      // this.initSocket();
      this.setUsername();
  }

    handleTypingSubmit = (typingMessage) => {
        typingMessage ? socket.emit('typing', this.state.username) : socket.emit('typing', typingMessage);
    };

    chatUpdate(users) {
        this.setState({users});
    }

    setUsername() {
        const username = `Guest ${Math.floor(Math.random() * 10)}`;
        this.setState({username});
        socket.emit('join', username);
    }

    messageReceive(message) {
        const messages = [...this.state.messages, message];
        console.log(this.state.username);
        console.log(message.from);
        this.setState({messages});
    }

    handleMessageSubmit(message) {
        this.messageReceive(message);
        socket.emit('message', message);
    }

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            messages: [],
            text: '',
            username: '',
            typing: '',
        }
    }

    componentDidMount() {
        socket.on('message', message => this.messageReceive(message));
        socket.on('updateUsers', ({users}) => this.chatUpdate(users));
        socket.on('typing', username => this.typingReceive(username));
    }

  render() {
      const someoneTyping = (
          <div className="MessageTyping">{this.state.typing} is Typing...</div>
      );
    return (
        <div className="Chat">
            <div className="ChatHeader">
                <div className="ChatTitle">
                    DevChat
                </div>
                <div className="ChatRoom">
                    Kitowcy-room
                </div>
            </div>
            <div className="ChatBody">
                <UserList
                    users={this.state.users}
                />
                <div className="MessageWrapper">
                    <MessageList
                        messages={this.state.messages}
                        currentUser={this.state.username}
                    />
                    {this.state.typing ? someoneTyping : null}
                    <MessageForm
                        username={this.state.username}
                        onMessageSubmit={message => this.handleMessageSubmit(message)}
                        onMessageTyping={typing => this.handleTypingSubmit(typing)}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default Chat;