import {News} from "../../../../dataDemo/data";
import {ReviewItem} from "../../../Misc/GlobalClass";

export class DateVenueEvent {
    Id: string
    Date: Date
    Venue: string
    IsSelected: boolean
    Capacity: number
    NameVenue: string
    ImageMap: string
    LinkGoogleMap: string
}

export class PrincipalInfoEvent {
    Id: string
    Name: string
    Description: string
    Category: string
    Attributes: string[]
    PathLogo: string
    PathBanner: string
    PathPoster: string
    Likes: number
    WishList: number
    Rating: number
    DateVenue: DateVenueEvent[]
    Restrictions: string[]
    Images: string[]
    Video: string
    Whatssapp: number
    Instagram: string
    TikTok: string
    Facebook: string
    WebPage: string
}

export class ProviderNewsEvents {
    InitialItems: News[]
    RightClick: Function
    LeftClick: Function
}


export class ReviewSection {
    Reviews: ReviewItem[]
    Rating: number
    TotalReview: number
    ReviewBreakDown: number[]
}