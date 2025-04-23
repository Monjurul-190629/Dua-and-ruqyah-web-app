import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../features/Category/categorySlice'

export const store = configureStore({
    reducer : {
        categories: categoriesReducer
    }
})