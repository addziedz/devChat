import React, { Component } from "react";
import Chat from "./containers/Chat/Chat";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Chat user="user1"/>
      </div>
    );
  }
}

export default App;
