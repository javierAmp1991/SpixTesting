import {
    HeaderSiteEventsProp,
    PrincipalInfoEvent,
    TypeSiteEvents
} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/informationImages.module.css"
import ImageVideoMobile from "./imageVideo";
import {GlobalId} from "../../../../../public/globalConst";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import LevelUserPopUpMobile from "../../../Misc/levelUserPopUp";
import {LevelUser} from "../../../../Desktop/Site/TypeSites/Events/sideCard";
import {createPortal} from "react-dom";
import HeaderSiteEventsMobile from "./Misc/headerSiteEventsMobile";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal

export default function InformationImages() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
    const headerEvents: HeaderSiteEventsProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Produce: info.Produce,
        TypeSite: TypeSiteEvents.Default,
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
        Contact: info.Contact
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.contInfo}>
                <HeaderSiteEventsMobile item={headerEvents}/>
            </div>
            <div className={style.separationLine}/>
            <ImageVideoMobile/>

            {
                displayLevelUser &&
                createPortal(
                    <PopUpContainerMob closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUpMobile levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}