import style from "/styles/Mobile/Events/homeFeatured.module.css"
import Image from "next/image";
import React from "react";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import DateInfoEventMobile, {DateInfoPropMobile} from "../Misc/dateInfoEventMobile";
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";
import ProductViewSquareMobile from "../Misc/productViewSquare";

export default function FeaturedViewMobile({item, darkModeState}: { item: BaseFeaturedView, darkModeState: boolean }) {
    const principalInfoEvent: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: darkModeState
    }
    const priceIncludeInfo: PriceIncludeInfoPropMobile = {
        MinPrice: item.MinPrice,
        MaxPrice: item.MaxPrice,
        IsDarkMode: false
    }
    const dateInfo: DateInfoPropMobile = {
        MinDate: item.MinDate,
        MaxDate: item.MaxDate,
        IsDarkMode: false,
    }
    return (
        <div className={style.shadowDivSpace}>
            <div className={style.mainDiv}>
                <div className="relative">
                    <div className={style.bannerFeatureProperties}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"} src={item.PathImage} alt=""/>
                    </div>
                </div>

                <div className={style.mainDivInfo}>
                    <div className={style.bottomDivSearch}>
                        <PrincipalInfoEventMobile item={principalInfoEvent}/>
                        <DateInfoEventMobile item={dateInfo}/>
                        <PriceIncludeInfoEventMobile item={priceIncludeInfo}/>
                    </div>
                    <div className={style.mainDivProductsSingle}>
                        {
                            item.ListProducts.map((item, index) =>
                                index == 0 &&
                                <ProductViewSquareMobile isDisplayOffer={false} item={item} size={140}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    /*function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            fontSubTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
            styleTags: darkModeState ? utilities.styleSpixTagDarkMode : utilities.styleSpixTag
        }
    }*/
}