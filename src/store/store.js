import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/Categories/categoriesSlice';
import currencySlice from '../features/Categories/CurrencyPicker/currencySlice';
import counterReducer from '../features/Counter/counterSlice';
import productListingSlice from '../features/ProductListing/productListingSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer
    categories: categoriesSlice,
    productListing: productListingSlice,
    currencies: currencySlice
  }
});
