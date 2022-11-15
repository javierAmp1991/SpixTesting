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
                Like: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            }
        },
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.contInfo}>
                <HeaderSiteEventsMobile item={headerEvents}/>
            </div>
            <ImageVideoMobile/>

            {/* <div className={style.gridDescription}>
                <div className={style.description}>
                    {info.Description}
                </div>
                <div className={style.gridProduceLogo}>
                    <span className={style.produce}>Produce:</span> El Huevo
                </div>
                <div className={style.gridContact}>
                    {contactText}
                    {
                        info.Contact.map((item) =>
                            <Link key={item.Id} href={item.Link}>
                                <a>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={item.Icon} alt={""}/>
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>*/}

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