import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    PrincipalInfoByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/presentationCard.module.css"
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";

export default function PresentationCardByDefault() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Contact: info.Contact,
        TypeSite: TypeSiteBusiness.Default,
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
        PaddingBottom: 24
    }
    const isAnnouncement: boolean = info.Announcement == null

    return (
        <div className={`${style.mainDiv} 
            ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <HeaderSiteBussiness item={headerBusiness}/>
        </div>
    )
}