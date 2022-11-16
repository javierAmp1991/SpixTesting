import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import OurJobs2 from "./ourJobs2";


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
        Width: "80%"
    }
    return (
        <div className={style.mainDiv}>
            <HeaderSiteBussiness item={headerBusiness}/>
            <OurJobs2/>
            <div className={style.sizeNewBanner}>
                <Image priority={true} layout={"fill"} src={info.LogoPath} alt={""}/>
            </div>
        </div>
    )
}