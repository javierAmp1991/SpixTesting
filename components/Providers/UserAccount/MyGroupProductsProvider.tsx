import {createContext, useState} from "react";
import {Product} from "../../../dataDemo/data";
import {GroupProducts, MyGroupProductsProviderProp} from "../../../Class/UserAccount/userAccount";

const listProducts: Product[] = [
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Rating: 5,
        Tag: "Snack"
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: null,
        Include: null,
        Rating: 4,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica"
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        Rating: 3,
        ImagePath: "/images/product7.jpg",
        Tag: "Bebida"
    },
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        Rating: 5,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas"
    },
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        Rating: 3,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza"
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: null,
        Include: null,
        Rating: 4,
        ImagePath: "/images/product4.jpg",
        Tag: "Energetica"
    },
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: "Dcto. 2da Uni.",
        Rating: 5,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza"
    },
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        Rating: 0,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas"
    },
]

export const GroupContext = createContext(null)

const listGroupProducts: GroupProducts[] = [
    {
        Id: "idGroupProduct001",
        Name: "Bebidas Energeticas",
        Products: listProducts
    },
    {
        Id: "idGroupProduct002",
        Name: "Snacks Salados",
        Products: listProducts
    }
]

export default function MyGroupProductsProvider({children}) {
    let [listGroupProd, setListGroupProd] = useState(listGroupProducts)
    const handleDeleteGroup = (id: string) => setListGroupProd(listGroupProd = listGroupProd.filter(item => item.Id != id))
    let myGroupProp: MyGroupProductsProviderProp = {
        ListGroup: listGroupProd,
        DeleteGroup: handleDeleteGroup
    }
    return (
        <GroupContext.Provider value={myGroupProp}>
            {children}
        </GroupContext.Provider>
    )
}