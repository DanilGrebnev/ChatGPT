import { FC, memo } from 'react'
import s from './ChatItem.module.scss'
import cn from 'classnames'
import gpt_icon from '@/shared/assets/gpt_icon.webp'
import user_icon from '@/shared/assets/gigachad.webp'

interface IChatItemProps {
    response?: boolean
    content?: string
}

export const ChatItem: FC<IChatItemProps> = memo((props) => {
    const { response } = props

    const icon = response ? gpt_icon : user_icon
    const chatItemName = response ? 'ChatGPT 3.5' : 'You'
    const className = { [s.response]: response }

    return (
        <div className={cn(s.ChatItem, className)}>
            <img
                src={icon}
                loading='lazy'
            />
            <div className={s.messageContent}>
                <p className={s.chatItemName}>{chatItemName}</p>
                <div className={cn(s.message)}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, sint odio
                    veritatis eius aspernatur modi ad eaque, sequi perferendis voluptatum eveniet,
                    at repudiandae nesciunt natus fugit ab hic eligendi ratione? Delectus aut ab
                    autem officiis a molestias atque, modi numquam quis accusantium tempora quaerat
                    fugiat optio magni, ipsum nobis perferendis nisi nulla culpa cum libero ipsam
                    voluptate? Amet, aspernatur deserunt. Optio itaque omnis ipsam nisi repellendus
                    quam voluptatem asperiores laudantium, odit ad a mollitia eos numquam sunt
                    maiores atque? Aut eaque voluptas consequuntur non aliquid velit dicta,
                    voluptatem odio sit? Consectetur amet odio inventore, quae maxime qui
                    perferendis adipisci sunt. Eum dicta cupiditate hic vero veniam illum, vitae
                    quidem odit commodi, quasi error asperiores! Inventore nisi explicabo
                    necessitatibus assumenda hic? Error necessitatibus explicabo sint inventore
                    dolore hic labore exercitationem voluptatum velit eius quasi sapiente deleniti
                    natus dicta, consequatur dolores rerum beatae quod quibusdam. Distinctio quia
                    odit quod sed velit error.
                </div>
            </div>
        </div>
    )
})

ChatItem.displayName = 'ChatItem'
