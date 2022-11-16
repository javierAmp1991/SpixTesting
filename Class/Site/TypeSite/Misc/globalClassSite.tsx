import {SocialButtonsProps} from "../../../Misc/GlobalClass";
import {ContactItems} from "../Events/events";

export class Schedule {
    Id: string
    Hour: string
    IsDisponible?: boolean
}

export class HeaderSiteBase {
    Name: string
    Tags: string[]
    Description: string
    SocialButtons: SocialButtonsProps
    Width?: string
    Contact: ContactItems[]
    PaddingBottom?: number
}

export enum AnnouncementStyle {
    SiteRestaurant,
    SiteBeautyAndHealth,
    SiteEvents
}

export class AnnouncementItem {
    Announcement: string
    Link: string
    Id: string
}