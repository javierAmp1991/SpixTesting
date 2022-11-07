import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/reviewViewVertical.module.css"
import Image from "next/image";
import OptionBar from "./optionBar";
import {ReviewItem} from "../../../Class/Misc/GlobalClass";
import RatingStarDesk from "./ratingStarDesk";
import RatingStarVar from "./ratingStarVar";

export default function ReviewViewVertical({item}: { item: ReviewItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.contImage}>
                <div className={style.gradient}>
                    <div className={style.sizeReviewImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt=""/>
                    </div>
                </div>
            </div>

            <div className={style.principalDiv}>
                <div>
                    <div className={style.title}>
                        {item.Title}
                    </div>
                    <div className={style.byWho}>{item.ByWho}</div>
                    <RatingStarVar size={20} item={item.Rating}/>
                </div>

                <div className={utilities.fontPrimaryText}>
                    <div className={`${style.maxWidthtextReview} ${utilities.clamp7}`}>
                        {item.Review}
                    </div>
                </div>

                <div className={`${utilities.gridMaxContent2} ${style.gridOpt}`}>
                    <OptionBar/>
                </div>
            </div>

        </div>
    )
}