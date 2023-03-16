import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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

function Modal({ id, closeItem, saveItem }: ItemModalProps) {

   const selectedProduct = useAppSelector(state => selectProductById(state, id)) as IProduct
   const selectedCart = useAppSelector(state => selectCartItemById(state, id)) as ICartItem
   const [quantity, setQuantity] = useState(selectedCart?.quantity || 0)
   const { register, handleSubmit, formState: { errors } } = useForm()
   const ref = useRef<HTMLDivElement>(null)
   const lastActiveElement = useRef<any>(null)

   const handleClose = () => {
      closeItem()
      if (lastActiveElement.current) {
         lastActiveElement.current?.focus()
      }
   }

   const onSubmit = () => {
      saveItem(id, quantity)
      handleClose()
   }

   useEffect(() => {
      lastActiveElement.current = document.activeElement
      if (ref.current) {
         ref.current?.focus()
      }
   }, [])

   return (
      <ModalWrapper
         id="modal2"
         ref={ref}
         tabIndex={0}
         onClick={(e: React.MouseEvent) => e.stopPropagation()}
         onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            e.stopPropagation()
            if (e.key === 'Escape') {
               handleClose()
            }
         }}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <p>{selectedProduct?.name}</p>
            <label className='quantity'>
               Quantity:
               <input
                  id='quantity'
                  type='number'
                  value={quantity}
                  {...register("quantity", { min: 1, max: 999 })}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value)}
               />
            </label>
            {errors.quantity && (
               <p className='error'>Quantity should be at least 1!</p>
            )}
            <button type="submit" className='save-btn'>Save</button>
            <IconButton aria-label="close" onClick={handleClose}>
               <Close />
            </IconButton>
         </form>
      </ModalWrapper>
   );
};

export default Modal;