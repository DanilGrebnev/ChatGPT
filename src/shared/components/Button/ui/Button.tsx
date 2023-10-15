import { FC, ButtonHTMLAttributes } from 'react'
import button_icon from '@/shared/assets/button_icon.svg'
import s from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const Button: FC<IButtonProps> = (props) => {
    const { ...otherProps } = props

    return (
        <button
            {...otherProps}
            className={s.Button}
        >
            <span>Send</span>
            <img
                loading='lazy'
                src={button_icon}
            />
        </button>
    )
}
