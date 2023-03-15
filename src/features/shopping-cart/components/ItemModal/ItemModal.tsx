import { Close, Save } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { selectCartItemById } from '../../cartSlice';
import { selectProductById } from '../../productSlice';
import { ICartItem, IProduct } from '../../types';
import { ModalWrapper } from './itemModal.styled';

type ItemModalProps = {
   id: string,
   closeItem: () => void,
   saveItem: (id: string, quantity: number) => void
}

function Modal ({id, closeItem, saveItem}: ItemModalProps) {

   const selectedProduct = useAppSelector(state => selectProductById(state, id)) as IProduct
   const selectedCart = useAppSelector(state => selectCartItemById(state, id)) as ICartItem
   const [quantity, setQuantity] = useState(selectedCart?.quantity || 0)

   return (
      <ModalWrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <p>{selectedProduct?.name}</p>
      <TextField type="number" id="outlined-basic" label="Quantity" variant="outlined" value={quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value)} />
      <IconButton aria-label="save" onClick={(e: React.MouseEvent) => {
         e.stopPropagation()
         saveItem(id, quantity)
         // if (!title) {
         //    alert('Title is required')
         //    return
         // }
         // updateTask({ ...modalTaskData, title, labels: labelName?.map(label => label.id) })
      }}>
         <Save />
      </IconButton>
      <IconButton aria-label="close" onClick={closeItem}>
         <Close />
      </IconButton>
   </ModalWrapper>
   );
};

export default Modal;