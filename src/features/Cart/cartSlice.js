import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

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

export default cartSlice.reducer;
