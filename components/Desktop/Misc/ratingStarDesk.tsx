import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/ratingStarDesk.module.css";
import utilities from "/styles/utilities.module.css";

export default function RatingStarDesk({item}: { item: number }) {
    return (
        <div className={style.gridRatingStar}>
            <div className={style.gridStars}>
                {
                    [...Array(5)].map((e, index) =>
                        <div key={index} className={style.sizeStar}>
                            <Image layout={"fill"}
                                   src={(index + 1) <= item ? GlobalConst.sourceImages.ratingIndFull
                                       : GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                        </div>
                    )
                }
            </div>

            <div className={style.fontTextReviews}>
                ({item})
            </div>
        </div>
    )
}