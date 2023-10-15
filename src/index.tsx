import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import { StoreProvider } from './app/providers/StoreProvider/index.ts'
import '@/app/style/index.scss'
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ThemeProvider>
    </React.StrictMode>
)
