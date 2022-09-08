import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Search/resaleEventViewMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";
import {EventSearch} from "../../../dataDemo/search/searchData";
import Link from "next/link";

export default function ResaleEventviewMobile({item, darkModeState}: { item: EventSearch, darkModeState: boolean }) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${style.principalGridHorizontal} ${cssStyles.borderCard}`}>
            <Link href={"/resaleTicketSearch"}>
                <a className="relative">
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={item.CoverImage} alt=""/>
                    </div>
                </a>
            </Link>

            <div className={`${cssStyles.bgInfo} ${style.gridInfo}`}>
                <div className={`${cssStyles.fontName} ${utilities.clamp2}`}>
                    {item.Title}
                </div>

                <div className={utilities.fontSubTitle}>
                    {item.SubTitle}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center gap-1.5`}>
                    {
                        item.Rating != null ?
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                    ({item.Rating})
                                </div>
                            </>
                            :
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontPrimaryText}`}>
                    Total reventas: {item.TotalResale}
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            fontSecundaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontPrimaryText: darkModeState ? utilities.fontPrimarTextDarkMode : utilities.fontPrimaryText
        }
    }
}