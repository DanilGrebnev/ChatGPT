import { FC, useState } from 'react'
import s from './ChatInput.module.scss'
import { Button } from '@/shared/components/Button'

interface IChatInputProps {
    className?: string
}

export const ChatInput: FC<IChatInputProps> = () => {
    // const [state, setState] = useState()
    // const resizeTextArea = (e) => {}

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className={s.ChatInput}
        >
            <textarea
                rows={1}
                className={s.inputField}
                placeholder='Ask you question'
            ></textarea>
            <Button />
        </form>
    )
}
