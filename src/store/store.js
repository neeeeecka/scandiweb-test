import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/Cart/cartSlice';
import categoriesSlice from '../features/Categories/categoriesSlice';
import currencySlice from '../features/CurrencyPicker/currencySlice';
import productListingSlice from '../features/ProductListing/productListingSlice';
// import modalsSlice from './modalsSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer
    categories: categoriesSlice,
    productListing: productListingSlice,
    currencies: currencySlice,
    cart: cartSlice
    // modals: modalsSlice
  }
});
