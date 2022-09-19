import {
  getProductById,
  getProducts,
  postProductCart,
} from '../../../services/products/products.service';
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

export const getProductByIdThunk = (id) => (dispatch) => {
  dispatch(actions.getProductByIdRequest());

  getProductById(id)
    .then((response) => dispatch(actions.getProductByIdSuccess(response.data)))
    .catch((error) => dispatch(actions.getProductByIdFailure(error.message)));
};

export const addProductToCart = (id, colorCode, storageCode) => (dispatch) => {
  postProductCart(id, colorCode, storageCode)
    .then((response) =>
      dispatch(actions.addProductToCartSuccess(response.data)),
    )
    .catch((error) => dispatch(actions.addProductToCartFailure(error.message)));
};
