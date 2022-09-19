import axios from 'axios';

export const getProducts = () => {
  return axios.get('https://front-test-api.herokuapp.com/api/product');
};

export const getProductById = (id) => {
  return axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`);
};

export const postProductCart = (id, colorCode, storageCode) => {
  return axios({
    method: 'post',
    url: 'https://front-test-api.herokuapp.com/api/cart',
    data: {
      id: id,
      colorCode: colorCode,
      storageCode: storageCode,
    },
  });
};
