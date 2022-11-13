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

export class LayoutWithNavCircleProp{
    Top?: number
    Bottom?: number
    Left?: number
    Right?: number
}