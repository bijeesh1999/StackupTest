import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice'


export const store = configureStore({
  reducer: {
    get:taskSlice
  },
})

export default store