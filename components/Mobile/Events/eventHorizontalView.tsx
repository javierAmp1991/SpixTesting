import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/eventHorizontalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";

export default function EventHorizontalView({info, darkModeState}) {
    let cssStyles = getCssStyles()
    function getNumber(num: number) : string{
        let newNum: string = `${num}`
        if(num >= 0 && num <=9){
            newNum = `0${num}`
        }
        return newNum
    }
    return (
        <div className={`${style.principalGridHorizontal} ${cssStyles.borderCard}`}>
            <a className="relative">
                {
                    info.SoldTickets >= info.TotalTickets * 0.90 &&
                        <div className={`${utilities.positionLastTicket} absolute z-20`}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                }
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={info.CoverImage} alt=""/>
                </div>
            </a>

            <div className={`${cssStyles.bgInfo} ${style.gridInfo}`}>
                <div className={`${cssStyles.fontTitle} ${utilities.clamp2}`}>
                    {info.EventName}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center gap-1.5`}>
                    {
                        info.Rating != null ?
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12}`}>
                                    ({info.Rating})
                                </div>
                            </>
                            :
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12}`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontPriceInclude} pt-1`}>
                    {
                        info.TicketPriceMin == info.TicketPriceMax ?
                            <>
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(info.TicketPriceMin))}

                            </>
                            :
                            <>
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(info.TicketPriceMin))} -
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(info.TicketPriceMax))}
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontSecundaryText}`}>
                    {
                        info.MinDate == info.MaxDate ?
                            <>
                                {/*Faltan @((eventLookUp.MinDate - DateTime.Now).Value.ToString("hh")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("mm")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("ss"))*/}
                            </>
                            :
                            <>
                                <div>Desde el {getNumber(info.MinDate.getDay())} de {getNumber(info.MinDate.getMonth())}</div>
                                <div>Desde el {getNumber(info.MaxDate.getDay())} de {getNumber(info.MaxDate.getMonth())}</div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontSecundaryText} ${utilities.clamp2}`}>
                    En {info.InVenues}
                </div>

                {
                    info.HasPromotableOffers &&
                        <div>
                            <span className={utilities.styleSpixDiscountTag}>En oferta</span>
                        </div>
                }
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontSecundaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude
        }
    }
}