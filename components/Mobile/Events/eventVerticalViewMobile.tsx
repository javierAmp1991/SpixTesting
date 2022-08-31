import utilities from "/styles/utilities.module.css"
import styles from "/styles/Mobile/Events/eventVerticalViewMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";

export default function EventVerticalViewMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()

    return (
        <div className={`${styles.principalGridVertical} ${cssStyles.borderCard} ${styles.widthDropDownVertical}`}>
            <a className="relative">
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <div className={`${utilities.positionLastTicket} absolute z-20`}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                        :
                        ""
                }
                <div className={`${styles.sizeImage}`}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.CoverImage} alt=""/>
                </div>
            </a>

            <div className={`${cssStyles.bgInfo} grid p-2`}>
                <div className={`${cssStyles.fontName} ${utilities.clamp2} text-center`}>
                    {item.EventName}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center justify-center gap-1.5 mb-2`}>
                    {
                        item.Rating != null ?
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src="/images/ratingNew.png" alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    ({item.Rating})
                                </div>
                            </>
                            :
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src="/images/ratingNull.png" alt=""/>
                                </div>
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
                                ${Intl.NumberFormat("ES-Cl"
                            ).format(Math.round(item.TicketPriceMin))}

                            </>
                            :
                            <>
                                ${Intl.NumberFormat("ES-Cl"
                            ).format(Math.round(item.TicketPriceMin))} -
                                ${Intl.NumberFormat("ES-Cl"
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
            fontSecundaryText: isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: isDarkMode ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
        }
    }
}