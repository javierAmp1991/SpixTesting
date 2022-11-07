import LayoutReviewSection from "./layoutReviewSection";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
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
        Gap: 16,
        Grid: 4,
        IsButtonVisible: false,
        LeftArrow: () => listReview.LeftClick(),
        RightArrow: () => listReview.RightClick()
    }
    return(
        <LayoutReviewSection>
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