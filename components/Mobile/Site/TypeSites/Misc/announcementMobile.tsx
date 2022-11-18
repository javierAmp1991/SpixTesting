import style from "/styles/Mobile/Site/TypeSite/Misc/announcement.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {AnnouncementItem, AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";

export default function AnnouncementMobile({styleAnnouncement, announcement}:
                                               { styleAnnouncement: AnnouncementStyle, announcement: AnnouncementItem }) {
    return (
        <div className={`${style.gridAnnouncement} ${getAnnouncementStyle()}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={getICon()} alt={""}/>
            </div>
            <div className={`${utilities.clamp1} ${style.announcement}`}>
                {announcement.Announcement}
            </div>
            <div className={style.link}>
                Ver mas
            </div>
        </div>
    )

    function getAnnouncementStyle(): string {
        if (styleAnnouncement == AnnouncementStyle.SiteRestaurant) return style.backgroundRestaurant
        else if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return style.backgroundBH
        else return style.backgroundEvents
    }

    function getICon() {
        if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return GlobalConst.sourceImages.announcementIconBlack
        else return GlobalConst.sourceImages.announcementIcon
    }
}