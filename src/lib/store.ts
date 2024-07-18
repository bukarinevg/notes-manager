import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import notesSliceReducer  from './features/notesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      notes: notesSliceReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']