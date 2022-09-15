import utilities from "/styles/utilities.module.css"
import styles from "/styles/Mobile/Events/eventVerticalViewMob.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import Image from "next/image";
import {
    BaseEventCardMobile,
    EventCardTypeMobile,
    EventCardWithDateMobile,
    EventCardWithFullMobile,
    EventCardWithPriceMobile
} from "../../../dataDemo/Mobile/EventView/EventCard";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import DateInfoEventMobile, {DateInfoPropMobile} from "../Misc/dateInfoEventMobile";
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";
import DateInfoEvent from "../../Desktop/Misc/dateInfoEvent";

export default function EventVerticalViewMob({item, darkModeState, isActiveSnap}:
                                                 { item: BaseEventCardMobile, darkModeState: boolean, isActiveSnap: boolean }) {
    let cssStyles = getCssStyles()

    let itemFull: EventCardWithFullMobile;
    let itemWithPrice: EventCardWithPriceMobile;
    let itemWithDate: EventCardWithDateMobile;

    let priceIncludeInfoFull: PriceIncludeInfoPropMobile
    let dateInfoFull: DateInfoPropMobile
    let priceIncludeInfo: PriceIncludeInfoPropMobile;
    let dateInfo: DateInfoPropMobile;

    if (item.Type == EventCardTypeMobile.EventCardFull) {
        itemFull = item as EventCardWithFullMobile
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
    } else if (item.Type == EventCardTypeMobile.EventCardWithPrice) {
        itemWithPrice = item as EventCardWithPriceMobile
        priceIncludeInfo = {
            MaxPrice: itemWithPrice.MaxPrice,
            MinPrice: itemWithPrice.MinPrice,
            IsDarkMode: darkModeState
        }
    } else if (item.Type == EventCardTypeMobile.EventCardWithDate) {
        itemWithDate = item as EventCardWithDateMobile
        dateInfo = {
            MinDate: itemWithDate.MinDate,
            MaxDate: itemWithDate.MaxDate,
            IsDarkMode: darkModeState
        }
    }

    const principalInfoEventProp: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }

    return (
        <div className={`${styles.principalGridVertical} ${cssStyles.isActiveSnapScroll}`}>
            <a className={styles.containerImage}>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 &&
                    <div className={`${utilities.positionLastTicket} ${styles.zIndexLastTicket}`}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt={""}/>
                    </div>
                }
                <div className={styles.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt=""/>
                </div>
            </a>

            <div className={`${cssStyles.bgInfo} ${styles.princiaplGridInfo}`}>
                <div className={styles.TopDivInfo}>
                    <PrincipalInfoEventMobile item={principalInfoEventProp}/>
                </div>

                <div className={styles.bottomDivSearch}>
                    {
                        item.Type == EventCardTypeMobile.EventCardFull &&
                        <>
                            <DateInfoEventMobile item={dateInfoFull}/>
                            <PriceIncludeInfoEventMobile item={priceIncludeInfoFull}/>
                        </>
                    }
                    {
                        item.Type == EventCardTypeMobile.EventCardWithPrice &&
                        <PriceIncludeInfoEventMobile item={priceIncludeInfo}/>
                    }
                    {
                        item.Type == EventCardTypeMobile.EventCardWithDate &&
                        <DateInfoEvent item={dateInfo}/>
                    }

                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            isActiveSnapScroll: isActiveSnap && styles.scrollSnapMobile,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontTitleDarkMode : utilities.fontTitleDesktop,
            fontSubtitle: darkModeState ? utilities.fontSubtitleDarkMode : utilities.fontSubtitleDesktop,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDesktopDarkMode : utilities.fontSecundaryTextDesktop,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
        }
    }
}