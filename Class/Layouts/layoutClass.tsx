export class PropCarrousel {
    Grid: number
    Gap: number
    Padding: number
    PositionArrowY: string
    PositionArrowX: string
    IsButtonVisible: boolean
    RightArrow: Function
    LeftArrow: Function
}

export enum TypeAlignTitle {
    Right,
    Center
}

export class LayoutTitleLinkProps {
    Id?: string
    Title: string
    Link?: string
    PaddingTop?: number
    PaddingBottom?: number
    PaddingLeft?: number
    PaddingRight?: number
    PaddingUnderHeader?: number
    AlignTitle?: TypeAlignTitle
}

export class LayoutCarrouselMobileProp {
    Top: number
    Bottom: number
    Left: number
    Right: number
    Gap: number
}

export class LayoutWithNavCircleProp {
    Top?: number
    Bottom?: number
    Left?: number
    Right?: number
    IsWithBorder?: boolean
}

export enum TypeGallery {
    Video,
    Embed,
    Image
}

export class MediaGallery {
    Type: TypeGallery
    Link: string
    Id: string
}

export class LayoutGalleryDesktop {
    InitialImages: string[]
    CloseGallery: Function
    InitialMedia?: MediaGallery[]
}

export class LayoutGalleryMobile {
    InitialImages: string[]
    CloseGallery: Function
}
