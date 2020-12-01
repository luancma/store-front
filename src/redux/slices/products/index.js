/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchAllProducts(state, action) {
      state.products = action.payload;
    },
    updateProduct(state, action) {},
    deleteProduct(state, action) {},
  },
});

export const {
  fetchAllProducts,
  updateProduct,
  deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
