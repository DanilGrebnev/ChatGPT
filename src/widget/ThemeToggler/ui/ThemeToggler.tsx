import { FC, useContext } from 'react'
import s from './ThemeToggler.module.scss'
import sun_icon from '@/shared/assets/sun_icon.svg'
import moon_icon from '@/shared/assets/moon_icon.svg'
import { ThemeContext } from '@/app/providers/ThemeProvider/lib/themeContext'
import cn from 'classnames'
import { useChangeTheme } from '@/app/providers/ThemeProvider'

export const ThemeToggler: FC = () => {
    const { theme } = useContext(ThemeContext)
    const { changeTheme } = useChangeTheme()

    return (
        <div
            onClick={changeTheme}
            className={s.ThemeToggler}
        >
            <div className={cn(s.qube, s[theme!])}>
                <div className={s.iconContainer}>
                    <img src={moon_icon} />
                    <img src={sun_icon} />
                </div>
            </div>
        </div>
    )
}
