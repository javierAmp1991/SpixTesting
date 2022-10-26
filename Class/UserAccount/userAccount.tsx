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

export class MyGroupProductsProviderProp{
    ListGroup: GroupProducts[]
    DeleteGroup: Function
}