import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/ratingStarDesk.module.css";

const scaleRating: number = 5

export default function RatingStarDesk({item}: { item: number }) {
    const newArray = [1, 2, 3, 4, 5]
    return (
        < div
            className={style.gridRatingStar}>
            < div
                className={style.gridStars}>
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
                                       src={e <= item ? GlobalConst.sourceImages.ratingIndFull
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