import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/reviewSection.module.css"
import {ReviewItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";

const title: string = "Testimonios de nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"

export default function ReviewSectionBHMobile() {
    const review: ReviewItem[] = useContext(ReviewBhContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.gridRating}>
                <div className={style.rating}>
                    {qualificationText} 5/5
                </div>
            </div>
            <LayoutCarrouselMobile gapLayout={16}>
                {
                    review.map(item =>
                        <ReviewViewVerticalMob key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselMobile>
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}