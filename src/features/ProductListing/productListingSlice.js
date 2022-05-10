import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';

export const productListingSlice = createSlice({
  name: 'productListing',
  initialState: {}
});

export default productListingSlice.reducer;
