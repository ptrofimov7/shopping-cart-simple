import createSagaMiddleware from '@redux-saga/core';
import { Middleware, configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartSlice } from '../features/shopping-cart/cartSlice';
import productReducer from '../features/shopping-cart/productSlice';
import saga from '../features/shopping-cart/saga';
import StorageService from '../features/shopping-cart/services/storageService';
import { listenerMiddleware } from './middleware';

const sagaMiddleware = createSagaMiddleware()
const middleware =  (getDefaultMiddleware: (val: Record<string, boolean>) => Array<Middleware>) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, listenerMiddleware.middleware)

// getting store from localStorage
const cartState = StorageService.get();

export const store = configureStore({
  preloadedState: {
    cart: !cartState?.cart ? { entities: {}, ids: [], error: ''} : cartState.cart
  } as CartSlice,
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware,
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga)
