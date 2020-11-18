import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import SContainer from '../../components/styled/Container';
import useFetch from '../../hooks/useFetch';
import getAllProducts from '../../services/products/getAllProducts';

const Products = () => {
  const getAllProductsRequest = async () => await getAllProducts();

  const { data, loading, error } = useFetch({ func: getAllProductsRequest });

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <SContainer>
      <Typography>Produtos</Typography>
      <MaterialTable
        columns={[
          {
            title: 'Código do produto',
            field: 'productCode',
            type: 'string',
          },
          { title: 'Name', field: 'name', type: 'string' },
          {
            title: 'Preço de venda',
            field: 'salePrice',
            type: 'numeric',
          },
          {
            title: 'Preço de compra',
            field: 'purchasePrice',
            type: 'numeric',
          },
        ]}
        data={data.products}
        title="Estoque"
      />
    </SContainer>
  );
};

export default Products;
