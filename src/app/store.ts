import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from '../features/shopping-cart/cartSlice';
import productReducer from '../features/shopping-cart/productSlice';
import saga from '../features/shopping-cart/saga';
import StorageService from '../features/shopping-cart/services/storageService';
import { listenerMiddleware } from './middleware';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, listenerMiddleware.middleware]

// getting store from localstorage
const cartState = StorageService.get();

export const store = configureStore({
  preloadedState: {
    cart: cartState === null ? { data: [] } : cartState.cart
  },
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga)
