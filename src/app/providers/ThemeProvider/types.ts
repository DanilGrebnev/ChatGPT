export enum ThemeTypes {
    LIGHT = 'Light',
    DARK = 'Dark',
}

export const LocalStorageThemeKey = 'THEME' as const

export type TTheme = ThemeTypes.LIGHT | ThemeTypes.DARK

export interface ThemeContextProps {
    theme?: TTheme
    setTheme?: (theme: TTheme) => void
}

export type IUseChangeTheme = () => [TTheme, () => void]

export interface IContext {
    theme: TTheme
}
