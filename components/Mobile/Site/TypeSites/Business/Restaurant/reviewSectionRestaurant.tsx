import LayoutReviewSectionMobile from "./layoutReviewSectionMobile";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {ReviewsSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"

export default function ReviewSectionRestaurantMobile() {
    const listReview: ProviderReview = useContext(ReviewsSectionContext)
    const propsCarrousel: LayoutWithNavCircleProp = {
        IsWithBorder: true,
        Top: 36
    }
    return (
        <LayoutReviewSectionMobile>
            <LayoutNavCircleMobileCustom item={propsCarrousel}>
                {
                    listReview.InitialReview.map((item) =>
                        <div key={item.Id} className={style.contLayoutCircle}>
                            <ReviewViewVerticalMob  item={item}/>
                        </div>
                    )
                }
            </LayoutNavCircleMobileCustom>
        </LayoutReviewSectionMobile>
    )
}