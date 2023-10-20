import { FC, TextareaHTMLAttributes, useState, KeyboardEvent } from 'react'
import s from './TextArea.module.scss'
import cn from 'classnames'

type TEvent = KeyboardEvent<HTMLTextAreaElement>

interface ITextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
    className?: string
}

const lineTextAreaAmount = 1

export const TextArea: FC<ITextAreaProps> = (props) => {
    const { className, ...otherProps } = props
    const [lineAmount, setLineAmount] = useState(lineTextAreaAmount)

    const incrementHeight = (e: TEvent) => {
        if (e.shiftKey && e.key === 'Enter') {
            setLineAmount((p) => p + lineTextAreaAmount)
        }
    }

    const decrementHeight = (e: TEvent) => {
        if (lineAmount === 1) return

        if (e.shiftKey && e.key === 'Backspace') {
            setLineAmount((p) => p - lineTextAreaAmount)
        }
    }

    const switchTextAreaLineAmount = (e: TEvent) => {
        incrementHeight(e)
        decrementHeight(e)
    }

    return (
        <textarea
            onKeyDown={switchTextAreaLineAmount}
            className={cn(s.TextArea, className)}
            rows={lineAmount}
            {...otherProps}
        ></textarea>
    )
}
