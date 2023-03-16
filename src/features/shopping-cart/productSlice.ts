import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProduct, IProductState } from './types';

const initialState: IProductState = {
  data: [],
  status: 'idle',
  error: ''
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.status = 'loading'
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProduct[]>) => ({
      ...state, data: action.payload, status: 'idle'
    }),
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
});

export default productSlice.reducer;

// actions

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

// selectors

const selectProducts = (state: RootState) => state.product.data
const selectStatus = (state: RootState) => state.product.status

const selectProductIds = createSelector([selectProducts], (products) => (products.map(product => product.id)))

const selectProductsWithId = createSelector([selectProducts], (products) => (products.reduce((acc, product) => ({
  ...acc, [product.id]: product
}), {})))


const selectProductById = createSelector(
  [selectProductsWithId, (state, productId) => productId],
  (products, productId) => products[productId as keyof typeof products]
);

export {
  selectStatus,
  selectProducts,
  selectProductIds,
  selectProductsWithId,
  selectProductById,
}
