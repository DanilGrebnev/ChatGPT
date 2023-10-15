import { FC } from 'react'
import s from './ChatBody.module.scss'
import { ChatItem } from './ChatItem/ChatItem'

interface IChatBodyProps {
    className?: string
}

export const ChatBody: FC<IChatBodyProps> = () => {
    return (
        <main className={s.ChatBody}>
            <ChatItem />
            <ChatItem response />
            <ChatItem response />
            <ChatItem response />
            {/* <ChatItem response /> */}
        </main>
    )
}
