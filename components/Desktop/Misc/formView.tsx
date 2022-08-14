import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Mobile/Misc/formView.module.css"
import {fomrLink} from "../../../dataDemo/data";

export default function FormView({item}: { item: fomrLink }) {
    return (
        <div className={style.gridForm}>
            <div className={utilities.gridContentCenter}>
                <img className={style.sizeIcon} src={GlobalConst.sourceImages.formIcon} alt=""/>
            </div>
            <div className={style.gridInfoForm}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp2}`}>
                    {
                        item.text
                    }
                </div>
                <a className={utilities.styleLink}>Rellenar al formulario</a>
            </div>
        </div>
    )
}