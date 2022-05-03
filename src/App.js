import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./features/Header";
import styled from "styled-components";
import GlobalCSS from "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./features/ProductListing";
import CartPage from "./features/CartPage";

const AppContainer = styled.div`
  padding: 0 80px;
  margin-top: 80px;
  position: relative;
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
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AppContainer>
      </>
    );
  }
}

export default App;
