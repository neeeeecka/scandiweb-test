import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./features/Header";
import styled from "styled-components";
import GlobalCSS from "./styles/global.css";

const AppContainer = styled.div`
  display: flex;
  padding: 0 80px;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalCSS />
        <AppContainer>
          <Header />
        </AppContainer>
      </>
    );
  }
}

export default App;
