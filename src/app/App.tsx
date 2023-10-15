import { Header } from '@/widget/Header'
import { ChatInput } from '@/entities/ChatInput'
import { ChatBody } from '@/entities/ChatBody'
import '@/app/style/App.scss'

export const App = () => {
    return (
        <main className='App'>
            <div className='App__window'>
                <Header />
                <ChatBody />
                <ChatInput />
            </div>
        </main>
    )
}
