import style from "/styles/Mobile/Site/TypeSite/Misc/announcement.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";

export default function AnnouncementMobile({styleAnnouncement, announcement}:
                                               { styleAnnouncement: AnnouncementStyle, announcement: string }) {
    return (
        <div className={`${style.gridAnnouncement} ${getAnnouncementStyle()}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.announcementIcon} alt={""}/>
            </div>
            <div className={`${utilities.clamp1} ${style.announcement}`}>
                {announcement}
                Lorem ipsum dolor sit amet, consectetur adipis icing Lorem ipsum dolor sit amet, consectetur adipis
                icing
                elit. Ipsum, quae? elit. Ducimus enim fuga hic numquam officiis! Ab consectetur harum magnam maiores
                veritatis.
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
}