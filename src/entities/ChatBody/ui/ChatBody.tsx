import { FC } from 'react'
import s from './ChatBody.module.scss'
import { ChatItem } from './ChatItem/ChatItem'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { ChatBodySelectors } from '..'
import { v4 } from 'uuid'

interface IChatBodyProps {
    className?: string
}

export const ChatBody: FC<IChatBodyProps> = () => {
    const messages = useAppSelector(ChatBodySelectors.getMessage)
    const isLoading = useAppSelector(ChatBodySelectors.getIsLoading)
    const isError = useAppSelector(ChatBodySelectors.getError)

    return (
        <main className={s.ChatBody}>
            {messages.map((data) => {
                return (
                    <ChatItem
                        key={v4()}
                        data={data}
                    />
                )
            })}
            {isLoading && <ChatItem loader />}
            {isError && <ChatItem error={isError} />}
        </main>
    )
}
