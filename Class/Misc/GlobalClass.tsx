export class UploadImageProvisory {
    FileImage: File
    Id: string
    ProvisoryUrl: string
}

export class SearchBarProps {
    Value: string
    Placeholder: string
    OnChangeInput: Function
    OnClick: Function
    Suggestions: string[]
    CleanSuggestions: Function
}

export class ProductItem {
    Id: string
    Name: string
    Description: string
    Price: number
    DiscountPercent?: number
    Include?: string
    ImagePath?: string
}

export class SectionProductItem {
    Id: string
    Name: string
    ListProducts: ProductItem[]
}