import { FC } from 'react'
import s from './Header.module.scss'
import { HeaderAvatar } from './HeaderAvatar/HeaderAvatar'

interface IHeaderProps {
    className?: string
}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={s.Header}>
            <HeaderAvatar />
        </div>
    )
}
