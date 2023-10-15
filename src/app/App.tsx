import { useContext } from 'react'
import cn from 'classnames'
import { Header } from '@/widget/Header'
import { ChatInput } from '@/entities/ChatInput'
import { ChatBody } from '@/entities/ChatBody'
import '@/app/style/App.scss'
import { ThemeContext } from './providers/ThemeProvider/lib/themeContext'

export const App = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <main className={cn('App', theme)}>
            <div className='App__window'>
                <Header />
                <ChatBody />
                <ChatInput />
            </div>
        </main>
    )
}
