import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./features/Header";
import styled from "styled-components";
import GlobalCSS from "./styles/global.css";
import Counter from "./features/Counter/Counter";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./features/ProductListing";

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
          <Routes>
            <Route path="/" element={<ProductListing />} />
          </Routes>
        </AppContainer>
      </>
    );
  }
}

export default App;
