import style from "/styles/Mobile/Misc/dateInfoEvent.module.css";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import Image from "next/image";
export class DateInfoPropMobile {
    MinDate: Date
    MaxDate: Date
    IsDarkMode: boolean
}

export default function DateInfoEventMobile({item} : {item: DateInfoPropMobile}){
    return(
        <div className={`${style.gridIconInfo}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
            </div>
            {/*<div className={`${utilities.fontSecundaryTextMobile}`}>*/}
            <div className={style.dateStyle}>
                {item.MinDate.getDate()} de {item.MinDate.toLocaleString("es-US", {month: "short"})} del {item.MinDate.getFullYear()}
            </div>
        </div>
    )
}