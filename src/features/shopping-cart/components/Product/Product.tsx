import { useAppSelector } from '../../../../app/hooks';
import { selectProductById } from '../../productSlice';
import { IProduct } from '../../types';
import { StyledProduct } from './product.styled';

type ProductProps = {
  id: string,
  onOpen: (id: string) => void,
}

function Product({ id, onOpen }: ProductProps) {

  const selectedProduct = useAppSelector(state => selectProductById(state, id)) as IProduct

  return (
    <StyledProduct>
      <div className="item__info">
        <p className="item__title">{selectedProduct?.name}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{selectedProduct?.price}</strong>
        </p>
      </div>
      <img
        src='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
        alt="item"
      />
      <button onClick={() => onOpen(id)}
      >Add to Cart
      </button>
    </StyledProduct>
  )
}

export default Product