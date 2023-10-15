import { FC, ReactNode, useState } from 'react'
import { ThemeContext } from '../lib/themeContext'
import { LocalStorageThemeKey, TTheme, ThemeTypes } from '../types'

interface IThemeProviderProps {
    children?: ReactNode
}

export const ThemeProvider: FC<IThemeProviderProps> = (props) => {
    const { children } = props

    const themeFromLocalStorage = (localStorage.getItem(LocalStorageThemeKey) ||
        ThemeTypes.LIGHT) as TTheme

    const [theme, setTheme] = useState<TTheme>(themeFromLocalStorage)

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider'
