import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Home/homeFeatureMobile.module.css"
import {EventLookUp} from "../../../dataDemo/data";
import Image from "next/image";
import React from "react";

export default function HomeFeaturedMobile({item, isDarkMode}:
                                               { item: EventLookUp, isDarkMode: boolean }) {
    let cssStyle = getCssStyles()
    return (
        <div className={`${cssStyle.borderCard} ${style.sizeFeaturedDiv} ${cssStyle.bgInfo}`}>
            <div className="relative">
                <div className={style.bannerFeatureProperties}>
                    <Image layout={"fill"} src={item.CoverImage} alt=""/>
                </div>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={item.LogoPath} alt=""/>
                </div>
            </div>
            <div className={style.paddingMainCont}>
                <div className={`${utilities.clamp2} ${cssStyle.fontName} pb-0.5`}>
                    {item.EventName}
                </div>
                <div className={utilities.fontPrimaryText}>
                    {item.Subtitle}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-2`}>
                    <div className={utilities.ratingStarsProperties}>
                        <Image layout={"fill"}
                               src={item.Rating != null ? "/images/ratingNew.png" : "/images/ratingNull.png"} alt=""/>
                    </div>
                    <div className={`${cssStyle.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                        ({item.Rating != null ? item.Rating : 0})
                    </div>
                </div>

                <div className={`${cssStyle.fontPriceInclude}`}>
                    {
                        item.TicketPriceMin == item.TicketPriceMax ?
                            <>
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(item.TicketPriceMin))}
                            </>
                            :
                            <>
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(item.TicketPriceMin))} -
                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(item.TicketPriceMax))}
                            </>
                    }
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: isDarkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: isDarkMode ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontSecundaryText: isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: isDarkMode ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
            styleTags: isDarkMode ? utilities.styleSpixTagDarkMode : utilities.styleSpixTag
        }
    }
}