import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TMessageSchema, TRequestSchema } from '../schema/chatBodySchema'

export const fetchChatBodyData = createAsyncThunk<TMessageSchema, TRequestSchema>(
    'chatBody/fetchBodyData',
    async (payload, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            const response = await axios.post('http://localhost:8000/ask', payload)

            return response.data
        } catch (err) {
            return rejectWithValue(JSON.stringify(err))
        }
    }
)
