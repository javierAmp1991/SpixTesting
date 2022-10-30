import utilities from "/styles/utilities.module.css";
import style from "/styles/Mobile/Misc/principalInfoEvent.module.css";
import Image from "next/image";
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import RatingStarMob from "./ratingStarMob";

export class PrincipalInfoEventPropMob {
    Title: string
    Subtitle: string
    Rating: number
    isDarkMode: boolean
}

export default function PrincipalInfoEventMobile({item}: { item: PrincipalInfoEventPropMob }) {
    let numRating = 4
    let [listRating, setListRating] = useState([true, true, true, true, false])
    const cssStyle = getCssStyle()
    return (
        <>
            <div className={`${utilities.clamp2} ${cssStyle.Title} ${style.titleMargin} `}>
                {item.Title}
            </div>

            {/*<div className={`${cssStyle.Subtitle} ${style.subTitleMargin} ${utilities.clamp1}`}>
                {item.Subtitle}
            </div>*/}

            {
                item.Rating != null &&
                <div className={style.gridRatingStar}>
                    <RatingStarMob item={item.Rating}/>
                </div>
            }


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