import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { products } from "~/services/products";


export const store = configureStore({
    reducer: {
        [products.reducerPath]:products.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(products.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);