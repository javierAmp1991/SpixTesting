import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Home/homeFeatureMobile.module.css"
import {EventLookUp} from "../../../dataDemo/data";

export default function HomeFeaturedMobile({item, isDarkMode}:
                                               { item: EventLookUp, isDarkMode: boolean }) {
    let cssStyle = getCssStyles()
    return (
        <div className={`${cssStyle.borderCard} ${style.sizeFeaturedDiv} ${cssStyle.bgInfo}`}>
            <div className="relative">
                <img loading="lazy" className={style.bannerFeatureProperties} src={item.CoverImage}/>
                <img loading="lazy" className={style.logoFeatureProperties} src={item.LogoPath} alt=""/>
            </div>
            <div className="px-2 pb-2 pt-8">
                <div className={`${utilities.clamp2} ${cssStyle.fontName} pb-0.5 text-center`}>
                    {item.EventName}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center justify-center gap-1.5 mb-2`}>
                    {
                        item.Rating != null ?
                            <>
                                <img loading="lazy" className={utilities.ratingStarsProperties}
                                     src="/images/ratingNew.png"/>
                                <div className={`${cssStyle.fontSecundaryText} font12 pt-0.5`}>
                                    ({item.Rating})
                                </div>
                            </>
                            :
                            <>
                                <img loading="lazy" className={utilities.ratingStarsProperties}
                                     src="/images/ratingNull.png"/>
                                <div className={`${cssStyle.fontSecundaryText} font12 pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>
                {
                    item.Tags != null ?
                        <div className={`${utilities.gridMaxContent3} justify-center gap-1 mb-3`}>
                            {
                                item.Tags.map((tag, index) =>
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
                        item.TicketPriceMin == item.TicketPriceMax ?
                            <>
                                ${item.TicketPriceMin}
                            </>
                            :
                            <>
                                ${item.TicketPriceMin} - ${item.TicketPriceMax}
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