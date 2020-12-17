/* eslint-disable no-param-reassign */
import mokedDb from '../../mock/db.json';

const getAllProviders = () => {
  const providers = mokedDb.provider;
  return providers;
};

export default getAllProviders;
