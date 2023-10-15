import { FC } from 'react'
import s from './ChatBody.module.scss'

interface IChatBodyProps {
    className?: string
}

export const ChatBody: FC<IChatBodyProps> = () => {
    return <main className={s.ChatBody}></main>
}
