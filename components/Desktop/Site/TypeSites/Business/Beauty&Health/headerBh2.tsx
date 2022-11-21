import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import utilitiesSites from "/styles/Desktop/Site/TypeSite/Misc/utilitiesSites.module.css";
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import LayoutPresentationCard from "../../Misc/layoutPresentationCard";
import SideImages from "../../Misc/sideImages";
import LayoutAnnouncementInfo from "../../Misc/layoutAnnouncementInfo";
import Announcement from "../../Misc/announcement";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteBeautyAndHealth


export default function HeaderBh2() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Contact: info.Contact,
        TypeSite: TypeSiteBusiness.BeautyAndHealth,
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
        PaddingBottom: 30
    }
    const isAnnouncement: boolean = info.Announcement == null
    return (
        <LayoutPresentationCard>
            <LayoutAnnouncementInfo>
                    {
                        info.Announcement != null &&
                            <Announcement styleAnnouncement={announcementStyle} announcement={info.Announcement}/>
                    }
                <HeaderSiteBussiness item={headerBusiness}/>
            </LayoutAnnouncementInfo>
            <SideImages galleryImages={info.GalleryImages} logo={info.LogoPath}/>
        </LayoutPresentationCard>
    )
}