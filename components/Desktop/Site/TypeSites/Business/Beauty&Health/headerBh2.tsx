import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import LayoutPresentationCard from "../../Misc/layoutPresentationCard";
import SideImages from "../../Misc/sideImages";


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
    }
    return (
        <LayoutPresentationCard>
            <HeaderSiteBussiness item={headerBusiness}/>
            <SideImages galleryImages={info.GalleryImages} logo={info.LogoPath}/>
        </LayoutPresentationCard>
    )
}