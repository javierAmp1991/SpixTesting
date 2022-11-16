import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";
import OurJobsMobile from "./ourJobsMobile";

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
                IsLike: true,
                Like: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            }
        },
        Contact: info.Contact
    }

    return (
        <div className={style.mainDiv}>

            <HeaderSiteBussinessMobile item={headerBusiness}/>

            <OurJobsMobile/>

                <div className={style.sizeNewBanner}>
                    <Image priority={true} layout={"fill"} src={info.LogoPath}/>
                </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}