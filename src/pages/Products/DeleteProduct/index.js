import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { closeDeleteProductModal } from '../../../redux/slices/products';

export default function DeleteProduct() {
  const product = useSelector(state => state.productsSlicer);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(closeDeleteProductModal());
  };

  return (
    <div>
      <Dialog
        open={product.openModal}
        onClose={toggleModal}
        aria-labelledby="responsive-dialog-title"
      >
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
      </Dialog>
    </div>
  );
}
