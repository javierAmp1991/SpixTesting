import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/reviewViewShort.module.css"
import Image from "next/image";
import OptionBar from "./optionBar";
import {ReviewItem} from "../../../Class/Misc/GlobalClass";
import RatingStarDesk from "./ratingStarDesk";

export default function ReviewViewShort({item}: { item: ReviewItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.gridImageName}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeReviewImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt=""/>
                    </div>
                </div>
                <div>
                    <div className={utilities.fontTitleDesktop}>
                        {item.Title}
                    </div>
                    <RatingStarDesk item={item.Rating}/>
                </div>
            </div>

            <div className={utilities.fontPrimaryText}>
                <div className={`${style.maxWidthtextReview} ${utilities.clamp3}`}>
                    {item.Review}
                </div>
            </div>

            <div className={`${utilities.gridMaxContent2} ${style.gridOpt}`}>
                <div className={style.byWho}>{item.ByWho}</div>
                <OptionBar/>
            </div>
        </div>
    )
}