import { IStateSchema } from '@/app/providers/StoreProvider/config/reducerSchema'

export class ChatBodySelectors {
    static getMessage(state: IStateSchema) {
        return state.chatBody.messages
    }

    static getError(state: IStateSchema) {
        return state.chatBody.error
    }

    static getIsLoading(state: IStateSchema) {
        return state.chatBody.isLoading
    }
}
