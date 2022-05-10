import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORIES);
    return data.categories;
  }
);

export const headerSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
    status: 'idle'
  },
  reducers: {
    categorySelected(state, action) {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { categorySelected } = headerSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectSelectedCategory = (state) =>
  state.categories.selectedCategory;

export default headerSlice.reducer;
