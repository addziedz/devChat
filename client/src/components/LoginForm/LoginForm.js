import React, { Component } from "react";

import { Input } from "semantic-ui-react";

class LoginForm extends Component {
  render() {
    return (
      <Input focus placeholder='Search...'/>
    );
  }
}

export default LoginForm;