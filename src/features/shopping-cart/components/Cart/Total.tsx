import { useAppSelector } from '../../../../app/hooks'
import { selectAmountItems,  selectCartItems } from '../../cartSlice'
import { TotalSection } from './total.styled'
import { selectProductEntities } from '../../productSlice'
import { ICartItem, IProduct } from '../../types'
import { Dictionary } from '@reduxjs/toolkit'

function Total() {

  const cartItems = useAppSelector(selectCartItems)
  const products = useAppSelector<Dictionary<IProduct>>(selectProductEntities)
  const totalItems = useAppSelector(selectAmountItems)
  const getTotalSum = () => {
    let result = 0;
    cartItems?.forEach((item: ICartItem)  => {
      if (item?.id) {
        result += (products[item.id as keyof typeof products]?.price || 0) * (item?.quantity || 0);
      }
    })
    return result.toFixed(2)
  }
  return (
    <TotalSection>
      <h3>ORDER SUMMARY</h3>
      <div>
        <p>
          total ({totalItems} items)
          : <strong>${getTotalSum()}</strong>
        </p>
      </div>
    </TotalSection>
  )
}

export default Total