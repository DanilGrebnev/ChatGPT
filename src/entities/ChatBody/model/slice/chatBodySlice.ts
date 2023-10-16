import { IChatBodySchema, TRequestSchema } from './../schema/chatBodySchema'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchChatBodyData } from '../services/fetchChatBodyData'

const initialState: IChatBodySchema = {
    messages: [
        { text: 'Привет, напиши что-нибудь на markdown языке' },
        {
            answer: 'Конечно! Вот пример разметки для создания списка:\n\n```\n- Пункт 1\n- Пункт 2\n- Пункт 3\n```\n\nРезультат будет выглядеть так:\n\n- Пункт 1\n- Пункт 2\n- Пункт 3\n\nВы также можете создать нумерованный список, используя числа или точки:\n\n```\n1. Пункт 1\n2. Пункт 2\n3. Пункт 3\n```\n\nРезультат будет выглядеть так:\n\n1. Пункт 1\n2. Пункт 2\n3. Пункт 3\n\nНадеюсь, это поможет!',
        },
    ],
    isLoading: false,
    error: '',
}

const chatBodySlice = createSlice({
    name: 'chatBody',
    initialState,
    reducers: {
        setRequestMessage(state, action: PayloadAction<TRequestSchema>) {
            state.messages.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatBodyData.fulfilled, (state, action) => {
                state.isLoading = false
                state.messages.push(action.payload)
            })
            .addCase(fetchChatBodyData.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchChatBodyData.rejected, (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            })
    },
})

export const { actions: chatBodyActions, reducer: chatBodyReducers } = chatBodySlice
