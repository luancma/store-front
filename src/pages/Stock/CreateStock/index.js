/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import NumberFormat from 'react-number-format';
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

export default function CreateStockModal({ openModal, toggleModal }) {
  const [search, setSearch] = React.useState('');
  const productsList = useSelector(state => state.productsSlicer.products);
  const [stock, setStockValue] = React.useState({
    product: '',
    minimal: 0,
    current: 0,
  });

  const onSubmit = event => {
    event.preventDefault();
  };

  const handleInput = event => {
    setStockValue({
      ...stock,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    return () => {
      setStockValue({
        product: '',
        minimal: 0,
        current: 0,
      });
    };
  }, [toggleModal]);

  return (
    <DefaultModal openModal={openModal} toggleModal={toggleModal} maxWidth="xs">
      <form onSubmit={onSubmit}>
        <DialogTitle>Cadastrar estoque</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Autocomplete
                  options={productsList}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      return setStockValue({
                        ...stock,
                        product: newValue,
                      });
                    }
                    return setStockValue({
                      ...stock,
                      product: undefined,
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
                    <TextField {...params} label="Produto" />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="number"
                  margin="normal"
                  fullWidth
                  label="Quantidade em estoque"
                  value={stock.current}
                  onChange={e => handleInput(e)}
                  name="current"
                  id="formatted-numberformat-input"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="number"
                  margin="normal"
                  fullWidth
                  label="Quantidade mínima"
                  placeholder="Insira um valor"
                  value={stock.minimal}
                  onChange={e => handleInput(e)}
                  name="minimal"
                  id="formatted-numberformat-input"
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
