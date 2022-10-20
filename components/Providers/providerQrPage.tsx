import {createContext} from "react";
import {Product} from "../../dataDemo/data";

class ProductAmount {
    Product: Product
    Amount: number
}

export class ShoppingData {
    Number: number
    TypePay: string
    User: string
    Date: Date
    Site: string
    NumberScan: number
    Products: ProductAmount[]
}

const shoppingData: ShoppingData = {
    Number: 387334556,
    TypePay: "MasterCard - Debito",
    User: "Pedro Paulo Perez Paez",
    Date: new Date(2022, 9, 10),
    Site: "Woo Club",
    NumberScan: 2,
    Products: [
        {
            Amount: 1,
            Product: {
                Name: "Producto 1.1",
                Price: 18990,
                DiscountPercent: 10,
                Include: null,
                ImagePath: "/images/product1.jpg",
                Tag: "Cerveza"
            }
        },
        {
            Amount: 1,
            Product: {
                Name: "Producto 2.2",
                Price: 2990,
                DiscountPercent: 25,
                Include: null,
                ImagePath: "/images/product4.jpg",
                Tag: "Energetica"
            }
        },
        {
            Amount: 1,
            Product: {
                Name: "Producto 3.3",
                Price: 990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product5.jpg",
                Tag: "Snack"
            }
        },
        {
            Amount: 1,
            Product: {
                Name: "Producto 4.4",
                Price: 9990,
                DiscountPercent: null,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product6.jpg",
                Tag: "Energetica"
            }
        },
        {
            Amount: 1,
            Product: {
                Name: "Producto 5.5",
                Price: 10990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product7.jpg",
                Tag: "Bebida"
            }
        },
        {
            Amount: 1,
            Product: {
                Name: "Producto 6.6",
                Price: 10990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product8.jpg",
                Tag: "Energeticas"
            }
        },


    ]
}

export const ShoppingDataContext = createContext(null)

export default function ProviderQrPage({children}) {
    return (
        <ShoppingDataContext.Provider value={shoppingData}>
            {children}
        </ShoppingDataContext.Provider>
    )
}