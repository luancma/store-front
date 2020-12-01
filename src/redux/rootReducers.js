import { combineReducers } from 'redux';
import productsSlicer from './slices/products';

const rootReducers = combineReducers({
  productsSlicer,
});

export default rootReducers;
