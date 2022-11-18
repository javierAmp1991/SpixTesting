import style from "/styles/Mobile/Site/TypeSite/Bussines/ByDefault/descriptionCardData.module.css";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import MapPopUp from "../../../../Misc/mapPopUp";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {
    PrincipalInfoByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const seeCard: string = "Ver carta"

export default function PresentCardByDefaultMobile() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUpMap = () => setDisplayMap(displayMap = !displayMap)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        TypeSite: TypeSiteBusiness.Restaurant,
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
                AmountSubscribers: 300
            }
        },
        Contact: info.Contact,
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.contInfo}>
                <HeaderSiteBussinessMobile item={headerBusiness}/>
            </div>

            {/*  <div className={style.button}>
                    {seeCard}
                </div>*/}
            {
                displayMap &&
                <PopUpContainerMob closePopUp={handlePopUpMap} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainerMob>
            }
        </div>
    )
}