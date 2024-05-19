import { configureStore } from "@reduxjs/toolkit"
import companiesSlice from "./slices/companiesSlice"
import productsSlice from "./slices/productsSlice"

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
    products: productsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
