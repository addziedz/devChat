import React, {Component} from "react";
import Chat from "./containers/Chat/Chat";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

    // componentDidMount() {
    //   fetch("/client-test")
    //     .then(res => res.json())
    //     .then(data => this.setState({ ...data }));
    // }

  render() {
    return (
        <div className="App">
        <Chat user="user1"/>
      </div>
    );
  }
}

export default App;
