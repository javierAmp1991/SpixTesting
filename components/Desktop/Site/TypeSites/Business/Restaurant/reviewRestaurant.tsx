import LayoutReviewSection from "../Misc/layoutReviewSection";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {
    LayoutReviewSectionBusiness,
    ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {ReviewsSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import ReviewViewVertical from "../../../../Misc/ReviewViewVertical";

export default function ReviewRestaurant(){
    const listReview: ProviderReview = useContext(ReviewsSectionContext)
    const layoutPropReview: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 32,
        Grid: 3,
        IsButtonVisible: false,
        LeftArrow: () => listReview.LeftClick(),
        RightArrow: () => listReview.RightClick()
    }
    const layoutReviewProp: LayoutReviewSectionBusiness = {
        Title: "Que opinan nuestros clientes",
        IsAvailableWriteReview: true
    }
    return(
        <LayoutReviewSection item={layoutReviewProp}>
            <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                {
                    listReview.InitialReview.map((item) =>
                        <ReviewViewVertical key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutReviewSection>
    )
}