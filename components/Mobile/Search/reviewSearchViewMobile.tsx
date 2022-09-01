import Image from "next/image";
import {review} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Search/reviewSearchViewMobile.module.css"
import {reviewSearch} from "../../../dataDemo/data";

export default function ReviewSearchViewMobile({reviewSection}: { reviewSection: reviewSearch }) {
    return (
        <div>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} src={reviewSection.PathBanner}/>
            </div>
            <div className={style.infoCont}>
                <div className={utilities.fontTitle}>
                    {reviewSection.NameEvent}
                </div>
                <div className={style.gridStarResume}>
                    <div className={style.sizeStar}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull}/>
                    </div>
                    <div className={`${utilities.fontSecundaryText} ${style.fontResume}`}>
                        {reviewSection.ResumeStars} de 5
                    </div>
                </div>
            </div>
            <div className={style.gridReviews}>
                {
                    reviewSection.listReview.map((item, index) =>
                        <div key={index} className={style.cardReview}>
                            <div className="grid gap-3">
                                <div className={utilities.fontSubTitle}>
                                    {item.Title}
                                </div>
                                <div className="grid pb-0.5">
                                    <div className={style.sizeReviewStar}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                                    </div>
                                </div>
                                <div className="grid gap-0.5">
                                    <div className={utilities.fontPrimaryText}>
                                        <div className={utilities.clamp3}>
                                            {item.Review}
                                        </div>
                                    </div>
                                    <div className={utilities.styleLink}>
                                        <span className={utilities.fontSecundaryText}>Por </span>{item.ByWho}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}