import utilities from "../../styles/utilities.module.css";
import style from "/styles/Mobile/Search/resultEventsMobile.module.css"

export default function ResultEventsMobile({children, itemSearch}){
    return(
        <div className={style.paddingContainer}>
            <div className={`${utilities.fontSubTitle} ${style.paddingTitle}`}>
                Resultados de {itemSearch}
            </div>
            <div className={style.gridResult}>
                {children}
            </div>
        </div>
    )
}