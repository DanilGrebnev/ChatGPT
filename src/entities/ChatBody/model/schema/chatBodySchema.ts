export interface IChatBodySchema {
    messages: IMessageSchema[]
    isLoading: boolean
    error: string
}

export interface IMessageSchema {
    answer?: string
    text?: string
}

export type TResponseSchema = { answer: string }
export type TRequestSchema = { text: string }
