import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/eventHorizontalView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
export default function EventHorizontalView({info, darkModeState}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${style.principalGridHorizontal} ${cssStyles.borderCard}`}>
            <a className="relative">
                {
                    info.SoldTickets >= info.TotalTickets * 0.90 ?
                        <Image loading="lazy" className="absolute z-20"
                               src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        :
                        ""
                }
                <Image loading="lazy" className={style.sizeImage} src={info.CoverImage} alt=""/>
            </a>

            <div className={`${cssStyles.bgInfo} grid content-start p-2`}>
                <div className={`${cssStyles.fontName} ${utilities.clamp2}`}>
                    {info.EventName}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-2`}>
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

                <div className={`${cssStyles.fontPriceInclude} mb-2`}>
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

                <div className={`${cssStyles.fontSecundaryText} mb-1`}>
                    {
                        info.MinDate == info.MaxDate ?
                            <>
                                {/*Faltan @((eventLookUp.MinDate - DateTime.Now).Value.ToString("hh")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("mm")):
                                    @((eventLookUp.MinDate - DateTime.Now).Value.ToString("ss"))*/}
                            </>
                            :
                            <>
                                <div>Desde el {info.MinDate.getDay()} de {info.MinDate.getMonth()}</div>
                                <div>Desde el {info.MaxDate.getDay()} de {info.MaxDate.getMonth()}</div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontSecundaryText} ${utilities.clamp2} mb-2`}>
                    En {info.InVenues}
                </div>

                {
                    info.HasPromotableOffers ?
                        <div>
                            <span className={utilities.styleSpixDiscountTag}>En oferta</span>
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: darkModeState? utilities.fontNameDarkMode: utilities.fontName,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPriceInclude: darkModeState ? utilities.fontPriceIncludeDarkMode: utilities.fontPriceInclude
        }
    }
}