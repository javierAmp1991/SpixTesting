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
    return (
        <div className={style.gridIconInfo}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
            </div>
            <div className={utilities.fontPriceIncludeDesktop}>
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