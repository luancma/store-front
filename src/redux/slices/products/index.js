/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllProducts from '../../../services/local/product/getAllProducts';

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await getAllProducts();
    return response;
  },
);

const initialState = {
  products: [],
  loading: false,
  product: {},
  openModal: false,
  editProductModal: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchAllProducts(state, action) {
      state.products = action.payload;
    },
    updateProduct(state, action) {},
    openDeleteProductModal(state, action) {
      console.log(action.payload.product);
      state.product = action.payload.product;
      state.openModal = true;
    },
    closeDeleteProductModal(state, action) {
      state.product = {};
      state.openModal = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log('AAAAAAAAAAAAAAAAAAA');
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log('aqui');
    });
  },
});

export const {
  fetchAllProducts,
  updateProduct,
  openDeleteProductModal,
  closeDeleteProductModal,
} = productsSlice.actions;

export default productsSlice.reducer;
