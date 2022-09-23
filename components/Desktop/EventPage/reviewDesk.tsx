import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/EventPage/reviewMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {review} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";
import Image from "next/image";

export default function ReviewDesk({item}: { item: review }) {
    return (
        <div className={style.mainDiv}>
            <div className={`${utilities.gridMaxContent2} gap-3`}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeReviewImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt=""/>
                    </div>
                </div>

                <div>
                    <a className={utilities.fontName}>{item.ByWho}</a>
                    <div className={`${utilities.gridMaxContent2} gap-1`}>
                        <div className={utilities.fontSecundaryText}>
                            Compra verificada
                        </div>
                        <div className={utilities.gridContentCenter}>
                            <div className={style.sizeCheckIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                <div className={utilities.fontTitle}>
                    {item.Title}
                </div>
                <div className="grid pb-0.5">
                    <div className={style.sizeReviewStar}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                    </div>
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


