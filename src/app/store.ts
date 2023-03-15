import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from '../features/shopping-cart/cartSlice';
import productReducer from '../features/shopping-cart/productSlice';
import saga from '../features/shopping-cart/saga';

let sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware]

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga)
