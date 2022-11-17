import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/reviewSection.module.css"
import {useContext} from "react";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {
    ReviewByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";

const title: string = "Testimonios de nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"

export default function ReviewSectionByDefault() {
    const review: ProviderReview = useContext(ReviewByDefaultContext)
    const layoutPropReview: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 48,
        Grid: 3,
        IsButtonVisible: false,
        LeftArrow: review.RightClick,
        RightArrow: review.LeftClick
    }

    return (
        <div>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.gridRating}>
                <div className={style.rating}>
                    {qualificationText} 5/5
                </div>
            </div>
            <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                {
                    review.InitialReview.map(item =>
                        <ReviewViewShort key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}