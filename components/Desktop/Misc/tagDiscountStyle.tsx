import style from "/styles/Desktop/Misc/tagDiscountStyle.module.css"
export default function TagDiscountStyle({text}){
    return(
        <span className={style.tagsProperties}>
            {text}
        </span>
    )
}