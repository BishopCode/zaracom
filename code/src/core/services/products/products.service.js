import axios from 'axios';

export const getProducts = () => {
  return axios.get('https://front-test-api.herokuapp.com/api/product');
};

export const getProductById = (id) => {
  return axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`);
};
