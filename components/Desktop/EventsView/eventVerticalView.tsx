import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventVerticalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import Image from "next/image";
import globby from "globby";

const toggle: boolean = false

export default function EventVerticalView({info, darkModeState, dropDown, isHideName}) {
    /*    let [displayName, setDisplayName] = useState(true)
        const handleShowName = () => setDisplayName(displayName = true)
        const handleHiddeName = () => setDisplayName(displayName = false)*/
    let cssStyles = getCssStyles()

    return (
        toggle ?
            <div /*onPointerOver={handleHiddeName}
             onPointerOut={handleShowName}*/
                className={`${styles.principalGridVertical} ${styles.boxShadow}`}>
                <a className="relative">
                    {
                        info.SoldTickets >= info.TotalTickets * 0.90 &&
                        <div className={`${utilities.positionLastTicket} absolute z-20`}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt={""}/>
                        </div>
                    }

                    <div className={`${styles.sizeImage} z-10`}>
                        <Image layout={"fill"} objectFit={"cover"} src={info.CoverImage} alt=""/>
                    </div>

                    {/* <div className={`${utilities.gridMaxContent2} items-center absolute z-60 bottom-0 right-2 gap-1.5 mb-2`}>
                    {
                        info.Rating != null ?
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                    ({info.Rating})
                                </div>
                            </>
                            :
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>*/}
                </a>

                <div className={`${cssStyles.bgInfo} grid px-6 py-2 ${styles.border} content-start`}>
                    {
                        isHideName ?
                            <div
                                className={`${cssStyles.fontName} ${utilities.clamp1}`}>
                                {info.EventName}
                            </div>
                            :
                            <div className={`${cssStyles.fontName} ${utilities.clamp1}`}>
                                {info.EventName}
                            </div>

                    }
                    <div className={`${utilities.fontPrimaryText} mb-0.5`}>
                        On Tour 2022
                    </div>

                    <div className={`${utilities.gridMaxContent2} items-center bottom-0 right-2 gap-1.5 mb-3`}>
                        {
                            info.Rating != null ?
                                <>
                                    <div className={utilities.ratingStarsProperties}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                    </div>
                                    <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                        ({info.Rating})
                                    </div>
                                </>
                                :
                                <>
                                    <div className={utilities.ratingStarsProperties}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                    </div>
                                    <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                        (0)
                                    </div>
                                </>
                        }
                    </div>

                    {/*<div className={`${utilities.fontSecundaryText} mb-3`}>
                    22 de Nov del 2022
                </div>*/}


                    <div className={`${cssStyles.fontPriceInclude}  mb-1`}>
                        {
                            info.TicketPriceMin == info.TicketPriceMax ?
                                <>
                                    ${Intl.NumberFormat("ES-CL"
                                ).format(Math.round(info.TicketPriceMin))}

                                </>
                                :
                                <>
                                    ${Intl.NumberFormat("ES-CL"
                                ).format(Math.round(info.TicketPriceMin))} -
                                    ${Intl.NumberFormat("ES-CL"
                                ).format(Math.round(info.TicketPriceMax))}
                                </>
                        }
                    </div>
                </div>
            </div>
            :
            <div /*onPointerOver={handleHiddeName}
             onPointerOut={handleShowName}*/
                className={`${styles.principalGridVertical} ${styles.boxShadow}`}>
                <a className="relative">
                    {
                        info.SoldTickets >= info.TotalTickets * 0.90 &&
                        <div className={`${utilities.positionLastTicket} absolute z-20`}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt={""}/>
                        </div>
                    }

                    <div className={`${styles.sizeImage} z-10`}>
                        <Image layout={"fill"} objectFit={"cover"} src={info.CoverImage} alt=""/>
                    </div>
                </a>

                <div className={`${cssStyles.bgInfo} grid py-3 px-4 ${styles.border} content-start`}>
                    <div className={"pl-2 pb-2"}>
                        <div
                            className={`${cssStyles.fontName} ${utilities.clamp1}`}>
                            {info.EventName}
                        </div>
                        <div className={`${utilities.fontPrimaryText}`}>
                            On Tour 2022
                        </div>
                        <div className={`${utilities.gridMaxContent2} items-center bottom-0 right-2 gap-1.5`}>
                            {
                                info.Rating != null ?
                                    <>
                                        <div className={utilities.ratingStarsProperties}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                        </div>
                                        <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                            ({info.Rating})
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className={utilities.ratingStarsProperties}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                        </div>
                                        <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                            (0)
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                    <div className={"pl-2 pt-2 border-t border-gray-200"}>
                        <div className={`${styles.gridIconInfo} mb-1`}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                            </div>
                            <div className={`${utilities.fontSecundaryText}`}>
                                22 de Nov del 2022
                            </div>
                        </div>
                        <div className={styles.gridIconInfo}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                            </div>

                        <div className={`${cssStyles.fontPriceInclude} `}>
                            {
                                info.TicketPriceMin == info.TicketPriceMax ?
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(info.TicketPriceMin))}

                                    </>
                                    :
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(info.TicketPriceMin))} -
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(info.TicketPriceMax))}
                                    </>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )

    function getCssStyles() {
        return {
            /*borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,*/
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode : utilities.fontPriceInclude,
            /*displayName: displayName ? styles.displayIn : styles.displayOut*/
        }
    }
}