import {News} from "../../../../dataDemo/data";
import {ReviewItem} from "../../../Misc/GlobalClass";
import {AnnouncementItem, HeaderSiteBase} from "../Misc/globalClassSite";
import {MultimediaItem} from "../../../Layouts/layoutClass";

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

export enum TypeActionContact {
    Copied, Link
}

export class ContactItems {
    Id: string
    Icon: string
    Link: string
    Type?: TypeActionContact
}

export class PrincipalInfoEvent {
    Id: string
    Name: string
    Description: string
    Category: string
    Tags: string[]
    PathLogo: string
    PathBanner: string
    PathPoster: string
    Likes: number
    WishList: number
    DateVenue: DateVenueEvent[]
    Restrictions: string[]
    Images: string[]
    Video: string
    Contact: ContactItems[]
    Produce: string
    Announcement: AnnouncementItem
    GalleryImages?: MultimediaItem[]
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

export enum TypeSiteEvents {
    Default
}

export class HeaderSiteEventsProp extends HeaderSiteBase {
    TypeSite: TypeSiteEvents
    Produce: string
}