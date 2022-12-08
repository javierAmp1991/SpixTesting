import style from "/styles/Desktop/Misc/numberReorder.module.css"

export default function NumberReorder({item}: { item: number }) {
    return (
        <div className={style.mainDiv}>
            {item}
        </div>
    )
}