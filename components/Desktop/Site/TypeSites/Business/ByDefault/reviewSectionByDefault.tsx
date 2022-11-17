import {useContext} from "react";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {
    LayoutReviewSectionBusiness,
    ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {
    ReviewByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";
import LayoutReviewSection from "../Misc/layoutReviewSection";

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
    const layoutReviewProp: LayoutReviewSectionBusiness = {
        Title: "Reseñas",
        IsAvailableWriteReview: true,
        PaddingBottomHeader: 0
    }

    return (
        <LayoutReviewSection item={layoutReviewProp}>
            <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                {
                    review.InitialReview.map(item =>
                        <ReviewViewShort key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutReviewSection>
    )
}