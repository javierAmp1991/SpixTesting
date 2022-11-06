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

export class ContactItems {
    Id: string
    Icon: string
    Link: string
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
    Contact: ContactItems[]
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

export class ZonesSiteEvents {
    Id: string
    Name: string
    Color: string
    MinPrice: number
    MaxPrice: number
    Discount?: number
    Include?: string
}

export class AreaSiteEvents {
    Id: string
    Name: string
    Zones: ZonesSiteEvents[]
    IsSelected: boolean
}

export class AllDates {
    Id: string
    Date: Date
    Venue: string
    IsSelected: boolean
}

export class DateAreaSelected {
    Id: string
    NameVenue: string
    Date: DateVenueEvent
    Area: AreaSiteEvents[]
    MapImage: string
}

export class TicketSectionSiteEvents {
    Id: string
    AllDates: AllDates[]
    FirstDateSelected: DateAreaSelected
}

export class ProviderSectionTicket {
    MainInfo: TicketSectionSiteEvents
    AllDates: AllDates[]
    DateSelected: DateAreaSelected
    SelectDate: Function
    SelectArea: Function
}