import './total.css'
import { useAppSelector } from '../../../../app/hooks'
import { selectAmountItems, selectTotalSum } from '../../cartSlice'

function Total() {

  const totalSum = useAppSelector(selectTotalSum)
  const totalItems = useAppSelector(selectAmountItems)

//   const getTotal = () => {
//     let totalQuantity = 0
//     let totalPrice = 0
//     cart.forEach(item => {
//       totalQuantity += item.quantity
//       totalPrice += item.price * item.quantity
//     })
//     return {totalPrice, totalQuantity}
//   }

  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({totalItems} items)
          : <strong>${totalSum}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total