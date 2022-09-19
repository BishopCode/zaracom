import actionTypes from './products.actionTypes';

const getProductsRequest = () => ({
  type: actionTypes.GET_PRODUCTS_REQUEST,
});

const getProductsSuccess = (data) => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  payload: data,
});

const getProductsFailure = (errorMessage) => ({
  type: actionTypes.GET_PRODUCTS_FAILURE,
  payload: errorMessage,
});

const filterProducts = (data) => ({
  type: actionTypes.FILTER_PRODUCTS,
  payload: data,
});

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  filterProducts,
};
