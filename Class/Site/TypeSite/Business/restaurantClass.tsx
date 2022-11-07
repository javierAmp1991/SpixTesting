import {EventCardWithPrice} from "../../../../dataDemo/EventView/eventVerticalView";
import {Product} from "../../../../dataDemo/data";
import {MapPopUpProp} from "../../../../components/Desktop/Misc/mapPopUp";
import {ReviewItem} from "../../../Misc/GlobalClass";
import {ContactItems} from "../Events/events";

export class PresentationCard {
    Banner: string
    VideoPath?: string
    ImagePath?: string
    LogoPath: string
    Name: string
    Description: string
    Venue: MapPopUpProp
    Contact: ContactItems[]
    Instagram: string
    WebPage: string
    Whatssapp: number
    TikTok: string
    Facebook: string
    SideImages: string[]
}

export class ProviderRecommended{
    InitialItems: EventCardWithPrice[]
    RightClick: Function
    LeftClick: Function
}

export class ProviderOfferProducts{
    InitialItems: Product[]
    RightClick: Function
    LeftClick: Function
}

export class ProviderReview{
    InitialReview: ReviewItem[]
    RightClick: Function
    LeftClick: Function
}