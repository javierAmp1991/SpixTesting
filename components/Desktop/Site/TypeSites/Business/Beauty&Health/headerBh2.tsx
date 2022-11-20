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
import BannerImages from "./bannerImages";


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
        Width: "80%",
        PaddingBottom: 30
    }
    const isAnnouncement: boolean = info.Announcement == null
    return (
        <div className={`${style.mainDiv} ${utilitiesSites.boxShadowCards}  ${utilitiesSites.marginUnderCard}
        ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <HeaderSiteBussiness item={headerBusiness}/>
            <BannerImages/>
        </div>
    )
}