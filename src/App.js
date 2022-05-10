import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './features/Categories';
import styled from 'styled-components';
import GlobalCSS from './styles/global.css';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './features/ProductListing';
import CartPage from './features/CartPage';
import PDP from './features/PDP';
import { connect } from 'react-redux';
import {
  fetchCategories,
  selectSelectedCategory
} from './features/Categories/categoriesSlice';

const AppContainer = styled.div`
  padding: 0 80px;
  margin-top: 80px;
  position: relative;
  padding-bottom: 100px;
`;

class App extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    return (
      <>
        <GlobalCSS />
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/pdp" element={<PDP />} />
            <Route path="/" element={<ProductListing />} />
          </Routes>
        </AppContainer>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCategories
};

const mapStateToProps = (state) => ({
  selectedCategory: selectSelectedCategory(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
