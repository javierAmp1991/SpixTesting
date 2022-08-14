import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/EventPage/commentMobile.module.css"
import {comment} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";
import Image from "next/image";

export default function CommentDesk({item}: { item: comment }) {
    return (
        <div className="grid gap-2">
            <div className={style.gridImageComment}>
                <div>
                    <Image className={style.sizeImageComment} src={item.ProfileImage} alt=""/>
                </div>
                <div className={`${style.maxWidthCommentText} text-left grid gap-3`}>
                    <p>
                        <span className={utilities.fontSubTitle}>{item.ByWho} </span>
                        <span className={`${utilities.fontPrimaryText}`}>{item.Comment}</span>
                    </p>
                    <OptionBar/>
                </div>
            </div>
        </div>
    )
}