import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../config/createStore'

interface StoreProviderProps {
  children?: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createStore()

  return <Provider store={store}>{children}</Provider>
}

StoreProvider.displayName = 'StoreProvider'
