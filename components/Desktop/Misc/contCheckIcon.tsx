import style from "/styles/Desktop/Misc/contCheckIcon.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ReactNode} from "react";


export default function ContCheckIcon({children, OnClick, isChecked}:
                                          { children: ReactNode, OnClick: Function, isChecked: boolean }) {
    return (
        <div className={style.mainDiv}>
            {children}
            {
                isChecked &&
                <div className={style.checkIcon}>
                    <Image src={GlobalConst.sourceImages.checkIcon}/>
                </div>
            }
        </div>
    )
}