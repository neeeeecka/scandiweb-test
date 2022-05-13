import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CURRENCIES } from '../../services/graphql/queries';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response = await fetchFromGQL(GQL_GET_CURRENCIES);
    return response.data.currencies;
  }
);

export const currencySlice = createSlice({
  name: 'currencies',
  initialState: {
    selectedCurrency: 0,
    currencies: null
  },
  reducers: {
    selectCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  }
});

export const { selectCurrency } = currencySlice.actions;

export const selectSelectedCurrency = (state) =>
  state.currencies.selectedCurrency;
export const selectCurrencies = (state) => state.currencies.currencies;

export const selectCurrencySymbolAndLabel = (state) => {
  const currencies = selectCurrencies(state);
  const currency = currencies
    ? currencies[state.currencies.selectedCurrency]
    : {};

  return currency;
};

export default currencySlice.reducer;
