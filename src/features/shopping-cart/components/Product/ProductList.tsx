import { ReactNode } from 'react';
import { StyledProductList } from './productList.styled';

type ProductListProps = {
   children: ReactNode
}

function ProductList({ children }: ProductListProps) {
   return (
      <StyledProductList>
         <h2>Products</h2>
         <div className="home__row">
            { children }
         </div>
      </StyledProductList>
   )
}

export default ProductList;