import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {useContext} from "react";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import LayoutReviewSectionMobile from "../Restaurant/layoutReviewSectionMobile";
import {
    ReviewByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function ReviewSectionByDefaultMobile() {
    const review: ProviderReview = useContext(ReviewByDefaultContext)
    const propsCarrousel: LayoutWithNavCircleProp = {
        Top: 36,
        IsWithBorder: true
    }
    return (
        <LayoutReviewSectionMobile>
            <LayoutNavCircleMobileCustom item={propsCarrousel}>
                {
                    review.InitialReview.map(item =>
                        <div key={item.Id} className={style.contLayoutCircle}>
                            <ReviewViewVerticalMob item={item}/>
                        </div>
                    )
                }
            </LayoutNavCircleMobileCustom>
        </LayoutReviewSectionMobile>
    )
}