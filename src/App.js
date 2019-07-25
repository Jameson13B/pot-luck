import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <AppContainer>
      <Header className="App-header">
        <CstmButton to="/register">Register</CstmButton>
        <Title to="/">The Pot Luck</Title>
        <CstmButton to="/login">Login</CstmButton>
      </Header>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* Uncomment route as you create to test and take effect */}
      {/* <Route path='/events' component={EventList} /> */}
      {/* <Route path='/event' component={Event} /> */}
      {/* <Route path='/profile' component={Profile} /> */}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  width: 100%;
`;
const CstmButton = styled(Link)`
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  margin: 0 15px;
  padding: 15px;
  text-decoration: none;
`;
const Title = styled(Link)`
  color: white;
  font-size: 3rem;
  margin: 15px;
  text-decoration: none;
`;
