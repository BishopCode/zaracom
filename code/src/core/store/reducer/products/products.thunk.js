import { getProducts } from '../../../services/products/products.service';
import actions from './../../actions/products/products.actions';

export const loadProductsAsync = () => (dispatch) => {
  dispatch(actions.getProductsRequest());

  getProducts()
    .then((response) => dispatch(actions.getProductsSuccess(response.data)))
    .catch((error) => dispatch(actions.getProductsFailure(error.message)));
};

export const filterProducts = (value) => (dispatch) => {
  dispatch(actions.filterProducts(value));
};
