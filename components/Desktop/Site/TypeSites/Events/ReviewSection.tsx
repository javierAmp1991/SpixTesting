import ReviewViewShort from "../../../Misc/ReviewViewShort";
import {useContext} from "react";
import {ReviewContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {ReviewSection} from "../../../../../Class/Site/TypeSite/Events/events";
import style from "/styles/Desktop/Site/TypeSite/Events/reviewSection.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {PrincipalFeaturedSearch} from "../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import Link from "next/link";

const limitReview: string = "/5"
const reviewtext: string = "Reseñas"
const title: string = "Reseñas"
const limitReviewNumber: number = 5
const widthDiv: number = 120
const starstText: string = "estrellas"
const writeYourReview: string = "Escribe tu reseña"
const newArray = [1, 2, 3, 4, 5]


export default function SectionReview() {
    const review: ReviewSection = useContext(ReviewContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridHeader}>
                <div className={style.gridInfo}>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.calStar}>
                        <div className={style.fontRating}>
                            {review.Rating} {limitReview}
                        </div>
                        <div className={style.gridStars}>
                            {
                                newArray.map((e, index) =>
                                    <div key={index} className={style.sizeStar}>
                                        <Image layout={"fill"}
                                               src={e <= limitReviewNumber ?
                                                   GlobalConst.sourceImages.ratingIndFull : GlobalConst.sourceImages.ratingIndVoid}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className={style.gridBrekdown}>
                        {
                            review.ReviewBreakDown.map((item, index) =>
                                <div key={item} className={style.gridBreakDownAll}>
                                    <div>
                                        {limitReviewNumber - index} {starstText}
                                    </div>
                                    <div style={{width: widthDiv}} className={style.bgGray}>
                                        <div style={{width: getLarge(item)}} className={style.bgBlue}/>
                                    </div>
                                    <div>
                                        {getPercetage(item)}%
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className={style.totalReview}>
                        Total: {review.TotalReview} {reviewtext}
                    </div>
                </div>

               {/* <div className={style.gridBrekdown}>
                    {
                        review.ReviewBreakDown.map((item, index) =>
                            <div key={item} className={style.gridBreakDownAll}>
                                <div>
                                    {limitReviewNumber - index} {starstText}
                                </div>
                                <div style={{width: widthDiv}} className={style.bgGray}>
                                    <div style={{width: getLarge(item)}} className={style.bgBlue}/>
                                </div>
                                <div>
                                    {getPercetage(item)}%
                                </div>
                            </div>
                        )
                    }
                </div>*/}
            </div>

            <div className={style.gridReview}>
                {
                    review.Reviews.map(item =>
                        <ReviewViewShort key={item.Id} item={item}/>
                    )
                }
            </div>

            <Link href={"/writeReview"}>
                <a className={style.wirteReview}>
                    {writeYourReview}
                </a>
            </Link>
        </div>
    )

    function getLarge(num: number): number {
        let large1: number = (num * 100) / review.TotalReview
        return (large1 * widthDiv) / 100
    }

    function getPercetage(num: number): number {
        return Math.round((num * 100) / review.TotalReview)
    }
}