import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import {
  GQL_GET_CATEGORIES,
  GQL_GET_CATEGORY
} from '../../services/graphql/queries';

export const fetchCategoryItems = createAsyncThunk(
  'productListing/fetchCategoryItems',
  async (title) => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORY, { title });
    return data.categories;
  }
);

export const productListingSlice = createSlice({
  name: 'productListing',
  initialState: {
    items: [],
    status: 'idle'
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategoryItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectItems = (state) => state.items;

export default productListingSlice.reducer;
