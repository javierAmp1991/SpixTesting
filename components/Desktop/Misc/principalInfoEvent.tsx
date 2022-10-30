import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/Misc/principalInfoEvent.module.css";
import Image from "next/image";
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import RatingStarDesk from "./ratingStarDesk";

export class PrincipalInfoEventProp {
    Title: string
    Subtitle: string
    Rating: number
    isDarkMode: boolean
}

export default function PrincipalInfoEvent({item}: { item: PrincipalInfoEventProp }) {
    const cssStyle = getCssStyle()
    return (
        <>
            <div className={`${utilities.clamp2} ${style.titleMargin}`}>
                {item.Title}
            </div>

            {
                item.Rating != null &&
                <div className={style.paddingRating}>
                    <RatingStarDesk item={item.Rating}/>
                </div>
            }
        </>
    )

    function getCssStyle() {
        return {
            Title: item.isDarkMode ? utilities.fontTitleDesktopDarkMode : utilities.fontTitleDesktop,
            Subtitle: item.isDarkMode ? utilities.fontSubtitleDesktopDarkMode : utilities.fontSubtitleDesktop,
            RatingImage: item.Rating != null ? GlobalConst.sourceImages.ratingNew : GlobalConst.sourceImages.ratingNull,
            RatingText: item.isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText
        }
    }
}