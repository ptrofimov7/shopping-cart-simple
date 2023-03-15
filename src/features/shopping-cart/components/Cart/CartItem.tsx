import './cartItem.css'
// import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useAppDispatch } from '../../../../app/hooks'

type CartItemProps = {
  id: string,
  name: string,
  price: number,
  quantity?: number
}

function CartItem({id, name, price, quantity=0}: CartItemProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="cartItem">
      <img className="cartItem__image" src='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div> */}
        {/* <button
          className='cartItem__removeButton'
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button> */}
      </div>
    </div>
  )
}

export default CartItem