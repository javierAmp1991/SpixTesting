import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/reviewViewVertical.module.css"
import Image from "next/image";
import OptionBar from "./optionBar";
import {ReviewItem} from "../../../Class/Misc/GlobalClass";
import RatingStarVar from "./ratingStarVar";
const byText: string = "Por:"

export default function ReviewViewVertical({item}: { item: ReviewItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.contImage}>
                <div className={style.sizeReviewImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt=""/>
                </div>
            </div>

            <div className={style.principalDiv}>
                <div className={style.contInfo}>
                    <div className={style.title}>
                        {item.Title}
                    </div>
                    <RatingStarVar size={14} item={item.Rating}/>
                </div>

                <div className={utilities.fontPrimaryText}>
                    <div className={`${style.maxWidthtextReview} ${utilities.clamp7}`}>
                        {item.Review}
                    </div>
                    <div className={style.byWho}>{byText} {item.ByWho}</div>
                </div>


                <div className={style.contOptionBar}>
                    <OptionBar/>
                </div>
            </div>

        </div>
    )
}