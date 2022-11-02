import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/ratingStarDesk.module.css";

export default function RatingStarVar({item, size}: { item: number, size: number }) {
    const newArray = Array(5)
    return (
        <div className={style.gridRatingStar}>
            <div className={style.gridStars}>
                {
                    item == 0 ?
                        newArray.map((e, index) =>
                            <Image id={`${index}`} key={index} width={size} height={size}
                                   src={GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                        )
                        :
                        newArray.map((e, index) =>
                            <Image id={`${index}`} key={index} width={size} height={size}
                                   src={(index + 1) <= item ? GlobalConst.sourceImages.ratingIndFull
                                       : GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                        )
                }
            </div>

            <div className={style.fontTextReviews}>
                ({item})
            </div>
        </div>
    )
}