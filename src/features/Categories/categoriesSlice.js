import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';
import { fetchCategoryItems } from '../ProductListing/productListingSlice';

const urlParams = new URLSearchParams(window.location.search);

// export const fetchCategories = createAsyncThunk(
//   'categories/fetchCategories',
//   async () => {
//     const { data } = await fetchFromGQL(GQL_GET_CATEGORIES);
//     return data.categories;
//   }
// );

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const { data } = await fetchFromGQL(GQL_GET_CATEGORIES);
    dispatch({
      type: 'categories/categoriesFetched',
      payload: data.categories
    });

    const state = getState();
    const selectedCategory = selectSelectedCategory(state);
    dispatch(fetchCategoryItems(selectedCategory.name));
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
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchCategories.pending, (state, action) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchCategories.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.categories = action.payload;
  //       if (!state.selectedCategory.name) {
  //         state.selectedCategory = { name: state.categories[0].name };
  //       }
  //     })
  //     .addCase(fetchCategories.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message;
  //     });
  // }
});

export const { categorySelected } = headerSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectSelectedCategory = (state) =>
  state.categories.selectedCategory;

export default headerSlice.reducer;
