import { useAppSelector } from '../app/hooks'
import { selectCartItems } from '../features/shopping-cart/cartSlice'
import { CartItem } from '../features/shopping-cart/components/Cart'
import Total from '../features/shopping-cart/components/Cart/Total'
import { ICartItem } from '../features/shopping-cart/types'
import { StyledCart } from './cart.styled'

function Cart() {

  const cart = useAppSelector(selectCartItems)

  return (
    <StyledCart>
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item: ICartItem) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
      </div>

    </StyledCart>
  )
}

export default Cart