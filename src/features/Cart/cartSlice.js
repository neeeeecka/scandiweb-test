import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { selectSelectedCurrency } from '../CurrencyPicker/currencySlice';
import { selectProductById } from '../ProductListing/productListingSlice';

const cartItemsAdapter = createEntityAdapter({
  selectId: (item) => item.uid,
  sortComparer: (a, b) => {
    const aId = a.id + a.uid;
    const bId = b.id + b.uid;
    return aId.localeCompare(bId);
  }
});

const initialState = cartItemsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateProduct(state, action) {
      const cartItem = action.payload;
      cartItemsAdapter.upsertOne(state, cartItem);
    }
  }
});

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds
} = cartItemsAdapter.getSelectors((state) => state.cart);

export const { updateProduct } = cartSlice.actions;

export const quantity = (state) => {
  const allItems = selectAllCartItems(state);
  const qty = allItems.reduce((acc, item) => acc + item.quantity, 0);
  return qty;
};

export const total = (state) => {
  const currency = selectSelectedCurrency(state);
  const productPrice = (product) => product.prices[currency].amount;

  const allItems = selectAllCartItems(state);

  const total = allItems.reduce((acc, item) => {
    const product = selectProductById(state, item.id);
    const price = productPrice(product);
    return acc + price * item.quantity;
  }, 0);

  return Math.round(total * 100) / 100;
};

export default cartSlice.reducer;
