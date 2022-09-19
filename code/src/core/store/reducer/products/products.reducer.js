import productTypes from '../../actions/products/products.actionTypes';
import initialStates from './products.initialStates';

const productsReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case productTypes.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case productTypes.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
        filteredProducts: payload,
      };
    }

    case productTypes.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    }

    case productTypes.FILTER_PRODUCTS: {
      const value = payload;
      const filteredProducts = state.products.filter((product) => {
        return (
          product.brand.toLowerCase().includes(value) ||
          product.model.toLowerCase().includes(value)
        );
      });

      return {
        ...state,
        filteredProducts: filteredProducts,
      };
    }

    case productTypes.ADD_PRODUCT_CART_SUCCESS: {
      return {
        ...state,
        totalCart: state.totalCart + payload.count,
      };
    }

    case productTypes.ADD_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    }

    case productTypes.GET_PRODUCT_BY_ID_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case productTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        productSelected: payload,
      };
    }

    case productTypes.GET_PRODUCT_BY_ID_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
