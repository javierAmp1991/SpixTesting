import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/eventHorizontalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
    BaseEventCard,
    EventCardFull,
    EventCardResale,
    EventCardType,
    EventCardWithDate,
    EventCardWithPrice
} from "../../../dataDemo/EventView/eventVerticalView";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";

const totalResaleText = "Total reventas: "

export default function EventHorizontalView({item, darkModeState}:
                                                { item: BaseEventCard, darkModeState: boolean }) {
    let cssStyles = getCssStyles()
    let itemFull: EventCardFull;
    let itemWithPrice: EventCardWithPrice;
    let itemWithDate: EventCardWithDate;
    let itemWithResale: EventCardResale;

    if (item.Type == EventCardType.EventCardFull) {
        itemFull = item as EventCardFull
    } else if (item.Type == EventCardType.EventCardWithPrice) {
        itemWithPrice = item as EventCardWithPrice
    } else if(item.Type == EventCardType.EventCardWithDate){
        itemWithDate = item as EventCardWithDate
    }else{
        itemWithResale = item as EventCardResale
    }

    function getNumber(num: number): string {
        let newNum: string = `${num}`
        if (num >= 0 && num <= 9) {
            newNum = `0${num}`
        }
        return newNum
    }

    const principalInfoEventProp: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }

    return (
        <div className={`${style.principalGridHorizontal} ${cssStyles.borderCard}`}>
            <Link href={item.Type == EventCardType.EventCardWithResale ? item.Link : ""}>
                <a className={style.containerImage}>
                    {
                        item.SoldTickets >= item.TotalTickets * 0.90 &&
                        <div className={`${utilities.positionLastTicket} ${style.zIndexLastTicket}`}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                    }
                    <div className={`${style.sizeImage}`}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt=""/>
                    </div>
                </a>
            </Link>

            <div className={`${cssStyles.bgInfo} ${style.gridInfo}`}>
                <div className={style.TopDivInfo}>
                    <PrincipalInfoEventMobile item={principalInfoEventProp}/>
                </div>
                <div className={style.bottomDivSearch}>
                    {
                        item.Type == EventCardType.EventCardFull &&
                        <>
                            <div className={`${style.gridIconInfo}`}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                                </div>
                                <div className={`${utilities.fontSecundaryText}`}>
                                    {itemFull.MinDate.getDate()} de {itemFull.MinDate.toLocaleString("es-US", {month: "short"})} del {itemFull.MinDate.getFullYear()}
                                </div>
                            </div>

                            <div className={`${style.gridIconInfo}`}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                                </div>
                                {
                                    itemFull.MinPrice ==itemFull.MaxPrice ?
                                        <>
                                            {
                                                getNumber(itemFull.MinPrice)
                                            }
                                        </>
                                        :
                                        <>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(itemFull.MinPrice))} -
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(itemFull.MaxPrice))}
                                        </>
                                }
                            </div>
                        </>
                    }

                    {
                        item.Type == EventCardType.EventCardWithResale &&
                        <div className={`${utilities.fontPrimaryText}`}>
                            {totalResaleText} {itemWithResale.TotalResale}
                        </div>
                    }
                </div>


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

            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontSecundaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude
        }
    }
}