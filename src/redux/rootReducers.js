import { combineReducers } from 'redux';
import productsSlicer from './slices/products';
import modalSlice from './slices/modal';
import stockSlice from '../pages/Stock/stockSlice';

const rootReducers = combineReducers({
  productsSlicer,
  modalSlice,
  stockSlice,
});

export default rootReducers;
