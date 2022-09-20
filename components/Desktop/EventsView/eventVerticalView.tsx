import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventVerticalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import Image from "next/image";
import {
    BaseEventCard,
    EventCardFull,
    EventCardResale,
    EventCardType,
    EventCardWithDate,
    EventCardWithOffer,
    EventCardWithPrice
} from "../../../dataDemo/EventView/eventVerticalView";
import Link from "next/link";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import DateInfoEvent, {DateInfoProp} from "../Misc/dateInfoEvent";
import PriceIncludeInfoEvent, {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";

const totalResaleText = "Total reventas: "

export default function EventVerticalView({item, darkModeState}: { item: BaseEventCard, darkModeState: boolean }) {
    let cssStyles = getCssStyles()

    let itemFull: EventCardFull;
    let itemWithPrice: EventCardWithPrice;
    let itemWithDate: EventCardWithDate;
    let itemWithResale: EventCardResale;
    let itemWithOffer: EventCardWithOffer;

    let priceIncludeInfoFull: PriceIncludeInfoProp;
    let dateInfoFull: DateInfoProp;
    let priceIncludeInfo: PriceIncludeInfoProp;
    let dateInfo: DateInfoProp;

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
    } else if (item.Type == EventCardType.EventCardWithDate) {
        itemWithDate = item as EventCardWithDate
        dateInfo = {
            MinDate: itemWithDate.MinDate,
            MaxDate: itemWithDate.MaxDate,
            IsDarkMode: darkModeState
        }
    } else if (item.Type == EventCardType.EventCardWithOffer) {
        itemWithOffer = item as EventCardWithOffer
    } else {
        itemWithResale = item as EventCardResale
    }

    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: darkModeState,
    }

    /*    const priceIncludeInfo: PriceIncludeInfoProp = {
            MinPrice: itemWithPrice.MinPrice,
            MaxPrice: itemWithPrice.MaxPrice,
            IsDarkMode: false
        }
        const dateInfo: DateInfoProp = {
            MinDate: itemWithDate.MinDate,
            MaxDate: itemWithDate.MaxDate,
            IsDarkMode: false,
        }*/

    return (
        <div className={`${styles.principalGridVertical} ${cssStyles.bgInfo} ${cssStyles.borderCard}`}>
            <Link
                href={item.Type == EventCardType.EventCardWithResale || item.Type == EventCardType.EventCardWithOffer ? item.Link : ""}>
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
            </Link>

            <div className={styles.princiaplGridInfo}>
                <div className={styles.TopDivInfo}>
                    <PrincipalInfoEvent item={principalInfoEventProp}/>
                </div>

                <div className={styles.bottomDivSearch}>
                    {
                        item.Type == EventCardType.EventCardWithDate &&
                        <DateInfoEvent item={dateInfo}/>
                    }

                    {
                        item.Type == EventCardType.EventCardWithPrice &&
                        <PriceIncludeInfoEvent item={priceIncludeInfo}/>
                    }

                    {
                        item.Type == EventCardType.EventCardFull &&
                        <>
                            <DateInfoEvent item={dateInfoFull}/>
                            <PriceIncludeInfoEvent item={priceIncludeInfoFull}/>
                        </>
                    }

                    {
                        item.Type == EventCardType.EventCardWithResale &&
                        <div className={styles.textResaleOffer}>
                            {totalResaleText} {itemWithResale.TotalResale}
                        </div>
                    }

                    {
                        item.Type == EventCardType.EventCardWithOffer &&
                        <>
                            <div className={styles.gridTags}>
                                {
                                    itemWithOffer.ListTagsOffer.map(item =>
                                        <div key={item} className={styles.tagStyleDisc}>
                                            {item}
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.textResaleOffer}>
                                Productos en oferta: {itemWithOffer.TotalOffers}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardDesktopDarkMode : utilities.borderCardDesktop,
            bgInfo: darkModeState ? utilities.bgDarkModeInfoDesktop : utilities.bgNormalInfoDesktop,
        }
    }
}