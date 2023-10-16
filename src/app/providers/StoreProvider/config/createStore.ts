import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { IStateSchema } from './reducerSchema'

export const createStore = () => {
    const store = configureStore<IStateSchema>({
        reducer: rootReducer,
    })

    return store
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
