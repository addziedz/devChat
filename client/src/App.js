import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";

class App extends Component {
  render() {
    return (
        <div className="App">
          {/*<Chat user="user1"/>*/}
          <LoginForm/>
      </div>
    );
  }
}

export default App;
