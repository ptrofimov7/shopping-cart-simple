import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    fetchProducts: (state, action: PayloadAction<IProduct[]>) => {
      return {
        ...state, data: action.payload
      };
    },

  },
});

export default productSlice.reducer;

export const {
  fetchProducts
} = productSlice.actions;