import utilities from "/styles/utilities.module.css";
import style from "/styles/Mobile/Misc/principalInfoEvent.module.css";
import Image from "next/image";
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";

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
            <div className={`${utilities.clamp1} ${cssStyle.Title} ${style.titleMargin} `}>
                {item.Title}
            </div>

            <div className={`${cssStyle.Subtitle} ${style.subTitleMargin} ${utilities.clamp1}`}>
                {item.Subtitle}
            </div>

            {
                item.Rating != null &&
                <div className={style.gridRatingStar}>
                    <div className={style.gridStars}>
                        {
                            listRating.map((item, index) =>
                                <div key={index} className={style.sizeStar}>
                                    <Image layout={"fill"}
                                           src={index < numRating ? GlobalConst.sourceImages.ratingIndFull
                                               : GlobalConst.sourceImages.ratingIndVoid}/>
                                </div>
                            )
                        }
                    </div>

                    <div className={style.paddingRating}>
                        <div className={`${cssStyle.RatingText} ${utilities.fontMiniMobile}`}>
                            ({item.Rating != null ? item.Rating : 0})
                        </div>
                    </div>
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