import productsReducer from './products/products.reducer';
import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    products: productsReducer,
  });

export default rootReducer;
