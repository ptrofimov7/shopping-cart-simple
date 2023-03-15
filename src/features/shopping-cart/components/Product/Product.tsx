import './product.css'
import { useAppDispatch } from '../../../../app/hooks';
//import {addToCart} from '../redux/cartSlice';

type ProductProps = {
  id: string,
  name: string,
  price: number
}

function Product({id, name, price}: ProductProps) {

  const dispatch = useAppDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{name}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
        alt="item"
      />
      <button
        onClick={() => {}
          // dispatch(addToCart({
          //   id, title, image, price
          // }))
        }>Add to Cart
      </button>
    </div>
  )
}

export default Product