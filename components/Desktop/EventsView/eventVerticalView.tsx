import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventVerticalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import Image from "next/image";
import {
    BaseVerticalView,
    VerticalViewClass,
    VerticalViewResale,
    VerticalViewSearch
} from "../../../dataDemo/EventView/eventVerticalView";

const totalResaleText = "Total reventas: "

export default function EventVerticalView({item, darkModeState}:
                                              { item: BaseVerticalView, darkModeState: boolean }) {
    /*    let [displayName, setDisplayName] = useState(true)
        const handleShowName = () => setDisplayName(displayName = true)
        const handleHiddeName = () => setDisplayName(displayName = false)*/
    let cssStyles = getCssStyles()
    let newItem: VerticalViewSearch;
    let newItem2: VerticalViewResale;
    if (item.Type == VerticalViewClass.search) {
        newItem = item as VerticalViewSearch
    } else {
        newItem2 = item as VerticalViewResale
    }

    return (
        <div className={`${styles.principalGridVertical}`}>
            <a className={styles.containerImage}>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 &&
                    <div className={`${utilities.positionLastTicket} ${styles.zIndexLastTicket}`}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt={""}/>
                    </div>
                }
                <div className={`${styles.sizeImage} ${styles.zIndexImage}`}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt=""/>
                </div>
            </a>

            <div className={`${cssStyles.bgInfo} ${styles.princiaplGridInfo}`}>
                <div className={styles.TopDivInfo}>
                    <div className={`${cssStyles.fontName} ${utilities.clamp1}`}>
                        {item.Title}
                    </div>

                    <div className={`${utilities.fontPrimaryText} ${styles.subTitleMargin}`}>
                        {item.Subtitle}
                    </div>

                    <div className={styles.gridRatingStar}>
                        <div className={utilities.ratingStarsProperties}>
                            <Image layout={"fill"} src={item.Rating != null ?
                                GlobalConst.sourceImages.ratingNew : GlobalConst.sourceImages.ratingNull} alt=""/>
                        </div>
                        <div className={`${cssStyles.fontSecundaryText} ${styles.contRating}`}>
                            ({item.Rating != null ? item.Rating : 0})
                        </div>
                    </div>
                </div>
                {
                    item.Type == VerticalViewClass.search &&
                    <div className={styles.bottomDivSearch}>
                        <div className={`${styles.gridIconInfo}`}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                            </div>
                            <div className={`${utilities.fontSecundaryText}`}>
                                {newItem.MinDate.getDate()} de {newItem.MinDate.toLocaleString("es-US", {month: "short"})} del {newItem.MinDate.getFullYear()}
                            </div>
                        </div>

                        <div className={`${styles.gridIconInfo}`}>
                            <div className={styles.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                            </div>
                            {
                                newItem.MinPrice == newItem.MaxPrice ?
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(newItem.MinPrice))}
                                    </>
                                    :
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(newItem.MinPrice))} -
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(newItem.MaxPrice))}
                                    </>
                            }
                        </div>
                    </div>
                }
                {
                    item.Type == VerticalViewClass.searchResale &&
                    <div className={`${utilities.fontPrimaryText} ${styles.bottomDivResale}`}>
                        {totalResaleText} {newItem2.TotalResale}
                    </div>
                }
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