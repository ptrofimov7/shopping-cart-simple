import { Product } from '../features/shopping-cart/components'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../features/shopping-cart/types';
import { selectProducts, selectStatus } from '../features/shopping-cart/productSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incrementQuantity, selectAmountItems, setQuantity } from '../features/shopping-cart/cartSlice';
import { StyledProducts } from './home.styled';
import React, { SyntheticEvent, useRef, useState } from 'react';
import { ItemModal } from '../features/shopping-cart/components/ItemModal';
import { CircularProgress } from '@mui/material';

function Home() {

   const navigate = useNavigate()
   const products = useAppSelector(selectProducts)
   const status = useAppSelector(selectStatus)
   const totalItems = useAppSelector(selectAmountItems) || 0
   const [selectedId, setSelectedId] = useState('')
   const openItem = (id: string) => setSelectedId(id)
   const closeItem = () => setSelectedId('')
   const dispatch = useAppDispatch()
   const saveItem = (id: string, quantity: number) => {
      dispatch(setQuantity({ id, quantity }))
   }
   const dragMovedElement = useRef<string>('');

   const drag = (id: string, e: React.DragEvent) => {
      e.stopPropagation()
      dragMovedElement.current = id;
   };

   const onDragEnter = (e: SyntheticEvent) => {
      e.preventDefault()
   };

   const drop = (e: React.DragEvent) => {
      e.preventDefault()
      if (dragMovedElement.current) {
         dispatch(incrementQuantity({ id: dragMovedElement.current, quantity: 1 }))
      }
   };

   if (status === 'loading') {
      return <CircularProgress />
   }

   if (status === 'failed') {
      return <p>Something went wrong!</p>
   }

   return (
      <>
         <StyledProducts>
            <div className="home__container">
               <div className="home__row">
                  {products.map((product: IProduct) => <Product
                     key={product.id}
                     id={product.id}
                     onOpen={openItem}
                     drag={drag}
                  />
                  )}
               </div>
            </div>
            <button
               type="button"
               className='shopping-cart'
               onClick={() => navigate('/cart')}
               onDragEnter={(e) => onDragEnter(e)}
               onDragOver={(e) => e.preventDefault()}
               onDragEnd={drop}
            >
               <ShoppingCart id='cartIcon' />
               <p>{totalItems}</p>
            </button>
         </StyledProducts>
         {selectedId && <ItemModal id={selectedId} closeItem={closeItem} saveItem={saveItem} />}
      </>
   )
}

export default Home