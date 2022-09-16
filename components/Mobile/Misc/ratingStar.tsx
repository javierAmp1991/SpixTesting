import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/ratingStar.module.css";
import utilities from "/styles/utilities.module.css";
import React, {useState} from "react";

export default function RatingStar({item} : {item: number}){
    let numRating = 5
    let [listRating, setListRating] = useState([true, true, true, true, false])
    return(
        <div className={style.gridRatingStar}>
            <div className={style.gridStars}>
                {
                    listRating.map((item, index) =>
                        <div key={index} className={style.sizeStar}>
                            <Image layout={"fill"}
                                   src={index < numRating ? GlobalConst.sourceImages.ratingIndFull
                                       : GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                        </div>
                    )
                }
            </div>

            <div className={style.paddingRating}>
                <div className={`${utilities.fontSecundaryText} ${utilities.fontMiniMobile}`}>
                    ({item})
                </div>
            </div>
        </div>
    )
}