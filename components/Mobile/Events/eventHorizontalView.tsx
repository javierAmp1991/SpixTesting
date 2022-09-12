import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/eventHorizontalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
    BaseVerticalView,
    VerticalViewClass,
    VerticalViewResale,
    VerticalViewSearch
} from "../../../dataDemo/EventView/eventVerticalView";

const totalResaleText = "Total reventas: "

export default function EventHorizontalView({info, darkModeState}:
                                                { info: BaseVerticalView, darkModeState: boolean }) {
    let cssStyles = getCssStyles()
    let newItem: VerticalViewSearch;
    let newItem2: VerticalViewResale;
    if (info.Type == VerticalViewClass.search) {
        newItem = info as VerticalViewSearch
    } else {
        newItem2 = info as VerticalViewResale
    }

    function getNumber(num: number): string {
        let newNum: string = `${num}`
        if (num >= 0 && num <= 9) {
            newNum = `0${num}`
        }
        return newNum
    }

    return (
        <div className={`${style.principalGridHorizontal} ${cssStyles.borderCard}`}>
            <Link href={info.Type == VerticalViewClass.searchResale ? info.Link : ""}>
                <a className={style.containerImage}>
                    {
                        info.SoldTickets >= info.TotalTickets * 0.90 &&
                        <div className={`${utilities.positionLastTicket} ${style.zIndexLastTicket}`}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                    }
                    <div className={`${style.sizeImage}`}>
                        <Image layout={"fill"} objectFit={"cover"} src={info.PathImage} alt=""/>
                    </div>
                </a>
            </Link>

            <div className={`${cssStyles.bgInfo} ${cssStyles.gridInfo}`}>
                <div className={style.TopDivInfo}>
                    <div className={`${cssStyles.fontTitle} ${utilities.clamp2} ${style.titleMargin}`}>
                        {info.Title}
                    </div>
                    <div className={`${utilities.fontPrimary} ${style.subTitleMargin}`}>
                        {info.Subtitle}
                    </div>

                    <div className={style.gridRatingStar}>
                        <div className={utilities.ratingStarsProperties}>
                            <Image layout={"fill"}
                                   src={info.Rating != null ?
                                       GlobalConst.sourceImages.ratingNew : GlobalConst.sourceImages.ratingNull}
                                   alt=""/>
                        </div>
                        <div className={`${cssStyles.fontSecundaryText} ${style.contRating}`}>
                            ({info.Rating != null ? info.Rating : 0})
                        </div>
                    </div>
                </div>

                {
                    info.Type == VerticalViewClass.search &&
                    <div className={style.bottomDivSearch}>
                        <div className={`${style.gridIconInfo}`}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                            </div>
                            <div className={`${utilities.fontSecundaryText}`}>
                                {newItem.MinDate.getDate()} de {newItem.MinDate.toLocaleString("es-US", {month: "short"})} del {newItem.MinDate.getFullYear()}
                            </div>
                        </div>

                        <div className={`${style.gridIconInfo}`}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                            </div>
                            {
                                newItem.MinPrice == newItem.MaxPrice ?
                                    <>
                                        {
                                            getNumber(newItem.MinPrice)
                                        }
                                    </>
                                    :
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(newItem.MinPrice))} -
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(newItem.MaxPrice))}
                                    </>
                            }
                        </div>
                    </div>
                }
                {
                    info.Type == VerticalViewClass.searchResale &&
                    <div className={`${utilities.fontPrimaryText} ${style.bottomDivSearch}`}>
                        {totalResaleText} {newItem2.TotalResale}
                    </div>
                }

                {/*
                <div className={`${cssStyles.fontSecundaryText}`}>
                    {
                        info.MinDate == info.MaxDate ?
                            <>
                                Faltan @((eventLookUp.MinDate - DateTime.Now).Value.ToString("hh")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("mm")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("ss"))
                            </>
                            :
                            <>
                                <div>Desde el {getNumber(info.MinDate.getDay())} de {getNumber(info.MinDate.getMonth())}</div>
                                <div>Desde el {getNumber(info.MaxDate.getDay())} de {getNumber(info.MaxDate.getMonth())}</div>
                            </>
                    }
                </div>

                {
                    info.HasPromotableOffers &&
                        <div>
                            <span className={utilities.styleSpixDiscountTag}>En oferta</span>
                        </div>
                }*/}
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            gridInfo: info.Type == VerticalViewClass.base ? style.gridInfoNormal : style.gridInfo,
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontSecundaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude
        }
    }
}