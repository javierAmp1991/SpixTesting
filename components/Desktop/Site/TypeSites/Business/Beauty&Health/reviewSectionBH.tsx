import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/reviewSection.module.css"
import {ReviewItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {ReviewBhContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ReviewViewVertical from "../../../../Misc/ReviewViewVertical";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

const title: string = "Testimonios de nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"
const newArray = [1,2,3,4,5]

export default function ReviewSectionBH() {
    const review: ReviewItem[] = useContext(ReviewBhContext)
    const layoutPropReview: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 48,
        Grid: 3,
        IsButtonVisible: false,
        LeftArrow: null,
        RightArrow: null
        /*        LeftArrow: () => listReview.LeftClick(),
                RightArrow: () => listReview.RightClick()*/
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
               {/* <div className={style.gridStars}>
                    {
                        newArray.map((e, index) =>
                            <div key={index} className={style.sizeStar}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull}
                                       alt={""}/>
                            </div>
                        )
                    }
                </div>*/}
            </div>
            <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                {
                    review.map(item =>
                        <ReviewViewVertical key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}