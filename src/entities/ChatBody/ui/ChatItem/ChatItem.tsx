import { FC, ReactNode, memo } from 'react'
import s from './ChatItem.module.scss'
import cn from 'classnames'
import gpt_icon from '@/shared/assets/gpt_icon.webp'
import user_icon from '@/shared/assets/gigachad.webp'
import { IMessageSchema } from '../../model/schema/chatBodySchema'
import ReactMarkdown from 'react-markdown'

interface IChatItemProps {
    data?: IMessageSchema
    children?: ReactNode
    loader?: boolean
    error?: string
}

export const ChatItem: FC<IChatItemProps> = memo((props) => {
    const { data, loader, error } = props

    const isResponse = data?.answer

    const icon = isResponse || loader || error ? gpt_icon : user_icon
    const chatItemName = isResponse || loader || error ? 'ChatGPT 3.5' : 'You'

    const content = data?.answer ? (
        <ReactMarkdown>{data?.answer}</ReactMarkdown>
    ) : loader ? (
        'Печатает...'
    ) : error ? (
        error
    ) : (
        data?.text
    )

    return (
        <div
            className={cn(
                s.ChatItem,
                { [s.response]: isResponse || loader || error },
                { [s.error]: error }
            )}
        >
            <img
                src={icon}
                loading='lazy'
            />
            <div className={s.messageContent}>
                <p className={s.chatItemName}>{chatItemName}</p>
                <div className={cn(s.message)}>{content}</div>
            </div>
        </div>
    )
})

ChatItem.displayName = 'ChatItem'
