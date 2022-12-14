import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/eventHorizontalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
    BaseEventCard,
    EventCardFull,
    EventCArdMyCollection,
    EventCardResale,
    EventCardType,
    EventCardWishList,
    EventCardWithDate,
    EventCardWithOffer,
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
    let itemWithOffer: EventCardWithOffer;
    let itemMyCollection: EventCArdMyCollection
    let itemWishList: EventCardWishList

    let priceIncludeInfoFull: PriceIncludeInfoPropMobile
    let dateInfoFull: DateInfoPropMobile
    let priceIncludeInfo: PriceIncludeInfoPropMobile;
    let dateInfo: DateInfoPropMobile;
    let priceIncludeWishList: PriceIncludeInfoPropMobile
    let priceIncludeMyCollection: PriceIncludeInfoPropMobile

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
    } else if (item.Type == EventCardType.EventCardMyCollection) {
        itemMyCollection = item as EventCArdMyCollection
        priceIncludeMyCollection = {
            MinPrice: itemMyCollection.MinPrice,
            MaxPrice: itemMyCollection.MaxPrice,
            IsDarkMode: false
        }
    } else if (item.Type == EventCardType.EventCardWishList) {
        itemWishList = item as EventCardWishList
        priceIncludeWishList = {
            MinPrice: itemWishList.MinPrice,
            MaxPrice: itemWishList.MaxPrice,
            IsDarkMode: false
        }
    } else {
        itemWithResale = item as EventCardResale
    }

    const principalInfoEventProp: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }

    return (
        <div className={`${style.principalGridHorizontal}`}>
            <Link
                href={item.Type == EventCardType.EventCardWithResale || item.Type == EventCardType.EventCardWithOffer ? item.Link : ""}>
                <a className={style.containerImage}>
                    {
                        item.Type == EventCardType.EventCardWishList &&
                        <div className={style.positionWishList}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.wishList} alt={""}/>
                        </div>
                    }
                    {
                        item.Type == EventCardType.EventCardMyCollection &&
                        <div className={style.positionMedal}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.medal} alt={""}/>
                        </div>
                    }
                    {
                        item.Type != EventCardType.EventCardMyCollection && item.Type != EventCardType.EventCardWishList &&
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
                    {
                        item.Type == EventCardType.EventCardFull &&
                        <>
                            <DateInfoEventMobile item={dateInfoFull}/>
                            <PriceIncludeInfoEventMobile item={priceIncludeInfoFull}/>
                        </>
                    }

                    {
                        item.Type == EventCardType.EventCardWithDate &&
                        <DateInfoEvent item={dateInfo}/>
                    }

                    {
                        item.Type == EventCardType.EventCardWishList &&
                        <PriceIncludeInfoEventMobile item={priceIncludeWishList}/>
                    }

                    {
                        item.Type == EventCardType.EventCardMyCollection &&
                        <PriceIncludeInfoEventMobile item={priceIncludeMyCollection}/>
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
                    {
                        item.Type == EventCardType.EventCardWithOffer &&
                        <>
                            <div className={style.gridTags}>
                                {
                                    itemWithOffer.ListTagsOffer.map(item =>
                                        <div key={item} className={style.tagStyleDisc}>
                                            {item}
                                        </div>
                                    )
                                }
                            </div>
                            <div className={style.textResaleOffer}>
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

            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontSecundaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude
        }
    }
}