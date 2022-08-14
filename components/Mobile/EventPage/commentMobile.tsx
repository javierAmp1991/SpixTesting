import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/EventPage/commentMobile.module.css"
import {comment} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";

export default function CommentMobile({item}: { item: comment }) {
    return (
        <div className="grid gap-2">
            <div className={style.gridImageComment}>
                <div>
                    <img loading="lazy" className={style.sizeImageComment} src={item.ProfileImage} alt=""/>
                </div>
                <div className={`${style.maxWidthCommentText} text-left grid gap-3`}>
                    <p>
                        <span className={utilities.fontSubTitle}>{item.ByWho}</span>
                        <span className={`${utilities.fontPrimaryText}`}>{item.Comment}</span>
                    </p>
                    <OptionBar/>
                </div>
            </div>
        </div>
    )
}