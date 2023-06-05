import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../../app/hooks';
import { selectCartItemById } from '../../cartSlice';
import { selectProductById } from '../../productSlice';
import { ICartItem, IProduct } from '../../types';
import { ModalLayout, ModalWrapper } from './itemModal.styled';

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
   const refFirstElement = useRef<HTMLElement | null>(null)
   const refLastElement = useRef<HTMLElement | null>(null)
   const lastActiveElement = useRef<HTMLElement | null>(null)

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
      lastActiveElement.current = document.activeElement as HTMLElement
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
      const modal = ref.current
      if (modal) {
         const focusableElements = Array.from(modal.querySelectorAll(focusableElementsString));
         // The first focusable element within the modal window
         refFirstElement.current = focusableElements?.[0] as HTMLElement;
         // The last focusable element within the modal window
         refLastElement.current = focusableElements[focusableElements.length - 1] as HTMLElement;
         // Focus the window
         refFirstElement.current.focus();
      }
   }, [])

   return (
      <>
      <ModalWrapper
         role='dialog'
         aria-labelledby="change-item"
         id="modal2"
         ref={ref}
         tabIndex={0}
         onClick={(e: React.MouseEvent) => e.stopPropagation()}
         onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            e.stopPropagation()
            if (e.key === 'Escape') {
               handleClose()
               return;
            }
            // Listen for the Tab key
            if (e.keyCode === 9) {
               // If Shift + Tab
               if (e.shiftKey) {
                  // If the current element in focus is the first focusable element within the modal window...
                  if (document.activeElement ===  refFirstElement.current) {
                     e.preventDefault();
                     // ...jump to the last focusable element
                     refLastElement.current?.focus();
                  }
                  // if Tab
               } else {
                  // If the current element in focus is the last focusable element within the modal window...
                  // eslint-disable-next-line no-lonely-if
                  if (document.activeElement ===  refLastElement.current) {
                     e.preventDefault();
                     // ...jump to the first focusable element
                     refFirstElement.current?.focus();
                  }
               }
            }
         }}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <h3 id="change-item">Change item</h3>
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
      <ModalLayout onClick={handleClose} />
      </>
   );
};

export default Modal;