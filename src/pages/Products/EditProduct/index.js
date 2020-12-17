import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import DefaultModal from '../../../components/DefaultModal';

const EditProduct = () => {
  const openModal = true;
  function toggleModal(params) {}

  return (
    <DefaultModal openModal={openModal} toggleModal>
      <DialogTitle id="responsive-dialog-title">Remover produto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que vai deletar o produto ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={toggleModal} color="primary">
          Cancelar
        </Button>
        <Button color="secondary" onClick={toggleModal} autoFocus>
          Remover
        </Button>
      </DialogActions>
    </DefaultModal>
  );
};

export default EditProduct;
