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
    EventCardWithDate, EventCardWithOffer,
    EventCardWithPrice
} from "../../../dataDemo/EventView/eventVerticalView";
import Link from "next/link";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";

const totalResaleText = "Total reventas: "

export default function EventVerticalView({item, darkModeState}: { item: BaseEventCard, darkModeState: boolean }) {
    let cssStyles = getCssStyles()

    let itemFull: EventCardFull;
    let itemWithPrice: EventCardWithPrice;
    let itemWithDate: EventCardWithDate;
    let itemWithResale: EventCardResale;
    let itemWithOffer: EventCardWithOffer;

    if (item.Type == EventCardType.EventCardFull) {
        itemFull = item as EventCardFull
    } else if (item.Type == EventCardType.EventCardWithPrice) {
        itemWithPrice = item as EventCardWithPrice
    } else if (item.Type == EventCardType.EventCardWithDate) {
        itemWithDate = item as EventCardWithDate
    } else if (item.Type == EventCardType.EventCardWithOffer){
        itemWithOffer = item as EventCardWithOffer
    }
    else {
        itemWithResale = item as EventCardResale
    }

    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
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
        <div className={`${styles.principalGridVertical}`}>
            <Link href={item.Type == EventCardType.EventCardWithResale ? item.Link : ""}>
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

            <div className={`${cssStyles.bgInfo} ${styles.princiaplGridInfo}`}>
                <div className={styles.TopDivInfo}>
                    <PrincipalInfoEvent item={principalInfoEventProp}/>
                </div>

                <div className={styles.bottomDivSearch}>
                    {
                        item.Type == EventCardType.EventCardWithDate &&
                        <div className={`${styles.gridIconInfo}`}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                            </div>
                            <div className={`${utilities.fontSecundaryText}`}>
                                {itemWithDate.MinDate.getDate()} de {itemWithDate.MinDate.toLocaleString("es-US", {month: "short"})} del {itemWithDate.MinDate.getFullYear()}
                            </div>
                        </div>
                    }

                    {
                        item.Type == EventCardType.EventCardWithPrice &&
                        <div className={`${styles.gridIconInfo}`}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                            </div>
                            {
                                itemWithPrice.MinPrice == itemWithPrice.MaxPrice ?
                                    <div className={utilities.fontPriceIncludeDesktop}>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(itemFull.MinPrice))}
                                    </div>
                                    :
                                    <div className={utilities.fontPriceIncludeDesktop}>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(itemWithPrice.MinPrice))} -
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(itemWithPrice.MaxPrice))}
                                    </div>
                            }
                        </div>
                    }

                    {
                        item.Type == EventCardType.EventCardFull &&
                        <>
                            <div className={`${styles.gridIconInfo}`}>
                                <div className={styles.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                                </div>
                                <div className={`${styles.fontSize}`}>
                                    {itemFull.MinDate.getDate()} de {itemFull.MinDate.toLocaleString("es-US", {month: "short"})} del {itemFull.MinDate.getFullYear()}
                                </div>
                            </div>
                            <div className={`${styles.gridIconInfo}`}>
                                <div className={styles.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                                </div>
                                {
                                    itemFull.MinPrice == itemFull.MaxPrice ?
                                        <div className={utilities.fontPriceIncludeDesktop}>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(itemFull.MinPrice))}
                                        </div>
                                        :
                                        <div className={utilities.fontPriceIncludeDesktop}>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(itemFull.MinPrice))} -
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(itemFull.MaxPrice))}
                                        </div>
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
                            <div className={`${utilities.fontPrimaryText}`}>
                                Productos en oferta: {itemWithOffer.TotalOffers}
                            </div>
                        </>
                    }
                </div>
            </div>

            {/*            <div className={styles.topCircle1}/>
            <div className={styles.topCircle2}/>
            <div className={styles.topCircle3}/>
            <div className={styles.topCircle4}/>
            <div className={styles.topCircle5}/>
            <div className={styles.topCircle6}/>
            <div className={styles.topCircle7}/>
            <div className={styles.topCircle8}/>
            <div className={styles.topCircle9}/>
            <div className={styles.topCircle10}/>
            <div className={styles.topCircle11}/>*/}
            {/*            <div className={styles.bottomCircle}/>
            <div className={styles.topCircle}/>*/}
        </div>
    )

    function getCssStyles() {
        return {
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontTitleDarkMode : utilities.fontTitleDesktop,
            fontSubtitle: darkModeState ? utilities.fontSubtitleDarkMode : utilities.fontSubtitleDesktop,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDesktopDarkMode : utilities.fontSecundaryTextDesktop,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
        }
    }
}