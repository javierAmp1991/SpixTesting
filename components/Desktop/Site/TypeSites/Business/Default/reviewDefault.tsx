import ReviewViewShort from "../../../../Misc/ReviewViewShort";
import {ProviderReview} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {ReviewsSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import LayoutTitle from "../Restaurant/layoutTitle";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/layoutReviewSection.module.css"

export default function ReviewDefault() {
    const listReview: ProviderReview = useContext(ReviewsSectionContext)
    return (
        <LayoutTitle title={"Reseñas"}>
            {
                <div className={style.gridReviews}>
                    {
                        listReview.InitialReview.map(item =>
                            <ReviewViewShort key={item.Id} item={item}/>
                        )
                    }
                </div>
            }
        </LayoutTitle>
    )
}