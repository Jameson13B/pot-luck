import React, { Component } from "react";
import styled from "styled-components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passowrd: ""
    };
  }
  render() {
    return (
      <LoginContainer>
        <h1>Login</h1>
        {/* Remove h1 above and create login form here with HTML */}
      </LoginContainer>
    );
  }
}

export default Login;

// Create CSS here:
const LoginContainer = styled.div`
  max-width: 550px;
`;
