import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/layoutReviewSection.module.css"
import {LayoutReviewSectionBusiness} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {ReactNode} from "react";

const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"
const writeReview: string = "Escribir Reseña"

export default function LayoutReviewSection({children, item}:
                                                { children: ReactNode, item: LayoutReviewSectionBusiness }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.header}>
                <div className={style.title}>
                    {item.Title}
                </div>
                <div className={style.rating}>
                    {qualificationText} 5/5
                </div>
                <div className={style.seeMore}>
                    {seeMoreReview}
                </div>
            </div>
            {children}
            {
                item.IsAvailableWriteReview &&
                <div className={style.writeReview}>
                    {writeReview}
                </div>
            }
        </div>
    )
}