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

const getProductByIdRequest = () => ({
  type: actionTypes.GET_PRODUCT_BY_ID_REQUEST,
});

const getProductByIdSuccess = (data) => ({
  type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: data,
});

const getProductByIdFailure = (errorMessage) => ({
  type: actionTypes.GET_PRODUCT_BY_ID_FAILURE,
  payload: errorMessage,
});

const addProductToCartSuccess = (data) => ({
  type: actionTypes.ADD_PRODUCT_CART_SUCCESS,
  payload: data,
});

const addProductToCartFailure = (errorMessage) => ({
  type: actionTypes.ADD_PRODUCT_CART_FAILURE,
  payload: errorMessage,
});

export default {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  filterProducts,
  getProductByIdRequest,
  getProductByIdSuccess,
  getProductByIdFailure,
  addProductToCartSuccess,
  addProductToCartFailure,
};
