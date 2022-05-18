import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    modal: ''
  },
  reducers: {
    openModal: (state, action) => {
      const modalName = action.payload;
      state.modal = modalName;
    },
    closeModal: (state) => {
      state.modal = '';
    }
  }
});

export const selectCurrentModal = (state) => state.modals.modal;

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
