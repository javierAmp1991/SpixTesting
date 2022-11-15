import {SocialButtonsProps} from "../../../Misc/GlobalClass";

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
}