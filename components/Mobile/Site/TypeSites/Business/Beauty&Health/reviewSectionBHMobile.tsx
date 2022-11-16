import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ReviewViewVerticalMob from "../../../../Misc/ReviewViewVerticalMob";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import LayoutReviewSectionMobile from "../Restaurant/layoutReviewSectionMobile";

export default function ReviewSectionBHMobile() {
    const review: ProviderReview = useContext(ReviewBhContext)
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
                                <ReviewViewVerticalMob  item={item}/>
                            </div>
                        )
                    }
            </LayoutNavCircleMobileCustom>
        </LayoutReviewSectionMobile>
    )
}