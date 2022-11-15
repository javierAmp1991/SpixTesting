import {EventCardWithPrice} from "../../../../dataDemo/EventView/eventVerticalView";
import {Product} from "../../../../dataDemo/data";
import {MapPopUpProp} from "../../../../components/Desktop/Misc/mapPopUp";
import {
    LikeButtonProps,
    ProductItem,
    ReviewItem,
    SocialButtonsProps,
    WishlistButtonProps
} from "../../../Misc/GlobalClass";
import {ContactItems} from "../Events/events";
import {HeaderSiteBase} from "../Misc/globalClassSite";

export class PresentationCard {
    Banner: string
    VideoPath?: string
    ImagePath?: string
    LogoPath: string
    Name: string
    Description: string
    Venue: MapPopUpProp
    Contact: ContactItems[]
    Tags: string[]
    SideImages: string[]
}

export class ProviderRecommended {
    InitialItems: EventCardWithPrice[]
    RightClick: Function
    LeftClick: Function
}

export class ProviderOfferProducts {
    InitialItems: Product[]
    RightClick: Function
    LeftClick: Function
}

export class ProviderReview {
    InitialReview: ReviewItem[]
    RightClick: Function
    LeftClick: Function
}

export class ProviderServicesProducts {
    InitialItems: ProductItem[]
    RightClick: Function
    LeftClick: Function
}

export enum TypeSiteBusiness {
    Restaurant,
    BeautyAndHealth,
    Default
}

export class HeaderSiteBusinessProp extends HeaderSiteBase{
    Venue: MapPopUpProp
    TypeSite: TypeSiteBusiness
}