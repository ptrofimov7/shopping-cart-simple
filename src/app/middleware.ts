import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCart, incrementQuantity, removeItem, setQuantity } from "../features/shopping-cart/cartSlice";
import StorageService from "../features/shopping-cart/services/storageService";
import { RootState } from "./store";

// middleware for saving store state into localstorage

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
   matcher: isAnyOf(addToCart,
      setQuantity,
      incrementQuantity,
      removeItem),
   effect: (action, listenerApi) =>
      StorageService.set((listenerApi.getState() as RootState)
      )
});
