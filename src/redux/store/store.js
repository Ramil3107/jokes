import { configureStore } from '@reduxjs/toolkit'
import jokesSlice from '../slices/jokesSlice'

export const store = configureStore({
  reducer: {
    jokes: jokesSlice
  },
})