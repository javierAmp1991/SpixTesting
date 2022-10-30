import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/ratingStarMob.module.css";
const scaleRating: number = 5

export default function RatingStarMob({item}: { item: number }) {
    return (
        <div className={style.gridRatingStar}>
            <div className={style.gridStars}>
                {
                    item == 0 ?
                        [...Array(scaleRating)].map((e, index) =>
                            <div key={index} className={style.sizeStar}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                            </div>
                        )
                        :
                        [...Array(scaleRating)].map((e, index) =>
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