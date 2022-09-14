import style from "/styles/Desktop/Misc/dateInfoEvent.module.css";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import Image from "next/image";

export class DateInfoProp {
    MinDate: Date
    MaxDate: Date
    IsDarkMode: boolean
}

export default function DateInfoEvent({item} : {item: DateInfoProp}){
    return(
        <div className={`${style.gridIconInfo}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
            </div>
            <div className={`${utilities.fontSecundaryTextDesktop}`}>
                {item.MinDate.getDate()} de {item.MinDate.toLocaleString("es-US", {month: "short"})} del {item.MinDate.getFullYear()}
            </div>
        </div>
    )
}