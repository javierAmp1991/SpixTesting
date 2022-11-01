import style from "/styles/Desktop/Layouts/newLayoutSideCard.module.css"

export default function NewLayoutSideCard({children}) {
    return (
        <div className={style.mainDiv}>
            {children}
        </div>
    )
}