import style from "/styles/Desktop/Misc/tagStyle.module.css"

export default function TagStylexl({text, idLink}) {
    return (
        <a href={`${idLink}`}>
        <span className={style.tagsProperties}>
            {text}
        </span>
        </a>
    )
}