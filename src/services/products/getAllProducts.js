import instance from '../api';

const getAllProducts = () => {
  const stock = instance
    .get('/products/list')
    .then(response => response.data)
    .catch(error => error.response);

  return stock;
};

export default getAllProducts;
