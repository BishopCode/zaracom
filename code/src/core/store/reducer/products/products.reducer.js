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

    default:
      return state;
  }
};

export default productsReducer;
