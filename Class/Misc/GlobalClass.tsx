
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
    ExtraImages?: string[]
    Rating?: number
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