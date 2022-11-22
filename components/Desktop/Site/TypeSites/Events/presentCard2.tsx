import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import {
    HeaderSiteEventsProp,
    PrincipalInfoEvent,
    TypeSiteEvents
} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import HeaderSiteEvents from "./Misc/headerSiteEvents";
import SideImages from "../Misc/sideImages";
import LayoutPresentationCard from "../Misc/layoutPresentationCard";
import Announcement from "../Misc/announcement";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import LayoutAnnouncementInfo from "../Misc/layoutAnnouncementInfo";


export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const headerEvents: HeaderSiteEventsProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Produce: info.Produce,
        TypeSite: TypeSiteEvents.Default,
        Contact: info.Contact,
        SocialButtons: {
            Like: {
                IsLike: true,
                AmountLikes: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            },
            Subscription: {
                IsSubscriber: false,
                AmountSubscribers: 200
            }
        },
    }
    const isAnnouncement: boolean = info.Announcement == null
    const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteEvents
    return (
        <LayoutPresentationCard>
            <HeaderSiteEvents item={headerEvents}/>
            <SideImages galleryImages={info.GalleryImages} logo={info.PathLogo}/>
        </LayoutPresentationCard>
    )
}