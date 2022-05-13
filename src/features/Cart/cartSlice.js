import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'categories',
  initialState: {
    products: {}
  },
  reducers: {
    productSelected(state, action) {
      const { product } = action.payload;
      state.products[product.id] = product;
    },
    updateProduct(state, action) {
      // const { attributes,  } = action.payload;
    }
  }
});

export default cartSlice.reducer;
