import {EventCardWithPrice} from "../../../../dataDemo/EventView/eventVerticalView";
import {Product} from "../../../../dataDemo/data";
import {MapPopUpProp} from "../../../../components/Desktop/Misc/mapPopUp";
import {
    ProductItem,
    ReviewItem,
} from "../../../Misc/GlobalClass";
import {ContactItems} from "../Events/events";
import {AnnouncementItem, HeaderSiteBase} from "../Misc/globalClassSite";
import {MultimediaItem} from "../../../Layouts/layoutClass";

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
    GalleryImages?: MultimediaItem[]
    Announcement?: AnnouncementItem

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

export class HeaderSiteBusinessProp extends HeaderSiteBase {
    Venue: MapPopUpProp
    TypeSite: TypeSiteBusiness
}

export class LayoutReviewSectionBusiness {
    Title: string
    IsAvailableWriteReview: boolean
    PaddingBottomHeader?: number
}