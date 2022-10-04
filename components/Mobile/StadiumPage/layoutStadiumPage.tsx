import style from "/styles/Mobile/StadiumPage/layoutStadium.module.css"

export default function LayoutStadiumPageMobile({children}) {
    return (
        <div className={style.mainDiv}>
            {children}
        </div>
    )
}