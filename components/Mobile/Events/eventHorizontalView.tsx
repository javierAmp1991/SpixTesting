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
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";
import DateInfoEventMobile, {DateInfoPropMobile} from "../Misc/dateInfoEventMobile";
import DateInfoEvent from "../../Desktop/Misc/dateInfoEvent";

const totalResaleText = "Total reventas: "

export default function EventHorizontalView({item, darkModeState}:
                                                { item: BaseEventCard, darkModeState: boolean }) {
    let cssStyles = getCssStyles()
    let itemFull: EventCardFull;
    let itemWithPrice: EventCardWithPrice;
    let itemWithDate: EventCardWithDate;
    let itemWithResale: EventCardResale;

    let priceIncludeInfoFull: PriceIncludeInfoPropMobile
    let dateInfoFull: DateInfoPropMobile
    let priceIncludeInfo: PriceIncludeInfoPropMobile;
    let dateInfo: DateInfoPropMobile;

    if (item.Type == EventCardType.EventCardFull) {
        itemFull = item as EventCardFull
        priceIncludeInfoFull = {
            MinPrice: itemFull.MinPrice,
            MaxPrice: itemFull.MaxPrice,
            IsDarkMode: darkModeState
        }
        dateInfoFull = {
            MinDate: itemFull.MinDate,
            MaxDate: itemFull.MaxDate,
            IsDarkMode: darkModeState
        }
    } else if (item.Type == EventCardType.EventCardWithPrice) {
        itemWithPrice = item as EventCardWithPrice
        priceIncludeInfo = {
            MaxPrice: itemWithPrice.MaxPrice,
            MinPrice: itemWithPrice.MinPrice,
            IsDarkMode: darkModeState
        }
    } else if(item.Type == EventCardType.EventCardWithDate){
        itemWithDate = item as EventCardWithDate
        dateInfo = {
            MinDate: itemWithDate.MinDate,
            MaxDate: itemWithDate.MaxDate,
            IsDarkMode: darkModeState
        }

    }else{
        itemWithResale = item as EventCardResale
    }

/*    function getNumber(num: number): string {
        let newNum: string = `${num}`
        if (num >= 0 && num <= 9) {
            newNum = `0${num}`
        }
        return newNum
    }*/

    const principalInfoEventProp: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }

    return (
        <div className={`${style.principalGridHorizontal}`}>
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
                            <DateInfoEventMobile item={dateInfoFull}/>
                            <PriceIncludeInfoEventMobile item={priceIncludeInfoFull}/>
                           {/* <div className={`${style.gridIconInfo}`}>
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
                            </div>*/}
                        </>
                    }

                    {
                        item.Type == EventCardType.EventCardWithDate &&
                        <DateInfoEvent item={dateInfo}/>
                    }

                    {
                        item.Type == EventCardType.EventCardWithPrice &&
                        <PriceIncludeInfoEventMobile item={priceIncludeInfo}/>
                    }

                    {
                        item.Type == EventCardType.EventCardWithResale &&
                        <div className={`${utilities.fontPrimaryText}`}>
                            {totalResaleText} {itemWithResale.TotalResale}
                        </div>
                    }
                </div>
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