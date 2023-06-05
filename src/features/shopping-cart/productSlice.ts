import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProduct, IProductState } from './types';

const productAdapter = createEntityAdapter<IProduct>()

const initialState = productAdapter.getInitialState({
  status: 'idle',
  error: ''
} as IProductState)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.status = 'loading'
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      productAdapter.setAll(state, action.payload)
      state.status = 'idle'
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      productAdapter.removeAll(state)
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

export type ProductSlice = {
  [productSlice.name]: ReturnType<typeof productSlice['reducer']>
}

export const {
  selectAll: selectProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities
} = productAdapter.getSelectors<ProductSlice>((state: RootState) => state.product)

export const selectStatus = (state: RootState) => state.product.status
