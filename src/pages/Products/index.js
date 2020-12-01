/* eslint-disable no-restricted-globals */
import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import SContainer from '../../components/styled/Container';

const Products = () => {
  const products = useSelector(state => state.productsSlicer.products);

  return (
    <SContainer>
      <MaterialTable
        title="Produtos"
        columns={[
          { title: 'Name', field: 'name' },
          {
            field: 'provider.name',
            title: 'Fornecedor',
            render: rowData =>
              rowData.provider?.name ? (
                <span>{rowData.provider?.name}</span>
              ) : (
                <span>Não cadastrado</span>
              ),
          },
          {
            title: 'Preço de venda',
            field: 'salePrice',
          },
          {
            title: 'Preço de compra',
            field: 'purchasePrice',
          },
        ]}
        data={JSON.parse(JSON.stringify(products))}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert(`You saved ${rowData.name}`),
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) =>
              alert(`You want to delete ${rowData.name}`),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </SContainer>
  );
};

export default Products;
