import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCart, incrementQuantity, removeItem, setQuantity } from "../features/shopping-cart/cartSlice";
import StorageService from "../services/storageService";
import { RootState } from "./store";

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
