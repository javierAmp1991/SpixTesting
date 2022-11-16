import style from "/styles/Desktop/Site/TypeSite/Misc/announcement.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";

export default function Announcement() {
    return (
        <div className={style.gridAnnouncement}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.announcementIcon}/>
            </div>
            <div className={`${utilities.clamp1} ${style.announcement}`}>
                Lorem ipsum dolor sit amet, consec tetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quae? elit. Ducimus enim fuga hic numquam officiis! Ab consectetur harum magnam maiores veritatis.
            </div>
            <div className={style.link}>
                Ver mas
            </div>
        </div>
    )
}