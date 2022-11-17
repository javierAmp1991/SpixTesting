import Announcement from "../../Misc/announcement";
import HeaderBh2 from "./headerBh2";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteBeautyAndHealth

export default function HeaderBeautyAndHelath(){
    const info: PresentationCard = useContext(HeaderDataBHContext)

    return(
        <div>
            {
                info.Announcement != null &&
                <Announcement styleAnnouncement={announcementStyle} announcement={info.Announcement}/>
            }
            <HeaderBh2/>
        </div>
    )
}