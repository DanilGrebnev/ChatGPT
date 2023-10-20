import { FC, useState, useCallback, ChangeEvent } from 'react'
import s from './ChatInput.module.scss'
import { Button } from '@/shared/components/Button'
import { fetchChatBodyData } from '@/entities/ChatBody/model/services/fetchChatBodyData'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { chatBodyActions } from '@/entities/ChatBody'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { ChatBodySelectors } from '@/entities/ChatBody'
import { TextArea } from '@/shared/components/TextArea'

interface IChatInputProps {
    className?: string
}

export const ChatInput: FC<IChatInputProps> = () => {
    const [state, setState] = useState<string>('')
    const isLoading = useAppSelector(ChatBodySelectors.getIsLoading)

    const dispatch = useAppDispatch()

    const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.target.value)
    }, [])

    const fetchData = useCallback(async () => {
        const data = { text: state }
        dispatch(fetchChatBodyData(data))
        dispatch(chatBodyActions.setRequestMessage(data))
        setState('')
    }, [dispatch, state])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className={s.ChatInput}
        >
            <TextArea
                value={state}
                onChange={onChange}
                className={s.inputField}
                placeholder="Ask you question"
            ></TextArea>
            <Button
                disabled={isLoading}
                onClick={fetchData}
            />
        </form>
    )
}
