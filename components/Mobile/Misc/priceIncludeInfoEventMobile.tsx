import style from "/styles/Mobile/Misc/priceIncludeInfoEvent.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";

export class PriceIncludeInfoPropMobile {
    MinPrice: number
    MaxPrice: number
    IsDarkMode: boolean
}

export default function PriceIncludeInfoEventMobile({item}: { item: PriceIncludeInfoPropMobile }) {
    const cssStyle = getCssStyle()

    return (
        <div className={style.gridIconInfo}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={cssStyle.icon} alt={""}/>
            </div>
            <div className={cssStyle.font}>
                {
                    item.MinPrice == item.MaxPrice ?
                        <>
                            ${getMoneyValue(item.MinPrice)}
                        </>
                        :
                        <>
                            ${getMoneyValue(item.MinPrice)} - {getMoneyValue(item.MaxPrice)}
                        </>
                }
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getCssStyle(){
        return{
            font: item.IsDarkMode? utilities.fontPriceIncludeMobileDarkMode : utilities.fontPriceIncludeMobile,
            icon: item.IsDarkMode? GlobalConst.sourceImages.ticketIconWhite : GlobalConst.sourceImages.ticketIcon
        }
    }
}