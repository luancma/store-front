/* eslint-disable no-param-reassign */
import mokedDb from '../../mock/db.json';

const getStock = () => {
  const { stock } = mokedDb;
  return stock;
};

export default getStock;
