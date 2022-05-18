import { createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';

const urlParams = new URLSearchParams(window.location.search);

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORIES);
    dispatch({
      type: 'categories/categoriesFetched',
      payload: data.categories
    });
  };
};

export const headerSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: { name: urlParams.get('category') || null },
    status: 'idle'
  },
  reducers: {
    categorySelected(state, action) {
      state.selectedCategory = { name: action.payload };
    }
  },
  extraReducers: {
    'categories/categoriesFetched': (state, action) => {
      state.categories = action.payload;
      if (!state.selectedCategory.name) {
        state.selectedCategory = { name: state.categories[0].name };
      }
    }
  }
});

export const { categorySelected } = headerSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectSelectedCategory = (state) =>
  state.categories.selectedCategory;

export default headerSlice.reducer;
