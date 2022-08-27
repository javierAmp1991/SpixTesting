import LayoutCommRevQue from "../Layouts/layoutCommRevQue";
import style from "/styles/Mobile/EventPage/reviewSection.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import Link from "next/link";

export default function ReviewSectionMobile({children, resumeReview}) {
    return (
        <>
            <div className={style.gridReviewHeader}>
                <div className="justify-left grid gap-3 content-start">
                    <div className={style.fontReviewResume}>
                        {resumeReview.rating} de 5
                    </div>
                    <div className={`${utilities.gridContentCenter} mb-2 justify-start `}>
                        <div className={style.sizeStarResume}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                        </div>
                    </div>
                    <div className={`${utilities.fontPrimaryText} text-left`}>
                        {resumeReview.totalReview} <span>Reseñas</span>
                    </div>
                </div>

                <div className={`${utilities.fontPrimaryText} grid gap-1`}>
                    {
                        resumeReview.infoReviews.map((item, index) =>
                            <div key={index} className={`${utilities.gridMaxContent3} gap-4`}>
                                <div>
                                    {item.numStars} estrellas
                                </div>

                                <div className="relative">
                                    <div className={style.styleBarReview}></div>
                                    <div style={{width: item.numReviews}} className={style.styleProgresBarReview}></div>
                                </div>

                                <div>
                                    <span>{item.numReviews}%</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <LayoutCommRevQue>
                {children}
            </LayoutCommRevQue>
            <Link href={"writeReview"}>
                <button>
                    escribe reseña
                </button>
            </Link>
        </>
    )
}