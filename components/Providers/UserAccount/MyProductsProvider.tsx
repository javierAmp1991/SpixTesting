import {createContext, useState} from "react";
import {Product} from "../../../dataDemo/data";
import {MyProductProviderProp} from "../../../Class/UserAccount/userAccount";
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";

const listProducts: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Type: TypeProducts.Service,
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "Producto 4.4",
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "Dcto 2da Uni.",
        ImagePath: "/images/product6.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "Producto 5.5",
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "Producto 6.6",
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Rating: 5
    }
]


export const ProductsContext = createContext(null)

export default function MyProductsProvider({children}) {
    let [listProd, setListProd] = useState(listProducts)
    const handleDeleteProduct = (prod: Product) => setListProd(listProd = listProd.filter(item => item.Name != prod.Name))
    let myProductProviderProp: MyProductProviderProp = {
        ListProduct: listProd,
        DeleteProduct: handleDeleteProduct
    }

    return (
        <ProductsContext.Provider value={myProductProviderProp}>
            {children}
        </ProductsContext.Provider>
    )
}