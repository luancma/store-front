import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { CircularProgress, Grid } from '@material-ui/core';
import SContainer from '../../../components/styled/Container';
import SButton from '../../../components/styled/Button';
import createNewProduct from '../../../services/products/createNewProduct';
import CustomizedSnackbars from './CustomizedSnackbars';

export default function CreateProduct() {
  const [loading, setLoading] = React.useState(false);
  const [porcent, setPorcent] = React.useState(0);
  const [error, setError] = React.useState({
    status: false,
    message: '',
  });

  const [product, setProduct] = React.useState({
    name: '',
    salePrice: 0,
    purchasePrice: 0,
    productCode: 0,
  });

  const getPorcent = React.useCallback(() => {
    return (
      (parseInt(product.salePrice, 10) * parseInt(porcent, 10)) / 100 +
      parseInt(product.salePrice, 10)
    );
  }, [product.salePrice, porcent]);

  const getAllProductsRequest = async () => createNewProduct(product);

  const createProduct = async () => {
    setLoading(true);
    getAllProductsRequest(product)
      .then(response => {
        if (response.data.error) {
          setError({
            status: true,
            message: response.data.error,
          });
        }
      })
      .catch(error => console.log({ error }));
    setLoading(false);
  };

  const onSubmit = event => {
    event.preventDefault();
    createProduct();
  };

  const handleInput = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SContainer>
      {loading && <CircularProgress />}
      <h1>Essa página ta foda</h1>
      <form onSubmit={onSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Nome do produto"
              placeholder="Insira um valor"
              fullWidth
              margin="normal"
              name="name"
              value={product.name}
              onChange={e => handleInput(e)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Preço de compra"
              placeholder="Insira um valor"
              margin="normal"
              type="number"
              fullWidth
              name="salePrice"
              value={product.salePrice}
              onChange={e => handleInput(e)}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ position: 'relative' }}>
            <TextField
              label="Preço de venda"
              placeholder="Insira um valor"
              margin="normal"
              type="number"
              fullWidth
              name="purchasePrice"
              value={product.purchasePrice}
              onChange={e => handleInput(e)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Nome do produto"
              placeholder="Insira um valor"
              margin="normal"
              fullWidth
              name="productCode"
              value={product.productCode}
              onChange={e => handleInput(e)}
            />
          </Grid>
          <Grid item container direction="row-reverse" xs={12}>
            <SButton
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Criar
            </SButton>
          </Grid>
        </Grid>
      </form>
    </SContainer>
  );
}
