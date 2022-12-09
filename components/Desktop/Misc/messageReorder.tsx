import style from "/styles/Desktop/Misc/messageReorder.module.css";

export class MessageReorderProps {
    TextBefore: string
    TextAfter: string
}

export default function MessageReorder({item}: { item: MessageReorderProps }) {
    return (
        <div>
            <span className={style.message}>{item.TextBefore} <span className={style.exa}>X</span> {item.TextAfter}</span>
        </div>
    )
}