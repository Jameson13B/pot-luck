import React, { Component } from 'react'
import styled from 'styled-components'
import { auth } from '../Firebase'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
  handleLogin = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    return (
      <LoginContainer>
        <h1>Login</h1>
        {/* Remove h1 above and create login form here with HTML */}
      </LoginContainer>
    )
  }
}

export default Login

// Create CSS here:
const LoginContainer = styled.div`
  max-width: 550px;
`
