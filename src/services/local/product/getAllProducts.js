import mokedDb from '../../mock/db.json';

const getAllProducts = async () => {
  return mokedDb.products;
};

export default getAllProducts;
