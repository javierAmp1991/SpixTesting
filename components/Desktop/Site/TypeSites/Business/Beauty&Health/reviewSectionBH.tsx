import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ReviewViewVertical from "../../../../Misc/ReviewViewVertical";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {
    LayoutReviewSectionBusiness,
    ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import LayoutReviewSection from "../Misc/layoutReviewSection";

export default function ReviewSectionBH() {
    const review: ProviderReview = useContext(ReviewBhContext)
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
    const layoutReviewProp: LayoutReviewSectionBusiness = {
        Title: "Testimonio de nuestros clientes",
        IsAvailableWriteReview: true
    }
    return (
        <LayoutReviewSection item={layoutReviewProp}>
            <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                {
                    review.InitialReview.map(item =>
                        <ReviewViewVertical key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutReviewSection>
    )
}