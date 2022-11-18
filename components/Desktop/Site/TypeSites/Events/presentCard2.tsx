import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import utilitiesSites from "/styles/Desktop/Site/TypeSite/Misc/utilitiesSites.module.css";
import {
    HeaderSiteEventsProp,
    PrincipalInfoEvent,
    TypeSiteEvents
} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import {GlobalId} from "../../../../../public/globalConst";
import HeaderSiteEvents from "./Misc/headerSiteEvents";

const idPortal: string = GlobalId.globalIds.idPortal

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
            Subscription:{
                IsSubscriber:false,
                AmountSubscribers: 200
            }
        },
        Width: "85%"
    }
    const isAnnouncement: boolean = info.Announcement == null
    return (
        <div className={`${style.mainDiv} ${utilitiesSites.boxShadowCards}  ${utilitiesSites.marginUnderCard}
        ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <div className={style.mainDiv2}>
                <HeaderSiteEvents item={headerEvents}/>
                <ImageVideo/>
            </div>
        </div>
    )
}