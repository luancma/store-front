/* eslint-disable no-restricted-globals */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import CreateProductModal from './CreateProduct';
import SContainer from '../../components/styled/Container';
import DeleteProduct from './DeleteProduct';
import { openDeleteProductModal } from '../../redux/slices/products';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsSlicer.products);

  const [openModal, setOpenModal] = React.useState(false);

  const [createProductModal, setCreateProductModal] = React.useState(false);

  const toggleModal = () => setCreateProductModal(!createProductModal);

  const handleRemoveProduct = product => {
    dispatch(openDeleteProductModal(product));
  };

  return (
    <SContainer>
      <CreateProductModal
        openModal={createProductModal}
        toggleModal={toggleModal}
      />
      <DeleteProduct />
      <Grid
        container
        direction="row-reverse"
        style={{
          margin: '24px 0',
        }}
        onClick={e => setOpenModal()}
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
