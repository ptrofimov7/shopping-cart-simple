import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ICartItem, IShoppingCartState } from './types';

const initialState: IShoppingCartState = {
  data: [],
  status: 'idle',
  error: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const item = state.data.find((item) => item?.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    setQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.data.push({ ...action.payload });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  setQuantity,
  removeItem,
} = cartSlice.actions;

const selectCartItems = (state: RootState) => state.cart.data

const selectAmountItems = createSelector(selectCartItems, (items) => items.length)

const selectTotalSum = createSelector(selectCartItems, (items: ICartItem[]) => items.reduce((acc, cur) => {
  acc += cur.price * cur.quantity
  return acc
}, 0))

export {
  selectCartItems,
  selectAmountItems,
  selectTotalSum,
}