import { ReactNode } from 'react';

type CartListProps = {
   children: ReactNode
}

function CartList({ children }: CartListProps) {
   return (
      <div>
         <h2>Shopping Cart</h2>
         { children }
      </div>
   );
};

export default CartList;