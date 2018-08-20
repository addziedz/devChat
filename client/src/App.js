import React, { Component } from "react";
import Chat from "./containers/Chat/Chat";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("/client-test")
      .then(res => res.json())
      .then(data => this.setState({ ...data }));
  }

  render() {
    return (
      <div>
        <p>{this.state.test}</p>
        <Chat user="user1"/>
      </div>
    );
  }
}

export default App;
