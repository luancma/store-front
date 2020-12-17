import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  open: false,
};

const modalSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    openModal(state, action) {
      state.type = action.payload.type;
      state.open = true;
    },
    closeModal(state, action) {
      state.type = '';
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
