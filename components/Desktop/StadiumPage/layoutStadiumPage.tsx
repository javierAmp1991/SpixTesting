import style from "/styles/Desktop/StadiumPage/layoutStadium.module.css"

export default function LayoutStadiumPage({children} : {children: JSX.Element}) {
    return (
        <div className={style.mainLayout}>
            {children}
        </div>
    )
}