import { useCallback, useContext } from 'react'
import { ThemeContext } from './themeContext'
import { LocalStorageThemeKey, ThemeTypes } from '../types'

const setThemeInLocalStorage = (theme: string) => {
    localStorage.setItem(LocalStorageThemeKey, theme)
}

export const useChangeTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = useCallback(() => {
        if (!setTheme) return
        
        if (theme === ThemeTypes.LIGHT) {
            setTheme(ThemeTypes.DARK)
            setThemeInLocalStorage(ThemeTypes.DARK)
            return
        }

        setTheme(ThemeTypes.LIGHT)
        setThemeInLocalStorage(ThemeTypes.LIGHT)
    }, [theme, setTheme])

    return { theme, changeTheme }
}
