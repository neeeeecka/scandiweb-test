import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/Categories/categoriesSlice';
import counterReducer from '../features/Counter/counterSlice';
import productListingSlice from '../features/ProductListing/productListingSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer
    categories: categoriesSlice,
    productListing: productListingSlice
  }
});
