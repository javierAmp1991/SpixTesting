import {SocialButtonsProps} from "../../../Misc/GlobalClass";
import {ContactItems, TypeActionContact} from "../Events/events";

export class Schedule {
    Id: string
    Hour: string
    IsDisponible?: boolean
}

export class HeaderSiteBase{
    Name: string
    Tags: string[]
    Description: string
    SocialButtons: SocialButtonsProps
    Width?: string
    Contact: ContactItems[]
}