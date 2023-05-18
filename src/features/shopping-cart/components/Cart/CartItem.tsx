import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { removeItem, selectCartItemById } from '../../cartSlice'
import { selectProductById } from '../../productSlice'
import { ICartItem, IProduct } from '../../types'
import { StyledCartItem } from './cartItem.styled'

type CartItemProps = {
  id: string,
  onOpen: (id: string) => void,
}

function CartItem({id, onOpen}: CartItemProps) {

  const dispatch = useAppDispatch()
  const selectedProduct = useAppSelector(state => selectProductById(state, id)) as IProduct
  const selectedCartItem = useAppSelector(state => selectCartItemById(state, id)) as ICartItem
  return (
    <StyledCartItem>
      <img className="cartItem__image" src='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{selectedProduct?.name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{selectedProduct?.price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <p>{selectedCartItem?.quantity}</p>
          <button onClick={() => onOpen(id)}>Edit</button>
        </div>
        <button
          className='cartItem__removeButton'
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </StyledCartItem>
  )
}

export default React.memo(CartItem)