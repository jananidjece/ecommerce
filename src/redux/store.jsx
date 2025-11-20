import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        devTools: true,
        cart: cartSlice,
        product: productSlice
    }
})

export default store;