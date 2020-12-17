/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getStock from '../../../services/local/stock/getStock';

export const fetchStock = createAsyncThunk('products/fetchStock', async () => {
  const response = await getStock();
  return response;
});

const initialState = {
  stock: [],
  loading: false,
  product: {},
  openModal: false,
  editModal: false,
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    fetchAllStock(state, action) {
      state.products = action.payload;
    },
    updateStock(state, action) {},
    openDeleteStockModal(state, action) {
      state.product = action.payload.product;
      state.openModal = true;
    },
    closeDeleteStockModal(state, action) {
      state.product = {};
      state.openModal = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchStock.pending, (state, action) => {});
    builder.addCase(fetchStock.fulfilled, (state, action) => {
      state.stock = action.payload;
    });
    builder.addCase(fetchStock.rejected, (state, action) => {});
  },
});

export const {
  fetchAllStock,
  updateStock,
  openDeleteStockModal,
  closeDeleteStockModal,
} = stockSlice.actions;

export default stockSlice.reducer;
