import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectCartItemIds, setQuantity } from '../features/shopping-cart/cartSlice'
import { CartItem, CartList } from '../features/shopping-cart/components/Cart'
import Total from '../features/shopping-cart/components/Cart/Total'
import { ItemModal } from '../features/shopping-cart/components/ItemModal'
import { StyledCart } from './cart.styled'
import { EntityId } from '@reduxjs/toolkit'

function Cart() {

   const cartIds = useAppSelector(selectCartItemIds)
   const [selectedId, setSelectedId] = useState('')
   const openItem = useCallback((id: string) => setSelectedId(id), [])
   const closeItem = () => setSelectedId('')
   const dispatch = useAppDispatch()
   const saveItem = (id: string, quantity: number) => {
      dispatch(setQuantity({ id, quantity }))
   }
   return (
      <>
         <StyledCart>
            <Link className='card__btn-link' to='/'>Back to Products</Link>
            <div className="cart__left">
               <CartList>
                  {cartIds?.map((id: EntityId) => (
                     <CartItem
                        key={String(id)}
                        id={String(id)}
                        onOpen={openItem}
                     />
                  ))}
               </CartList>
            </div>

            <div className="cart__right">
               <Total />
            </div>

         </StyledCart>
         {selectedId && <ItemModal id={selectedId} closeItem={closeItem} saveItem={saveItem} />}
      </>
   )
}

export default Cart