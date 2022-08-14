import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/PayPage/gridSelectedItems.module.css"
import ButtonBlueDesk from "../../Desktop/Misc/buttonBlue";

const returntext: string = "Volver"
import {GlobalConst} from "../../../public/globalConst";

const titleSection = "Productos seleccionados"
export default function GridSelectedItemsMobile({children, returndisplay}) {
    return (
        <div className={style.mainCont}>
            <div className={style.gridTitleCar}>
                <div className={`${utilities.fontTitle}`}>
                    {titleSection} ({"6"})
                </div>
            </div>
            <div className={style.grid}>
                {children}
            </div>
            <button onClick={returndisplay} className={style.returnContainer}>
                    <ButtonBlueDesk text={returntext}/>
            </button>
        </div>
    )
}