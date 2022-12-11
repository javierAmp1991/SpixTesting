import style from "/styles/Desktop/Misc/informationBanner.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ReactNode} from "react";

const defaultWidth: string = `100%`

export default function InformationBanner({children, width}:
                                              { children: ReactNode, width?: string }) {
    return (
        <div className={style.mainDiv}
             style={{width: width == null ? defaultWidth : width}}>
            <div className={style.gridIconTitle}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.exclamationInfoBanner}/>
                </div>
                <div className={style.title}>Informacion</div>
            </div>
            {children}
        </div>
    )
}