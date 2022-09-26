import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Mobile/Misc/formView.module.css"
import {fomrLink} from "../../../dataDemo/data";
import Image from "next/image";

export default function FormViewMobile({item}: { item: fomrLink }) {
    return (
        <div className={style.gridForm}>
            <div className={utilities.gridContentCenter}>
                <div className={style.sizeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.formIcon} alt=""/>
                </div>
            </div>
            <div className={style.gridInfoForm}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp2}`}>
                    {
                        item.text
                    }
                </div>
                <a className={utilities.styleLink}>Rellenar el formulario</a>
            </div>
        </div>
    )
}