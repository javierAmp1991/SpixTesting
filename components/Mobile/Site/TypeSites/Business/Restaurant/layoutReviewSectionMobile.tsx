import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/layoutReviewSection.module.css"

const title: string = "Que opinan nuestros clientes"
const sizeStar: number = 36

export default function LayoutReviewSectionMobile({children}) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.gridRating}>
                <div className={style.rating}>
                    5/5
                </div>
                <div className={style.gridStars}>
                    {
                        [...Array(5)].map((e, index) =>
                            <div key={index} className={style.sizeStar}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull}
                                       alt={""}/>
                            </div>
                        )
                    }
                </div>

            </div>
            <div className={style.seeMore}>
                Ver mas reseñas
            </div>
            {children}
        </div>
    )
}