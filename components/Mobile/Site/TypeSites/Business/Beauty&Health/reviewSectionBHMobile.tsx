import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/reviewSection.module.css"
import {ReviewItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";
import {LayoutCarrouselMobileProp, LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselMobileCustom from "../../../../Layouts/layoutCarrouselMobileCustom";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";

const title: string = "Testimonios de nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"

export default function ReviewSectionBHMobile() {
    const review: ReviewItem[] = useContext(ReviewBhContext)
    const propsCarrousel: LayoutWithNavCircleProp = {
        Top: 32,
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
            <LayoutNavCircleMobileCustom item={propsCarrousel}>
                    {
                        review.map(item =>
                            <div key={item.Id} className={style.contCarrousel}>
                                <ReviewViewVerticalMob  item={item}/>
                            </div>
                        )
                    }
            </LayoutNavCircleMobileCustom>
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}