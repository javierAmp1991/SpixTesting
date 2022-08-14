import style from "/styles/Desktop/PayPage/gridSelectedItems.module.css"
import utilities from "/styles/utilities.module.css"
const titleSection: string = "Productos seleccionados"

export default function GridSelectedItems({children}) {
    return (
        <div className={style.mainCont}>
            <div className={`${utilities.fontTitle} ${style.marginBottom}`}>
                {titleSection} ({6})
            </div>

            <div className={style.grid}>
                {children}
            </div>
        </div>
    )
}