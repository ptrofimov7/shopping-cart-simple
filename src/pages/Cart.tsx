import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectCartItems, setQuantity } from '../features/shopping-cart/cartSlice'
import { CartItem, CartList } from '../features/shopping-cart/components/Cart'
import Total from '../features/shopping-cart/components/Cart/Total'
import { ItemModal } from '../features/shopping-cart/components/ItemModal'
import { ICartItem } from '../features/shopping-cart/types'
import { StyledCart } from './cart.styled'

function Cart() {

   const cart = useAppSelector(selectCartItems)
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
                  {cart?.map((item: ICartItem) => (
                     <CartItem
                        key={item.id}
                        id={item.id}
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