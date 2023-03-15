import './home.css'
import { Product } from '../features/shopping-cart/components'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../features/shopping-cart/types';
import { selectProducts } from '../features/shopping-cart/productSlice';
import { useAppSelector } from '../app/hooks';
import { selectAmountItems } from '../features/shopping-cart/cartSlice';

function Home() {

   const navigate = useNavigate()
   const products = useAppSelector(selectProducts)
   const totalItems = useAppSelector(selectAmountItems) || 0

   return (
      <div className="home">
         <div className="home__container">
            <div className="home__row">
               {products.map((product: IProduct) => {
                  return <Product
                     id={product.id}
                     name={product.name}
                     price={product.price}
                  />
               })}
            </div>
         </div>
         <div className='shopping-cart' onClick={() => navigate('/cart')}>
            <ShoppingCart id='cartIcon' />
            <p>{totalItems}</p>
         </div>
      </div>
   )
}

export default Home