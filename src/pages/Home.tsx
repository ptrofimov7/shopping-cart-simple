import { Product } from '../features/shopping-cart/components'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../features/shopping-cart/types';
import { selectProducts } from '../features/shopping-cart/productSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectAmountItems, setQuantity } from '../features/shopping-cart/cartSlice';
import { StyledProducts } from './home.styled';
import { useState } from 'react';
import { ItemModal } from '../features/shopping-cart/components/ItemModal';

function Home() {

   const navigate = useNavigate()
   const products = useAppSelector(selectProducts)
   const totalItems = useAppSelector(selectAmountItems) || 0
   const [selectedId, setSelectedId] = useState('')
   const openItem = (id: string) => setSelectedId(id)
   const closeItem = () => setSelectedId('')
   const dispatch = useAppDispatch()
   const saveItem = (id: string, quantity: number) => {
      dispatch(setQuantity({ id, quantity }))
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
               />
               )}
            </div>
         </div>
         <button type="button" className='shopping-cart' onClick={() => navigate('/cart')}>
            <ShoppingCart id='cartIcon' />
            <p>{totalItems}</p>
         </button>
      </StyledProducts>
      {selectedId && <ItemModal id={selectedId} closeItem={closeItem} saveItem={saveItem} />}
      </>
   )
}

export default Home