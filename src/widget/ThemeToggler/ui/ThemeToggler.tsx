import { FC } from 'react'
import s from './SwitchThemeBtn.module.scss'

interface ISwitchThemeBtnProps {
    className?: string
}

export const SwitchThemeBtn: FC<ISwitchThemeBtnProps> = (props) => {
    const { className, children } = props

    return <div className={s.SwitchThemeBtn}></div>
}
