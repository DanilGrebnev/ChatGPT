import { FC } from 'react'
import s from './ChatInput.module.scss'

interface IChatInputProps {
    className?: string
}

export const ChatInput: FC<IChatInputProps> = () => {
    return (
        <form className={s.ChatInput}>
            <input placeholder='Ask you question' />
        </form>
    )
}
