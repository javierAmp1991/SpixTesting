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
    return (
        <div className={style.gridIconInfo}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
            </div>
            <div className={utilities.fontPriceIncludeMobile}>
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
}