/* eslint-disable no-restricted-globals */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import SContainer from '../../components/styled/Container';
import CreateStockModal from './CreateStock';
import { fetchStock, openDeleteStockModal } from './stockSlice';

const Products = () => {
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stockSlice.stock);

  const [createStock, setCreateStock] = React.useState(false);

  const toggleModal = () => setCreateStock(!createStock);

  const handleRemoveProduct = product => {
    dispatch(openDeleteStockModal(product));
  };

  const handleEditStock = () => stockInstance => {
    // Open the value
  };

  React.useEffect(() => {
    dispatch(fetchStock());
  }, [stock]);

  return (
    <SContainer>
      <CreateStockModal openModal={createStock} toggleModal={toggleModal} />
      {/* <DeleteProduct /> */}
      <Grid
        container
        direction="row-reverse"
        style={{
          margin: '24px 0',
        }}
      >
        <Button
          variant="contained"
          disableElevation
          style={{
            background: '#4CAF50',
            color: '#fff',
          }}
          onClick={toggleModal}
        >
          Adicionar
        </Button>
      </Grid>
      <MaterialTable
        title="Estoque"
        columns={[
          { title: 'Nome', field: 'product.name' },
          {
            title: 'Estoque atual',
            field: 'current_size',
          },
          {
            title: 'Estoque mínimo',
            field: 'minimal_size',
          },
          {
            title: 'Preço de venda',
            field: 'product.salePrice',
          },
          {
            title: 'Preço de compra',
            field: 'product.purchasePrice',
          },
        ]}
        data={JSON.parse(JSON.stringify(stock))}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) =>
              alert(`You saved ${rowData.product.name}`),
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Deletar',
            onClick: (event, rowData) =>
              handleRemoveProduct({
                open: true,
                product: rowData,
              }),
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
