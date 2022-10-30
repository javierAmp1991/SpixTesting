import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Misc/reviewViewShort.module.css"
import Image from "next/image";
import OptionBar from "./optionBar";
import {ReviewItem} from "../../../Class/Misc/GlobalClass";
import RatingStarDesk from "../../Desktop/Misc/ratingStarDesk";

export default function ReviewViewShortMobile({item}: { item: ReviewItem }) {
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
                           <RatingStarDesk item={item.Rating}/>
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
                <div className={`${utilities.gridMaxContent2} ${style.gridOpt}`}>
                    <div className={style.byWho}>{item.ByWho}</div>
                    <OptionBar/>
                </div>
            </div>
        </div>
    )
}