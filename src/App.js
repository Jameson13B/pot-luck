import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <AppContainer>
      <Header className="App-header">
        <p>The Pot Luck</p>
      </Header>
      <Route exact path="/" component={Home} />
      {/* Uncomment route as you create to test and take effect */}
      {/* <Route path='/events' component={EventList} /> */}
      {/* <Route path='/login' component={Login} /> */}
      {/* <Route path='/register' component={Register} /> */}
      {/* <Route path='/events' component={EventList} /> */}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
`;
