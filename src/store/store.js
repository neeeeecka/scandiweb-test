import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import productListingSlice from '../features/ProductListing/productListingSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer
    productListing: productListingSlice
  }
});
