import style from "/styles/Mobile/Misc/buttonBLue.module.css"
export default function ButtonBlue({text}){
    return(
        <div className={style.blueButtonProperties}>
            <a>
                {text}
            </a>
        </div>
    )
}