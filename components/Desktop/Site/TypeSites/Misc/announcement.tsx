import style from "/styles/Desktop/Site/TypeSite/Misc/announcement.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {AnnouncementItem, AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
const seeMore: string = "Ver mas"

export default function Announcement({styleAnnouncement, announcement}:
                                         { styleAnnouncement: AnnouncementStyle, announcement: AnnouncementItem }) {
    return (
        <div className={`${style.gridAnnouncement} ${getAnnouncementStyle()}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.announcementIcon} alt={""}/>
            </div>
            <div className={`${utilities.clamp1} ${style.announcement}`}>
                {announcement.Announcement}
            </div>
            <div className={style.link}>
                {seeMore}
            </div>
        </div>
    )

    function getAnnouncementStyle(): string {
        if (styleAnnouncement == AnnouncementStyle.SiteRestaurant) return style.backgroundRestaurant
        else if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return style.backgroundBH
        else return style.backgroundEvents
    }
}