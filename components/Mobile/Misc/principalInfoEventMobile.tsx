import utilities from "/styles/utilities.module.css";
import style from "/styles/Mobile/Misc/principalInfoEvent.module.css";
import Image from "next/image";
import React from "react";
import {GlobalConst} from "../../../public/globalConst";

export class PrincipalInfoEventPropMob {
    Title: string
    Subtitle: string
    Rating: number
    isDarkMode: boolean
}

export default function PrincipalInfoEventMobile({item}: {item: PrincipalInfoEventPropMob }){
    const cssStyle = getCssStyle()
    return (
        <>
            <div className={`${utilities.clamp1} ${cssStyle.Title} ${style.titleMargin} `}>
                {item.Title}
            </div>

            <div className={`${cssStyle.Subtitle} ${style.subTitleMargin} ${utilities.clamp1}`}>
                {item.Subtitle}
            </div>

            <div className={style.gridRatingStar}>
                <div className={utilities.ratingStarsPropertiesMobile}>
                    <Image layout={"fill"}
                           src={cssStyle.RatingImage} alt=""/>
                </div>
                <div className={`${cssStyle.RatingText} ${utilities.font12}`}>
                    ({item.Rating != null ? item.Rating : 0})
                </div>
            </div>
        </>
    )

    function getCssStyle() {
        return {
            Title: item.isDarkMode ? utilities.fontTitleMobileDarkMode : utilities.fontTitleMobile,
            Subtitle: item.isDarkMode ? utilities.fontSubtitleMobileDarkMode : utilities.fontSubtitleMobile,
            RatingImage: item.Rating != null ? GlobalConst.sourceImages.ratingNew : GlobalConst.sourceImages.ratingNull,
            RatingText: item.isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText
        }
    }
}