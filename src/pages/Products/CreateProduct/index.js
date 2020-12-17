/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import NumberFormat from 'react-number-format';
import getAllProviders from '../../../services/local/providers/getAllProviders';
import { ButtonGroup } from './style';
import DefaultModal from '../../../components/DefaultModal';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R$"
    />
  );
}

export default function CreateProductModal({ openModal, toggleModal }) {
  const [loading, setLoading] = React.useState(false);
  const [providers, setProviders] = React.useState(undefined);

  const [search, setSearch] = React.useState('');

  const [product, setProduct] = React.useState({
    name: '',
    salePrice: '',
    purchasePrice: '',
    productCode: 0,
    provider: undefined,
  });

  const onSubmit = event => {
    event.preventDefault();
  };

  const handleInput = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const [providerCheckbox, setProviderCheckbox] = React.useState({
    checked: true,
  });

  const toggleProviderCheckbox = () =>
    setProviderCheckbox({
      checked: !providerCheckbox.checked,
    });

  React.useEffect(() => {
    const providers = getAllProviders();
    setProviders(providers);
  }, []);

  return (
    <DefaultModal openModal={openModal} toggleModal={toggleModal}>
      <form onSubmit={onSubmit}>
        <DialogTitle>Cadastro de Produto</DialogTitle>
        <DialogContent>
          <Grid container>
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
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="`Preço de compra"
                  value={product.salePrice}
                  onChange={e => handleInput(e)}
                  name="salePrice"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Preço de venda"
                  placeholder="Insira um valor"
                  value={product.purchasePrice}
                  onChange={e => handleInput(e)}
                  name="purchasePrice"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              {providerCheckbox.checked && (
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    options={providers}
                    onChange={(event, newValue) => {
                      if (newValue) {
                        return setProduct({
                          ...product,
                          provider: newValue,
                        });
                      }
                      return setProduct({
                        ...product,
                        productId: undefined,
                      });
                    }}
                    inputValue={search}
                    onInputChange={(event, newInputValue) => {
                      setSearch(newInputValue);
                    }}
                    getOptionSelected={option => option.name}
                    id="controllable-states-demo"
                    getOptionLabel={option => option.name}
                    renderInput={params => (
                      <TextField {...params} label="Fornecedor" />
                    )}
                  />
                </Grid>
              )}
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={providerCheckbox.checked}
                      onChange={toggleProviderCheckbox}
                      name="providerCheckbox"
                    />
                  }
                  label="Fornecedor"
                />
              </Grid>
            </Grid>
            <ButtonGroup item container direction="row-reverse" xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Criar
              </Button>
              <Button
                onClick={toggleModal}
                variant="text"
                color="secondary"
                type="submit"
              >
                Cancelar
              </Button>
            </ButtonGroup>
          </Grid>
        </DialogContent>
      </form>
    </DefaultModal>
  );
}
