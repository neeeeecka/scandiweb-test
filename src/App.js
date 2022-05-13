import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './features/Categories';
import styled from 'styled-components';
import GlobalCSS from './styles/global.css';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './features/ProductListing';
import CartPage from './features/Cart/CartPage';
import PDP from './features/PDP';
import { connect } from 'react-redux';
import {
  fetchCategories,
  selectSelectedCategory
} from './features/Categories/categoriesSlice';
import {
  fetchCurrencies,
  selectCurrencies
} from './features/CurrencyPicker/currencySlice';

const AppContainer = styled.div`
  padding: 0 80px;
  margin-top: 80px;
  position: relative;
  padding-bottom: 100px;
`;

class App extends React.Component {
  componentDidMount() {
    const { fetchCategories, fetchCurrencies } = this.props;
    fetchCategories();
    fetchCurrencies();
  }
  render() {
    const { selectedCategory, currencies } = this.props;

    return (
      <>
        <GlobalCSS />
        <AppContainer>
          {selectedCategory && currencies && <Header />}
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/pdp" element={<PDP />} />
            <Route
              path="/"
              element={selectedCategory.name && <ProductListing />}
            />
          </Routes>
        </AppContainer>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCategories,
  fetchCurrencies
};

const mapStateToProps = (state) => ({
  selectedCategory: selectSelectedCategory(state),
  currencies: selectCurrencies(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
