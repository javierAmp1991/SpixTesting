import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Desktop/Misc/formViewNew.module.css"
import {FormLink} from "../../../dataDemo/data";
import Image from "next/image";
import Link from "next/link";

const goToForm: string = "Rellenar el formulario"

export default function FormViewDesktopNew({item}: { item: FormLink }) {
    return (
        <Link href={item.link}>
            <a className={style.gridForm}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.formIconALone} alt=""/>
                    </div>
                </div>
                <div className={style.gridInfoForm}>
                    <div className={`${style.text} ${utilities.clamp2}`}>
                        {
                            item.text
                        }
                    </div>
                    <div>{goToForm}</div>
                </div>
            </a>
        </Link>
    )
}