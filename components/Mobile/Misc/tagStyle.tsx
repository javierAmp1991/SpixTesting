import style from "/styles/Mobile/Misc/tagStyle.module.css"

export default function TagStyle({text, idLink}) {
    return (
        <a href={`${idLink}`}>
        <span className={style.tagsProperties}>
            {text}
        </span>
        </a>
    )
}