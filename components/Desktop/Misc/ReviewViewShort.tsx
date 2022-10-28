import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/reviewViewShort.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {review} from "../../../dataDemo/data";
import Image from "next/image";

export default function ReviewViewShort({item}: { item: review }) {
    return (
        <div className={style.mainPadding}>
            <div className={style.mainDiv}>
                <div className={`${utilities.gridMaxContent2} gap-3`}>
                    <div className={utilities.gridContentCenter}>
                        <div className={style.sizeReviewImage}>
                            <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt=""/>
                        </div>
                    </div>
                    <div className="grid">
                        <div className={utilities.fontTitleDesktop}>
                            {item.Title}
                        </div>
                        <div className="grid pb-0.5">
                            <div className={style.sizeReviewStar}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-0.5">
                    <div className={utilities.fontPrimaryText}>
                        <div className={`${style.maxWidthtextReview} ${utilities.clamp3}`}>
                            {item.Review}
                        </div>
                    </div>
                </div>
                <div className={style.byWho}>{item.ByWho}</div>
            </div>
        </div>
    )
}