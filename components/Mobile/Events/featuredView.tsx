import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/homeFeatured.module.css"
import Image from "next/image";
import React from "react";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import {GlobalConst} from "../../../public/globalConst";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import DateInfoEventMobile, {DateInfoPropMobile} from "../Misc/dateInfoEventMobile";
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";
import ProductViewMobile from "../Misc/productViewMobile";

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
    let cssStyle = getCssStyles()
    return (
        <div className={style.shadowDivSpace}>
            <div className={style.mainDiv}>
                <div className="relative">
                    <div className={style.bannerFeatureProperties}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"} src={item.PathImage} alt=""/>
                    </div>
                    {/*<div className={style.borderLogo}>
                    <div className={style.logoFeaturePropertiesv2}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathLogo} alt=""/>
                    </div>
                </div>*/}
                </div>

                <div className={style.mainDivInfo}>
                    <div className={style.topDiv}>
                        <PrincipalInfoEventMobile item={principalInfoEvent}/>
                        <div className={style.bottomDivSearch}>
                            <DateInfoEventMobile item={dateInfo}/>
                            <PriceIncludeInfoEventMobile item={priceIncludeInfo}/>
                        </div>
                    </div>
                    {/*<div className={style.mainDivProductsSingle}>
                        {
                            item.ListProducts.map((item, index) =>
                                index == 0 &&
                                <ProductViewMobile isDisplayOffer={false} item={item} size={120}/>
                            )
                        }
                    </div>*/}
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
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
    }
}