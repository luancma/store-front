import instance from '../api';

const getAllStock = () => {
  const stock = instance
    .get('/stock')
    .then((response) => response.data)
    .catch((error) => error.response);

  return stock;
};

export default getAllStock;
