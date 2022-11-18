import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import Announcement from "../../Misc/announcement";
import DescriptionCardFull from "./DescriptionCardFull";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";

export default function HeaderSiteRestaurant() {
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteRestaurant

    return (
        <div>
            {
                infoHeader.Announcement != null &&
                <Announcement styleAnnouncement={styleAnnouncement} announcement={infoHeader.Announcement}/>
            }
            <DescriptionCardFull/>
        </div>
        /* <div className={style.mainGradient}>
        <FullBannerRestaurant item={infoHeader.Banner}/>
        <div className={style.mainDivHeader}>
            {
                infoHeader.Announcement != null &&
                <Announcement styleAnnouncement={styleAnnouncement} announcement={infoHeader.Announcement}/>
            }
            <DescriptionCardFull/>
        </div>
    </div>*/
    )
}