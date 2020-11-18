import instance from '../api';

const createNewProduct = product => {
  const newProduct = instance
    .post('/products/create', product)
    .then(response => response.data)
    .catch(error => {
      return error.response;
    });

  return newProduct;
};

export default createNewProduct;
