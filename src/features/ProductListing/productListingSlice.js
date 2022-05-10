import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORY } from '../../services/graphql/queries';

export const fetchCategoryItems = createAsyncThunk(
  'productListing/fetchCategoryItems',
  async (title) => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORY, { title });
    return data.category.products;
  }
);

export const productListingSlice = createSlice({
  name: 'productListing',
  initialState: {
    products: [],
    status: 'idle'
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategoryItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectProducts = (state) => state.productListing.products;

export default productListingSlice.reducer;
