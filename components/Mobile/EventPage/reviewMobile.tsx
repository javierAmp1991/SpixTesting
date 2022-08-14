import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/EventPage/reviewMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {review} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";
import Image from "next/image";

export default function ReviewMobile({item} : {item : review}) {
    return (
        <div className="grid gap-3">
            <div className={`${utilities.gridMaxContent2} gap-3`}>
                <div className={utilities.gridContentCenter}>
                    <Image loading="lazy" src={item.ProfileImage}
                           className={style.sizeReviewImage} alt=""/>
                </div>

                <div>
                    <a className={utilities.fontName}>{item.ByWho}</a>
                    <div className={`${utilities.gridMaxContent2} gap-1`}>
                        <div className={utilities.fontSecundaryText}>
                            Compra verificada
                        </div>
                        <div className={utilities.gridContentCenter}>
                            <Image loading="lazy" className={style.sizeCheckIcon}
                                   src={GlobalConst.sourceImages.checkIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                <div className={utilities.fontTitle}>
                    {item.Title}
                </div>
                <div className="grid pb-0.5">
                    <Image className={style.sizeReviewStar} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                </div>
            </div>

            <div className="grid gap-0.5">
                <div className={utilities.fontPrimaryText}>
                    <div className={style.maxWidthtextReview}>
                        {item.Review}
                    </div>
                </div>
            </div>
            <OptionBar/>
        </div>
    )
}


