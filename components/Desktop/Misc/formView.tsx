import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Desktop/Misc/formView.module.css"
import {FormLink} from "../../../dataDemo/data";
import Image from "next/image";
import Link from "next/link";

const goToForm: string = "Rellenar el formulario"

export default function FormViewDesktop({item}: { item: FormLink }) {
    return (
        <Link href={item.link}>
            <a className={style.gridForm}>
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
                    <div className={utilities.styleLink}>{goToForm}</div>
                </div>
            </a>
        </Link>
    )
}