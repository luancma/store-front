import { Dialog } from '@material-ui/core';
import React from 'react';

export default function DefaultModal({
  children,
  openModal,
  toggleModal,
  maxWidth = 'sm',
}) {
  return (
    <Dialog
      fullWidth
      open={openModal}
      onClose={toggleModal}
      maxWidth={`${maxWidth}`}
    >
      {children}
    </Dialog>
  );
}
