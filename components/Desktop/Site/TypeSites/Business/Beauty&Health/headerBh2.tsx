import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";

const idPortal: string = GlobalId.globalIds.idPortal

export default function HeaderBh2() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        TypeSite: TypeSiteBusiness.BeautyAndHealth,
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
        Width: "70%"
    }
    return (
        <div className={style.mainDiv}>
            <HeaderSiteBussiness item={headerBusiness}/>
            <div className={style.sizeNewBanner}>
                <Image priority={true} layout={"fill"} src={info.LogoPath} alt={""}/>
            </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}