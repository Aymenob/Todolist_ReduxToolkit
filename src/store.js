import { configureStore } from '@reduxjs/toolkit'
import counter from './slice'
import section from './slice2'
export const store = configureStore({
  reducer: {
    counter, section
  }
})
