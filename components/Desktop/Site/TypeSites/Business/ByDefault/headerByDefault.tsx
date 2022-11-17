import Announcement from "../../Misc/announcement";
import PresentationCardByDefault from "./PresentationCardByDefault";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    PrincipalInfoByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteEvents

export default function HeaderByDefault(){
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    return(
        <div>
            {
                info.Announcement != null &&
                <Announcement styleAnnouncement={styleAnnouncement} announcement={info.Announcement}/>
            }

            <PresentationCardByDefault/>
        </div>
    )
}