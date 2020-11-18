import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import SContainer from '../../components/styled/Container';
import useFetch from '../../hooks/useFetch';
import createNewProduct from '../../services/local/product/createNewProduct';
import getAllProducts from '../../services/local/product/getAllProducts';

const Products = () => {
  const getAllProductsRequest = async () => getAllProducts();

  const { data, loading, error } = useFetch({ func: getAllProductsRequest });

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <SContainer>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name' },
          {
            title: 'Preço de venda',
            field: 'salePrice',
          },
          {
            title: 'Preço de compra',
            field: 'purchasePrice',
          },
        ]}
        data={data}
        title="Produtos"
      />
    </SContainer>
  );
};

export default Products;
