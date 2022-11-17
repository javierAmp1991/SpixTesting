import Announcement from "../Misc/announcement";
import PresentCard2 from "./presentCard2";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteEvents

export default function HeaderSiteEvents() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <div>
            {
                info.Announcement != null &&
                <Announcement styleAnnouncement={announcementStyle} announcement={info.Announcement}/>
            }
            <PresentCard2/>
        </div>
    )
}