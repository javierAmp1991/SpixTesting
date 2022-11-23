import style from "/styles/Desktop/Misc/priceIncludeInfoEvent.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";

export class PriceIncludeInfoProp {
    MinPrice: number
    MaxPrice: number
    IsDarkMode: boolean
}

export default function PriceIncludeInfoEvent({item}: { item: PriceIncludeInfoProp }) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.gridIconInfo}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={cssStyle.icon} alt={""}/>
            </div>
            <div className={cssStyle.fontPrice}>
                {
                    item.MinPrice == item.MaxPrice ?
                        <>
                            ${getMoneyValue(item.MinPrice)}
                        </>
                        :
                        <>
                            ${getMoneyValue(item.MinPrice)} - ${getMoneyValue(item.MaxPrice)}
                        </>
                }
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getCssStyle() {
        return {
            icon: item.IsDarkMode ? GlobalConst.sourceImages.ticketIconWhite : GlobalConst.sourceImages.ticketIcon,
            fontPrice: item.IsDarkMode ? utilities.fontPriceIncludeDesktopDarkMode : utilities.fontPriceIncludeDesktop
        }
    }
}