import style from "/styles/Desktop/Misc/blueButton.module.css"
export default function ButtonBlueDesk({text}){
    return(
        <div className={style.blueButtonProperties}>
            <a>
                {text}
            </a>
        </div>
    )
}