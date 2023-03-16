import { Product } from '../features/shopping-cart/components'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../features/shopping-cart/types';
import { selectProducts, selectStatus } from '../features/shopping-cart/productSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incrementQuantity, selectAmountItems, setQuantity } from '../features/shopping-cart/cartSlice';
import { StyledProducts } from './home.styled';
import React, { useRef, useState } from 'react';
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
      dragMovedElement.current = id;
   };

   const onDragEnter = (e: any) => {
      dragMovedElement.current = '1';
   };

   const drop = (e: React.DragEvent) => {

      if (!dragMovedElement.current) {
         return
      }
      dispatch(incrementQuantity({ id: dragMovedElement.current, quantity: 1 }))
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

            >
               <ShoppingCart id='cartIcon' />
               <p>{totalItems}</p>
            </button>
            <div style={{ width: 500, height: 500, background: 'red' }}
               onDragEnter={(e) => onDragEnter(e)}
               onDragOver={(e) => e.preventDefault()}
               onDragEnd={drop}
            >Dran N Drop here</div>
         </StyledProducts>
         {selectedId && <ItemModal id={selectedId} closeItem={closeItem} saveItem={saveItem} />}
      </>
   )
}

export default Home