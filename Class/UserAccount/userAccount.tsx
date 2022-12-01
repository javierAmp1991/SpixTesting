import {Product} from "../../dataDemo/data";

export class LayoutUserAccountProp {
    Title: string
    SubTitle: string
}

export class ProductManagement {
    Id: string
    PathImages: string[]
    Description: string
    Name: string
    Price: number
    IsService: boolean
}

export class ProductManagementeProvider {
    ProductForEdit: ProductManagement
}

export class MyProductProviderProp {
    ListProduct: Product[]
    DeleteProduct: Function
}

export class GroupProducts {
    Id: string
    Name: string
    Products: Product[]
}

export class MyGroupProductsProviderProp {
    ListGroup: GroupProducts[]
    DeleteGroup: Function
}

export class StepsCreateSite {
    Id: string
    NumberStep: number
    State: boolean
    IsStep: boolean
    Name: string
}

export class InputCreateSite {
    Id: string
    Value: string
    Name: string
    Placeholder?: string
    IsObligatory: boolean
    Type: TypeInputsCreateSite
}

export enum TypeInputsCreateSite {
    Name,
    Title,
    Description,
    Email,
    Whatsapp,
    Website,
    TikTok,
    Facebook,
    Instagram
}

export class MyBusinessProviderProp {
    ListInputs: InputCreateSite[]
    ListContact: InputCreateSite[]
    HandleInput: Function
    IsAllCampusDone: boolean
    ListSteps: StepsCreateSite[]
    TypeSites: SelectTypeSite[]
    HandleSelectTypeSite: Function
    NavTabs: Function
    IsStepOneDone: boolean
    IsStepTwoDone: boolean
}

export enum TypeSiteSelected {
    Business,
    Service,
    Event
}

export class SelectTypeSite {
    Name: string
    Type: TypeSiteSelected
    IsSelected: boolean
    Description: string
    PathImage: string
}

export enum TypeSocialMedia {
    Website, Instagram, TikTok, Facebook
}

export class SocialMedia {
    Type: TypeSocialMedia
    Id: string
    Link: string
}

export class SocialMediaOption {
    Type: TypeSocialMedia
    Name: string
    Id: string
}

export class SocialMediaOptionProvider {
    Items: SocialMedia[]
    Options: SocialMediaOption[]
    HandleAdd: Function
    HandleDelete: Function
}

export enum MediaType {
    Video, Image, Youtube
}
export class MediaBase {
    Url: string
    Number: number
    Type: MediaType
}
export class MediaImage extends MediaBase{}
export class MediaYoutube extends MediaBase{}
export class MediaVideo extends MediaBase{
    Thumbnail: string
}