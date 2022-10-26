import {createContext} from "react";
import {ProductManagement, ProductManagementeProvider} from "../../../Class/UserAccount/userAccount";

export const ProductManagementeContext = createContext(null)

const productForEdit: ProductManagement = {
    Id: "idProductForEdit001",
    Name: "Product Name 1",
    Price: 12990,
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti earum est eum molestiae nostrum odio suscipit temporibus voluptates!",
    PathImages: ["/images/product1.jpg"],
    IsService: true
}

export default function ProductManagementProvider({children}) {
    let productManagementProdvider: ProductManagementeProvider = {
        ProductForEdit: productForEdit
    }

    return (
        <ProductManagementeContext.Provider value={productManagementProdvider}>
            {children}
        </ProductManagementeContext.Provider>
    )
}