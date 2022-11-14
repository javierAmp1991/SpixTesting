import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/layoutReviewSection.module.css"

const title: string = "Que opinan nuestros clientes"
const qualificationText: string = "Calificacion:"
const seeMoreReview: string = "Ver mas reseñas"
const newArray = [1,2,3,4,5]

export default function LayoutReviewSection({children}) {
    return (
        <div className={style.mainDiv}>
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
            {children}
            <div className={style.seeMore}>
                {seeMoreReview}
            </div>
        </div>
    )
}