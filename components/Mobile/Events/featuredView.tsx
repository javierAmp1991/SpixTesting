import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Events/homeFeatured.module.css"
import Image from "next/image";
import React from "react";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import {GlobalConst} from "../../../public/globalConst";

export default function FeaturedViewMobile({item, darkModeState}: { item: BaseFeaturedView, darkModeState: boolean }) {
    let cssStyle = getCssStyles()
    return (

        <div className={`${cssStyle.borderCard} ${cssStyle.bgInfo} ${style.sizeFeaturedDiv}`}>
            <div className="relative">
                <div className={style.bannerFeatureProperties}>
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"} src={item.PathImage} alt=""/>
                </div>
                <div className={style.borderLogo}>
                    <div className={style.logoFeaturePropertiesv2}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathLogo} alt=""/>
                    </div>
                </div>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.topDiv}>
                    <div className={`${utilities.clamp1} ${cssStyle.fontName} ${style.titleMargin} `}>
                        {item.Title}
                    </div>

                    <div className={`${utilities.fontPrimaryText} ${style.subTitleMargin} ${utilities.clamp1}`}>
                        {item.Subtitle}
                    </div>

                    <div className={style.gridRatingStar}>
                        <div className={utilities.ratingStarsProperties}>
                            <Image layout={"fill"}
                                   src={item.Rating != null ?
                                       "/images/ratingNew.png" : "/images/ratingNull.png"} alt=""/>
                        </div>
                        <div className={`${cssStyle.fontSecundaryText} ${utilities.font12}`}>
                            ({item.Rating != null ? item.Rating : 0})
                        </div>
                    </div>
                </div>

                <div className={style.borderDiv}>
                    <div className={style.bottomDivSearch}>
                        <div className={`${style.gridIconInfo}`}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                            </div>
                            <div className={`${utilities.fontSecundaryText}`}>
                                {item.MinDate.getDate()} de {item.MinDate.toLocaleString("es-US", {month: "short"})} del {item.MinDate.getFullYear()}
                            </div>
                        </div>
                        <div className={`${style.gridIconInfo}`}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                            </div>
                            {
                                item.MinPrice == item.MaxPrice ?
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(item.MinPrice))}
                                    </>
                                    :
                                    <>
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(item.MinPrice))} -
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round(item.MaxPrice))}
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