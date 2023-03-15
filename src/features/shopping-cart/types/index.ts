
type IProduct = {
   id: string,
   name: string,
   price: number,
}

type ICartItem = {
   id: string,
   quantity: number,
   sum?: number,
}

type IProductState = {
   data: Array<IProduct>,
   status: 'idle' | 'loading' | 'failed',
   error: string | null | undefined,
}

type IShoppingCartState = {
   data: Array<ICartItem>,
   status: 'idle' | 'loading' | 'failed',
   error: string | null | undefined,
}

export {
   type IProduct,
   type ICartItem,
   type IProductState,
   type IShoppingCartState
}