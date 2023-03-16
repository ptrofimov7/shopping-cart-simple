import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { selectProductsWithId } from './productSlice';
import { ICartItem, IProduct, IShoppingCartState } from './types';

const initialState: IShoppingCartState = {
  data: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.data.find((item) => item?.id === action.payload.id);
      if (foundedItem) {
        foundedItem.quantity = (foundedItem.quantity || 0) + 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    setQuantity: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.data.find((item) => item.id === action.payload.id);
      if (foundedItem) {
        foundedItem.quantity = action.payload.quantity;
      } else {
        state.data.push({ ...action.payload });
      }
    },
    incrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const foundedItem = state.data.find((item) => item.id === action.payload.id);
      if (foundedItem) {
        foundedItem.quantity += action.payload.quantity;
      } else {
        state.data.push({ ...action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
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
const selectCartItems = (state: RootState) => state.cart.data

const selectAmountItems = createSelector(selectCartItems, (items) => (items?.length || 0))

const selectTotalSum = createSelector([ selectProductsWithId, selectCartItems], (products: Record<string, IProduct>, items: ICartItem[]) => items.reduce((acc, cur) => {
  const selectedProduct = products[cur.id] as IProduct
  return acc + (selectedProduct?.price || 0) * cur.quantity}, 0))

  const selectCartItemsWithId = createSelector([selectCartItems], (items) => (items?.reduce((acc, item) => ({
    ...acc, [item.id]: item
  }), {})))

  const selectCartItemById = createSelector(
    [selectCartItemsWithId, (state, itemId) => itemId],
    (items, itemId) => items?.[itemId as keyof typeof items]
  );

export {
  selectCartItems,
  selectCartItemById,
  selectAmountItems,
  selectTotalSum,
}