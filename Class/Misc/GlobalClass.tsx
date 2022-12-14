import {StepsCreateSite} from "../UserAccount/userAccount";

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

export enum TypeProducts {
    Service = 1,
    Products
}

export class ProductItem {
    Id: string
    Name: string
    Description: string
    Price: number
    SKU?: number
    DiscountPercent?: number
    Include?: string
    ImagePath?: string
    ExtraImages?: string[]
    Rating?: number
    Type?: TypeProducts
    Time?: string
}

export class SectionProductItem {
    Id: string
    Name: string
    ListProducts: ProductItem[]
}

export class ReviewItem {
    Id: string
    Rating: number
    ByWho: string
    Title: string
    ProfileImage: string
    Review: string
    Date: Date
    Likes: number
}

export class QuestionItem {
    Id: string
    Date: Date
    Rating: number
    ByWho: string;
    Question: string;
    Answer: string;
}

export class NavBarEventsSections {
    Id: string
    IdToGo: string
    Name: string
}

export class SocialButtonsProps {
    Like: LikeButtonProps
    WishList: WishlistButtonProps
    Subscription: SubscriptionButtonProps
}

export class LikeButtonProps {
    IsLike: boolean
    AmountLikes: number
}

export class WishlistButtonProps {
    IsLike: boolean
    Like: number
}

export class SubscriptionButtonProps {
    IsSubscriber: boolean
    AmountSubscribers: number
}

export class PriceViewProp {
    SizePrice?: number
    Price: number
    DiscountPercent?: number
    IsBeforeText?: boolean
    TypeGrid?: boolean
    PaddingTop?: number
    PaddingBottom?: number
    JustifyContent?: string
    IsDiscountUp?: boolean
    JustifyPrice? : boolean
}

export class AmountCounterProp {
    IdTarget: string
    InitialAmount: number
    MaxAmount: number
    GetActualAmount: Function
}

export class NavArrowTabsProvider{
    Steps: StepsCreateSite[]
    HandleSteps: Function
}