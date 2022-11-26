import {ProductItem} from "../Misc/GlobalClass";

export enum TypeSite {
    Service,
    Event,
    Restaurant
}

export class BelongToGuest{
    Id: string
    Name: string
}

export class ProductCartPage {
    Id: string
    Product: ProductItem
    Amount: number
    MaxAMount: number
    BelongTo: BelongToGuest
}

export class ProviderCartPage {
    Products: ProductCartPage[]
    ListGuest: BelongToGuest[]
    Subtotal: number
    HandleAmount: Function
    HandleBelongTo: Function
    HandleGuest: Function
    HandleDeleteProduct: Function
    SortByPrice: Function
    SortByName: Function
    SortByAMount: Function
    SortByBelongTo: Function
    TypeSite: TypeSite
    TextButton: string
    LinkSite: string
}

export class ColumnAlignment{
    Id: string
    Name: string
    Index: number
    State: boolean
}