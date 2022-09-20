import style from "/styles/Desktop/Misc/priceIncludeInfoEvent.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import {func} from "prop-types";

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
                            ${Intl.NumberFormat("ES-CL"
                        ).format(Math.round(item.MinPrice))}
                        </>
                        :
                        <>
                            ${Intl.NumberFormat("ES-CL"
                        ).format(Math.round(item.MinPrice))} -
                            ${Intl.NumberFormat("ES-CL"
                        ).format(Math.round(item.MaxPrice))}
                        </>
                }
            </div>
        </div>
    )
    function getCssStyle(){
        return{
            icon: item.IsDarkMode? GlobalConst.sourceImages.ticketIconWhite : GlobalConst.sourceImages.ticketIcon,
            fontPrice: item.IsDarkMode? utilities.fontPriceIncludeDesktopDarkMode : utilities.fontPriceIncludeDesktop
        }
    }
}