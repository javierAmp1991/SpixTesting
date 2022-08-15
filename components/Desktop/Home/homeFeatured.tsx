import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Home/homeFeatured.module.css"
import Image from "next/image";
import Link from "next/link";

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
                <div className="px-2 pb-2 pt-8">
                    <div className={`${utilities.clamp2} ${cssStyle.fontName} pb-0.5 text-center`}>
                        {featuredItem.EventName}
                    </div>

                    <div className={`${utilities.gridMaxContent2} items-center justify-center gap-1.5 mb-2`}>
                        {
                            featuredItem.Rating != null ?
                                <>
                                    <div className={utilities.ratingStarsProperties}>
                                        <Image layout={"fill"}
                                               src="/images/ratingNew.png" alt=""/>
                                    </div>
                                    <div className={`${cssStyle.fontSecundaryText} font12 pt-0.5`}>
                                        ({featuredItem.Rating})
                                    </div>
                                </>
                                :
                                <>
                                    <Image loading="lazy" className={utilities.ratingStarsProperties}
                                           src="/images/ratingNull.png" alt=""/>
                                    <div className={`${cssStyle.fontSecundaryText} font12 pt-0.5`}>
                                        (0)
                                    </div>
                                </>
                        }
                    </div>
                    {
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
                    }

                    <div className={`${cssStyle.fontPriceInclude} mb-1 text-center`}>
                        {
                            featuredItem.TicketPriceMin == featuredItem.TicketPriceMax ?
                                <>
                                    ${featuredItem.TicketPriceMin}
                                </>
                                :
                                <>
                                    ${featuredItem.TicketPriceMin} - ${featuredItem.TicketPriceMax}
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