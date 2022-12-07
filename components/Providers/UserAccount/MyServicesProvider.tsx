import {createContext, useState} from "react";
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";

export const MyServicesContext = createContext(null)

export class ProviderMyServices {
    ListServices: ProductItem[]
    HandleAddService: Function
    HandleDeleteService: Function
    HandleEditService: Function
}

const listInitialServices: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit  1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/bh2.jpg",
        Rating: 4,
        Type: TypeProducts.Service,
        Time: `40`,
        ExtraImages: ["/images/bh1.jpg", "/images/bh2.jpg", "/images/bh3.jpg"],
        SKU: 123456,
    },
    {
        Id: "idProduct02",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/bh4.png",
        Rating: 5,
        Type: TypeProducts.Service,
        Time: `40`,
        SKU: 123456,
    },
    {
        Id: "idProduct03",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/bh1.jpg",
        Rating: 4,
        Type: TypeProducts.Service,
        Time: `34`,
        SKU: 123456,
    },
    {
        Id: "idProduct04",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "2 x 1",
        ImagePath: "/images/bh3.jpg",
        Rating: 3,
        Type: TypeProducts.Service,
        Time: `40`,
        SKU: 123456,
    },
    {
        Id: "idProduct05",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/bh5.png",
        Rating: 0,
        SKU: 123456,
        Type: TypeProducts.Service
    },
    {
        Id: "idProduct06",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/bh6.png",
        Rating: 5,
        SKU: 123456,
        Type: TypeProducts.Service
    }
]

export default function MyServicesProvider({children}) {

    let [listServices, setListServices] = useState(listInitialServices)
    const handleAddService = (product: ProductItem) => {
        setListServices([...listServices, product])
    }
    const handleDeleteService = (id) => setListServices(listServices.filter(item => item.Id != id))
    const handleEditService = (product: ProductItem) => {
        let newList = listServices.map(item => {
            if (item.Id == product.Id) return {...product}
            else return {...item}
        })
        setListServices(newList)
    }

    let providerMyServices: ProviderMyServices = {
        ListServices: listServices,
        HandleAddService: handleAddService,
        HandleDeleteService: handleDeleteService,
        HandleEditService: handleEditService
    }
    return (
        <MyServicesContext.Provider value={providerMyServices}>
            {children}
        </MyServicesContext.Provider>
    )
}