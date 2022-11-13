import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/reviewSection.module.css"
import {ReviewItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";
import {LayoutCarrouselMobileProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselMobileCustom from "../../../../Layouts/layoutCarrouselMobileCustom";

const title: string = "Testimonios de nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"

export default function ReviewSectionBHMobile() {
    const review: ReviewItem[] = useContext(ReviewBhContext)
    const propsCarrousel: LayoutCarrouselMobileProp = {
        Top: 36,
        Bottom: 4,
        Left: 4,
        Right: 4,
        Gap: 16
    }
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
            <LayoutCarrouselMobileCustom item={propsCarrousel}>
                <>
                    {
                        review.map(item =>
                            <ReviewViewVerticalMob key={item.Id} item={item}/>
                        )
                    }
                </>
            </LayoutCarrouselMobileCustom>
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}