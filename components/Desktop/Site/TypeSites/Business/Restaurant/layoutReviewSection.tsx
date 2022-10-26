import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/layoutReviewSection.module.css"

const title: string = "Que opinan nuestros clientes"
const sizeStar: number = 30

export default function LayoutReviewSection({children}) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.gridStars}>
                {
                    [...Array(5)].map((e, index) =>
                        <Image key={index} width={sizeStar} height={sizeStar} src={GlobalConst.sourceImages.ratingIndFull} alt={""}/>)
                }
            </div>
            {children}
        </div>
    )
}