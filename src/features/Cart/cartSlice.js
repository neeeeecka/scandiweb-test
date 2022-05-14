import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { selectSelectedCurrency } from '../CurrencyPicker/currencySlice';
import { selectProductById } from '../ProductListing/productListingSlice';

const cartItemsAdapter = createEntityAdapter({
  selectId: (item) => item.uid,
  sortComparer: (a, b) => {
    const aId = a.id + a.uid;
    const bId = b.id + b.uid;
    return aId.localeCompare(bId);

    // return a.attributeHash.localeCompare(b.attributeHash);
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
    addProduct: (state, action) => {
      const cartItem = action.payload;

      let existingItem = similarItem(state, cartItem);

      if (
        existingItem &&
        existingItem.attributeHash === cartItem.attributeHash
      ) {
        existingItem.quantity += 1;
      } else {
        cartItemsAdapter.upsertOne(state, cartItem);
      }
    },
    updateProduct(state, action) {
      const cartItem = action.payload;

      if (cartItem.quantity === 0) {
        cartItemsAdapter.removeOne(state, cartItem.uid);
      } else {
        const existingItem = similarItem(state, cartItem);

        if (existingItem) {
          existingItem.quantity += cartItem.quantity;
          cartItemsAdapter.removeOne(state, cartItem.uid);
        } else {
          cartItemsAdapter.upsertOne(state, cartItem);
        }
      }
    }
  }
});

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds
} = cartItemsAdapter.getSelectors((state) => state.cart);

export const { updateProduct, addProduct } = cartSlice.actions;

export const similarItem = (state, cartItem) => {
  for (let i = 0; i < state.ids.length; i++) {
    const uid = state.ids[i];
    const item = state.entities[uid];
    if (
      item.id === cartItem.id &&
      item.attributeHash === cartItem.attributeHash &&
      item.uid !== cartItem.uid
    ) {
      return item;
    }
  }
  return null;
};

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
