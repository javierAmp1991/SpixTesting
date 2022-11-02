import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/ratingStarMob.module.css";
const scaleRating: number = 5

export default function RatingStarMob({item}: { item: number }) {
    const newArray = [1, 2, 3, 4, 5]
    return (
        <div className={style.gridRatingStar}>
            <div className={style.gridStars}>
                {
                    item == 0 ?
                        newArray.map((e, index) =>
                            <div key={index} className={style.sizeStar}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                            </div>
                        )
                        :
                        newArray.map((e, index) =>
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