import { FC } from 'react'
import s from './HeaderAvatar.module.scss'
import icon from '@/shared/assets/gpt_icon.webp'

interface IHeaderAvatarProps {
    className?: string
}

export const HeaderAvatar: FC<IHeaderAvatarProps> = () => {
    return (
        <div className={s.HeaderAvatar}>
            <div className={s.imgWrapper}>
                <img src={icon} />
                <span className={s.statusDot}></span>
            </div>
            <div>
                <p className={s.name}>GPT 3.5</p>
                <p className={s.status}>Online</p>
            </div>
        </div>
    )
}
