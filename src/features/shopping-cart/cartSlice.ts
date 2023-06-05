import { createSelector, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import { ICartItem, IShoppingCartState } from './types';

const cartAdapter = createEntityAdapter<ICartItem>()

const initialState = cartAdapter.getInitialState({ error: '' } as IShoppingCartState)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.entities[action.payload.id] as ICartItem
      if (foundedItem) {
        foundedItem.quantity = (foundedItem.quantity || 0) + 1;
      } else {
        cartAdapter.addOne(state, { ...action.payload, quantity: 1 })
      }
    },
    setQuantity: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.entities[action.payload.id] as ICartItem
      if (foundedItem) {
        foundedItem.quantity = action.payload.quantity;
      } else {
        cartAdapter.addOne(state, { ...action.payload })
      }
    },
    incrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.entities[action.payload.id] as ICartItem
      if (foundedItem) {
        foundedItem.quantity += action.payload.quantity;
      } else {
        cartAdapter.addOne(state, { ...action.payload })
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      cartAdapter.removeOne(state, action.payload)
    },
  },
});

// reducer
export default cartSlice.reducer;

// actions
export const {
  addToCart,
  setQuantity,
  incrementQuantity,
  removeItem,
} = cartSlice.actions;

// selectors

export type CartSlice = {
  [cartSlice.name]: ReturnType<typeof cartSlice['reducer']>
}

export const {
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
  selectAll: selectCartItems,
  selectEntities: selectCartEntities
} = cartAdapter.getSelectors<CartSlice>(
  (state) => state[cartSlice.name]
)

export const selectAmountItems = createSelector(
  selectCartItems,
  (items: ICartItem[]) => {
    if (!items ) return 0;
    return (items?.map((item: ICartItem) => (item?.quantity || 0))
    .reduce((acc: number, cur: number) => (acc + cur), 0) || 0)
  })
