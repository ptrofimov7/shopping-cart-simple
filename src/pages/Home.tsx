import { Product } from '../features/shopping-cart/components'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../features/shopping-cart/types';
import { selectProducts } from '../features/shopping-cart/productSlice';
import { useAppSelector } from '../app/hooks';
import { selectAmountItems } from '../features/shopping-cart/cartSlice';
import { StyledProducts } from './home.styled';

function Home() {

   const navigate = useNavigate()
   const products = useAppSelector(selectProducts)
   const totalItems = useAppSelector(selectAmountItems) || 0

   return (
      <StyledProducts>
         <div className="home__container">
            <div className="home__row">
               {products.map((product: IProduct) => <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
               />
               )}
            </div>
         </div>
         <button type="button" className='shopping-cart' onClick={() => navigate('/cart')}>
            <ShoppingCart id='cartIcon' />
            <p>{totalItems}</p>
         </button>
      </StyledProducts>
   )
}

export default Home