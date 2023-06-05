
type IProduct = {
   id: string,
   name: string,
   price: number,
}

type ICartItem = {
   id: string,
   quantity: number,
}

type IProductState = {
   status: 'idle' | 'loading' | 'failed',
   error: string | null | undefined,
}

type IShoppingCartState = {
   error: string | null | undefined,
}

export {
   type IProduct,
   type ICartItem,
   type IProductState,
   type IShoppingCartState
}