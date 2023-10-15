import { configureStore } from '@reduxjs/toolkit'
import { rootReducer as reducer } from './rootReducer'

export const createStore = () => {
  const store = configureStore({
    reducer,
  })

  return store
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<ReturnType<typeof createStore>['dispatch']>
