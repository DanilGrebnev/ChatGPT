import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import { StoreProvider } from './app/providers/StoreProvider/index.ts'
import '@/app/style/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
)
