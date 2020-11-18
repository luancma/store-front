import mokedDb from '../../mock/db.json';

const createNewProduct = async (product = null) => {
  const newProduct = product;
  newProduct.id = mokedDb.products.length;

  const newMokedDb = [...mokedDb.products, newProduct];
  console.log(newMokedDb);
};

export default createNewProduct;
