import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Home/homeFeatured.module.css"
import Image from "next/image";
import React from "react";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import {GlobalConst} from "../../../public/globalConst";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import PriceIncludeInfoEvent, {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";
import DateInfoEvent, {DateInfoProp} from "../Misc/dateInfoEvent";

export default function FeaturedViewDesktop({item, darkModeState, itemsShow}:
                                                { item: BaseFeaturedView, darkModeState: boolean, itemsShow: number}) {
    let cssStyle = getCssStyles()
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }
    const priceIncludeInfo: PriceIncludeInfoProp = {
        MinPrice: item.MinPrice,
        MaxPrice: item.MaxPrice,
        IsDarkMode: false
    }
    const dateInfo: DateInfoProp = {
        MinDate: item.MinDate,
        MaxDate: item.MaxDate,
        IsDarkMode: false,
    }
    return (

        <div className={style.mainDiv}>
            <div className="relative">
                <div className={style.bannerFeatureProperties}>
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"} src={item.PathImage} alt=""/>
                </div>
                <div className={style.borderLogo}>
                    <div className={style.logoFeaturePropertiesv2}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathLogo} alt=""/>
                    </div>
                </div>
            </div>

            <div className={style.mainDivInfo}>
                <div className={style.topDiv}>
                    <PrincipalInfoEvent item={principalInfoEventProp}/>
                    <div className={style.bottomDivSearch}>
                        <DateInfoEvent item={dateInfo}/>
                        <PriceIncludeInfoEvent item={priceIncludeInfo}/>
                    </div>
                </div>
                <div className={style.mainDivProductsSingle}>
                    {
                        item.ListProducts.map((item, index) =>
                            index >= 0 && index <= itemsShow &&
                            <div key={index} className={style.boxShadowPro}>
                                <div className={style.sizeImageProductSingle}>
                                    <div className={style.aspectImage}>
                                        <Image layout={"fill"} src={item.ImagePath} alt=""/>
                                    </div>
                                    <div className={utilities.positionLastTicket}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner}
                                               alt=""/>
                                    </div>
                                </div>

                                <div className={style.gridInfoProduct}>
                                    <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                                        {item.Name}
                                    </div>
                                    <div className={utilities.fontPriceInclude}>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(item.Price))}
                                    </div>
                                </div>
                            </div>
                        )
                    }
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