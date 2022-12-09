import style from "/styles/Desktop/Misc/informationBanner.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export default function InformationBanner({children}) {
    return (
        <div className={style.mainCont}>
            <div className={style.mainDiv}>
                <div className={style.contImage}>
                    !
                   {/* <div className={style.image}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon}/>
                    </div>*/}
                </div>
                {children}
            </div>
        </div>
    )
}