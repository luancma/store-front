/* eslint-disable no-param-reassign */
import mokedDb from '../../mock/db.json';

const getAllProducts = async () => {
  const providers = mokedDb.provider;

  const productsList = mokedDb.products.map(product => {
    if (product.provider) {
      const filteredProvider = providers.find(
        provider => provider.id === product.provider,
      );
      product.provider = filteredProvider;
    }

    return product;
  });

  return productsList;
};

export default getAllProducts;
