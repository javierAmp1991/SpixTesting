import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/resultSugCont.module.css"
import utilities from "/styles/utilities.module.css"

const title: string = "Negocios"
import {BussinesResult} from "./suggHeaderMobile";

export default function ResultBussinesSug({item}: { item: BussinesResult[] }) {
    return (
        <div className={style.mainCont}>
            <div className={style.gridTitleImage}>
                <img className={style.sizeImage} src={GlobalConst.sourceImages.bussinesIcon} alt=""/>
                <div className={utilities.fontSubTitle}>{title}</div>
            </div>
            <div className={style.contResult}>
                {
                    item.map((item1, index) =>
                        <div key={index}>
                            <div className={utilities.fontPrimaryText}>
                                {item1.Name}
                            </div>
                            <div className={utilities.fontSecundaryText}>
                                {item1.AmountEvents} eventos
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
