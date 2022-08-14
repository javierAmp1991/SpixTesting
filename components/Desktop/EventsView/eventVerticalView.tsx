import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventVerticalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import Image from "next/image";

export default function EventVerticalView({info, darkModeState, dropDown, isHideName}) {
    let [displayName, setDisplayName] = useState(true)
    const handleShowName = () => setDisplayName(displayName = true)
    const handleHiddeName = () => setDisplayName(displayName = false)
    let cssStyles = getCssStyles()

    return (
        <div onPointerOver={handleHiddeName}
             onPointerOut={handleShowName}
            className={`${styles.principalGridVertical} ${cssStyles.borderCard}`}>
            <a className="relative">
                {
                    info.SoldTickets >= info.TotalTickets * 0.90 ?
                        <Image loading="lazy" className="absolute z-20" src={GlobalConst.sourceImages.lastTicket}/>
                        :
                        ""
                }
                <Image loading="lazy" className={`${styles.sizeImage} z-10`} src={info.CoverImage} alt=""/>
            </a>

            <div className={`${cssStyles.bgInfo} grid p-2 content-start`}>
                {
                    isHideName ?
                        <div className={`${cssStyles.fontName} ${utilities.clamp1} ${cssStyles.displayName} text-center`}>
                            {info.EventName}
                        </div>
                        :
                        <div className={`${cssStyles.fontName} ${utilities.clamp1} text-center`}>
                            {info.EventName}
                        </div>

                }

                <div className={`${utilities.gridMaxContent2} items-center justify-center gap-1.5 mb-2`}>
                    {
                        info.Rating != null ?
                            <>
                                <Image loading="lazy" className={utilities.ratingStarsProperties}
                                     src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    ({info.Rating})
                                </div>
                            </>
                            :
                            <>
                                <Image loading="lazy" className={utilities.ratingStarsProperties}
                                     src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontPriceInclude} text-center mb-1`}>
                    {
                        info.TicketPriceMin == info.TicketPriceMax ?
                            <>
                                ${info.TicketPriceMin}
                            </>
                            :
                            <>
                                ${info.TicketPriceMin} - ${info.TicketPriceMax}
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
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
            displayName: displayName ? styles.displayIn : styles.displayOut
        }
    }
}