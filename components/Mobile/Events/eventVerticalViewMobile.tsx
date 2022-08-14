import utilities from "/styles/utilities.module.css"
import styles from "/styles/Mobile/Events/eventVerticalViewMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";

let isLargeUp: boolean = true;

export default function EventVerticalViewMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()

    return (
        <div className={`${styles.principalGridVertical} ${cssStyles.borderCard} ${styles.widthDropDownVertical}`}>
            <a className="relative">
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <img loading="lazy" className="absolute z-20" src={GlobalConst.sourceImages.lastTicket}/>
                        :
                        ""
                }
                <img loading="lazy" className={`${styles.sizeImage}`} src={item.CoverImage} alt=""/>
            </a>

            <div className={`${cssStyles.bgInfo} grid p-2`}>
                <div className={`${cssStyles.fontName} ${utilities.clamp2} text-center`}>
                    {item.EventName}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center justify-center gap-1.5 mb-2`}>
                    {
                        item.Rating != null ?
                            <>
                                <img loading="lazy" className={utilities.ratingStarsProperties}
                                     src="/images/ratingNew.png"/>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    ({item.Rating})
                                </div>
                            </>
                            :
                            <>
                                <img loading="lazy" className={utilities.ratingStarsProperties}
                                     src="/images/ratingNull.png"/>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontPriceInclude} text-center mb-1`}>
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
            fontName: isDarkMode? utilities.fontNameDarkMode: utilities.fontName,
            fontSecundaryText: isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: isDarkMode ? utilities.fontPriceIncludeDarkMode: utilities.fontPriceInclude,
        }
    }
}