import React, { Component } from "react";
import styled from "styled-components";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passowrd1: "",
      password2: ""
    };
  }
  render() {
    return (
      <RegisterContainer>
        <h1>Register</h1>
        {/* Remove h1 above and create register form here with HTML */}
      </RegisterContainer>
    );
  }
}

export default Register;

// Create CSS here:
const RegisterContainer = styled.div`
  max-width: 550px;
`;
