import style from "/styles/Mobile/Misc/discountTag.module.css"
export default function DiscountTag({text}){
    return(
        <span className={style.tagsProperties}>
            {text}
        </span>
    )
}