import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./features/Header";
import styled from "styled-components";
import GlobalCSS from "./styles/global.css";
import Counter from "./features/Counter/Counter";

const AppContainer = styled.div`
  padding: 0 80px;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalCSS />
        <AppContainer>
          <Header />
          <Counter />
        </AppContainer>
      </>
    );
  }
}

export default App;
