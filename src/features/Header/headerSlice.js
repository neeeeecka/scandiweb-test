import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    categories: []
  }
});

export const fetchCategories = createAsyncThunk(
  'productListing/fetchCategories',
  async () => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORIES);
    return data.categories;
  }
);

export default headerSlice.reducer;
