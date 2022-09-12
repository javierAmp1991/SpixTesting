import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Home/homeFeatured.module.css"
import Image from "next/image";
import React from "react";

export default function HomeFeatured({featuredItem, darkModeState}) {
    let cssStyle = getCssStyles()
    return (

        <div className={`${cssStyle.borderCard} ${cssStyle.bgInfo} ${style.sizeFeaturedDiv}`}>
            <div className="relative">
                <div className={style.bannerFeatureProperties}>
                    <Image layout={"fill"} src={featuredItem.CoverImage}
                           alt=""/>
                </div>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={featuredItem.LogoPath} alt=""/>
                </div>
            </div>
            <div className={style.mainDivInfo}>
                <div className={`${utilities.clamp2} ${cssStyle.fontName} ${style.titleMargin} `}>
                    {featuredItem.EventName}
                </div>

                <div className={`${utilities.fontPrimaryText} ${style.subTitleMargin}`}>
                    {featuredItem.Subtitle}
                </div>

                <div className={style.gridRatingStar}>
                    <div className={utilities.ratingStarsProperties}>
                        <Image layout={"fill"}
                               src={featuredItem.Rating != null ?
                                   "/images/ratingNew.png" : "/images/ratingNull.png"} alt=""/>
                    </div>
                    <div className={`${cssStyle.fontSecundaryText} ${utilities.font12}`}>
                        ({featuredItem.Rating != null ? featuredItem.Rating : 0})
                    </div>
                </div>
                {/*{
                        featuredItem.Tags != null ?
                            <div className={`${utilities.gridMaxContent3} justify-center gap-1 mb-3`}>
                                {
                                    featuredItem.Tags.map((tag, index) =>
                                        <a key={index} className={cssStyle.styleTags}>
                                            {tag}
                                        </a>
                                    )

                                }
                            </div>
                            :
                            <></>
                    }*/}

                <div className={`${cssStyle.fontPriceInclude}`}>
                    {
                        featuredItem.TicketPriceMin == featuredItem.TicketPriceMax ?
                            <>
                                ${Intl.NumberFormat("ES-Cl"
                            ).format(Math.round(featuredItem.TicketPriceMin))}

                            </>
                            :
                            <>
                                ${Intl.NumberFormat("ES-Cl"
                            ).format(Math.round(featuredItem.TicketPriceMin))} -
                                ${Intl.NumberFormat("ES-Cl"
                            ).format(Math.round(featuredItem.TicketPriceMax))}
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
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            fontSubTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
            styleTags: darkModeState ? utilities.styleSpixTagDarkMode : utilities.styleSpixTag
        }
    }
}