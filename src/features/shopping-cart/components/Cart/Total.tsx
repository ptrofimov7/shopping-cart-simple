import { useAppSelector } from '../../../../app/hooks'
import { selectAmountItems, selectTotalSum } from '../../cartSlice'
import { TotalSection } from './total.styled'

function Total() {

  const totalSum = useAppSelector(selectTotalSum)
  const totalItems = useAppSelector(selectAmountItems)

  return (
    <TotalSection>
      <h2>ORDER SUMMARY</h2>
      <div>
        <p>
          total ({totalItems} items)
          : <strong>${totalSum}</strong>
        </p>
      </div>
    </TotalSection>
  )
}

export default Total