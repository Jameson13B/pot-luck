import React from "react";
import styled from "styled-components";

const Home = props => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <h3>Welcome to the App</h3>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  max-width: 550px;
`;
