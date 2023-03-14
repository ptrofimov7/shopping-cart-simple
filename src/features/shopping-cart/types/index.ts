

type IGoodsItem = {
   id: string,
   name: string,
   price: number,
   qty: number,
}

type IShoppingCartState = Array<IGoodsItem>

export {
   type IGoodsItem,
   type IShoppingCartState
}