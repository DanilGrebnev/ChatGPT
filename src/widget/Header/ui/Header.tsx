import { FC } from 'react'
import s from './Header.module.scss'
import { HeaderAvatar } from './HeaderAvatar/HeaderAvatar'
import { ThemeToggler } from '@/widget/ThemeToggler'

interface IHeaderProps {
    className?: string
}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={s.Header}>
            <HeaderAvatar />
            <ThemeToggler />
        </div>
    )
}
