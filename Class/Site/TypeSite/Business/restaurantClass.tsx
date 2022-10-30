import {EventCardWithPrice} from "../../../../dataDemo/EventView/eventVerticalView";
import {Product} from "../../../../dataDemo/data";
import {MapPopUpProp} from "../../../../components/Desktop/Misc/mapPopUp";

export class PresentationCard {
    Banner: string
    VideoPath?: string
    ImagePath?: string
    LogoPath: string
    Name: string
    Description: string
    Venue: MapPopUpProp
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