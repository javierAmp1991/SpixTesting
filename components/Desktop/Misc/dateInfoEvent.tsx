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

export default function DateInfoEvent({item}: { item: DateInfoProp }) {
    const cssStyle = getCssStyle()

    return (
        <div className={`${style.gridIconInfo}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={cssStyle.icon} alt={""}/>
            </div>
            <div className={cssStyle.font}>
                {item.MinDate.getDate()} de {item.MinDate.toLocaleString("es-US", {month: "short"})} del {item.MinDate.getFullYear()}
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            icon: item.IsDarkMode ? GlobalConst.sourceImages.calendarIconWhite : GlobalConst.sourceImages.calendarIcon,
            font: item.IsDarkMode ? style.fontSizeDarkMode : style.fontSize
        }
    }
}