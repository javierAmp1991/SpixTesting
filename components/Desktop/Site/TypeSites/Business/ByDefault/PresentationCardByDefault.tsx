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
import Image from "next/image";
import HeaderSiteBussinessByDefault from "./headerSiteBussinessByDefault";

const seeGallery: string = "Ver galeria"

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
    }
    const isAnnouncement: boolean = info.Announcement == null

    return (
        <div className={`${style.mainDiv} ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <HeaderSiteBussinessByDefault item={headerBusiness}/>
            <button className={style.contImage}>
                <div className={style.firstGradient}>
                    <div className={style.background}/>
                </div>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={info.ImagePath}/>
                </div>
                <div className={style.seeGallery}>
                    {seeGallery}
                </div>
               {/* <div className={style.logo}>
                    <Image layout={"fill"} src={info.LogoPath}/>
                </div>*/}
            </button>

        </div>
    )
}