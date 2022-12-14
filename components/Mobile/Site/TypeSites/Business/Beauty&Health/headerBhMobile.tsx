import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import React, {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";
import OurJobsMobile from "./ourJobsMobile";
import GalleryCarrouselMobile from "../../Misc/galleryCarrouselMobile";
import LayoutPresentCardMobile from "../../Misc/layoutPresentCardMobile";
import LayoutPresentationCardMobile from "../../Misc/layoutPresentationCardMobile";

const idPortal: string = GlobalId.globalIds.idPortal
export default function HeaderBhMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Width: `100%`,
        TypeSite: TypeSiteBusiness.Restaurant,
        SocialButtons: {
            Like: {
                IsLike: false,
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
        Contact: info.Contact
    }

    return (
        <LayoutPresentationCardMobile>
                <HeaderSiteBussinessMobile item={headerBusiness}/>
                <GalleryCarrouselMobile gallery={info.GalleryImages} logo={info.LogoPath}/>

                {/*<div className={style.sizeNewBanner}>
                <Image priority={true} layout={"fill"} src={info.LogoPath}/>
            </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }*/}
        </LayoutPresentationCardMobile>
    )
}