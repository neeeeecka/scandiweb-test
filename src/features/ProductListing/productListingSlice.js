import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORY } from '../../services/graphql/queries';

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.id.localeCompare(b.id)
});

const initialState = productsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const fetchCategoryItems = createAsyncThunk(
  'productListing/fetchCategoryItems',
  async (title) => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORY, { title });
    return data.category.products;
  }
);

export const productListingSlice = createSlice({
  name: 'productListing',
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCategoryItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.products = action.payload;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds
  // Pass in a selector that returns the posts slice of state
} = productsAdapter.getSelectors((state) => state.productListing);

// export const selectProducts = (state) => state.productListing.products;

export default productListingSlice.reducer;
