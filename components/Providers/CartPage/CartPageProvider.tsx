import {createContext, useEffect, useState} from "react";
import {BelongToGuest, ProductCartPage, ProviderCartPage, TypeSite} from "../../../Class/CartPage/CartPageClass";
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import {EventCardType, EventCardWithPrice} from "../../../dataDemo/EventView/eventVerticalView";

export const ProductsCartContext = createContext(null)
export const RecommendedCartContext = createContext(null)
const defaultBelongTo: BelongToGuest = {Id: `idBelongToGuestDefault`, Name: "Para mi"}
const listRecommended: EventCardWithPrice[] = [
    {
        Id: "123456",
        Type: EventCardType.EventCardWithPrice,
        Title: "Restaurant Cinzano",
        Subtitle: "Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },
    {
        Id: "1234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/Woo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "WOO! Club",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/blackphone.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Black Phone",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/terrraza1.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "1234567890",
        Title: "Marco Polo",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 3000,
        PathImage: "/images/marcoPolo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678901",
        Title: "Bar Civico",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/Civico.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "1123456",
        Title: "Restaurant Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Restaurant Cinzano",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "21234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/Woo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "WOO! Club",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "312345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/blackphone.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Black Phone",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "4123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/terrraza1.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "51234567890",
        Title: "Marco Polo",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 3000,
        PathImage: "/images/marcoPolo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]
const listProductsOffer: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "lorem ipsum dolor sit amet 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        Type: TypeProducts.Service,
        ImagePath: "/images/bh2.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "lorem ipsum dolor sit amet 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: 30,
        Type: TypeProducts.Service,
        Include: null,
        ImagePath: "/images/bh4.png",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "lorem ipsum dolor sit amet 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Type: TypeProducts.Service,
        Include: null,
        ImagePath: "/images/bh1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "lorem ipsum dolor sit amet 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Type: TypeProducts.Service,
        Include: "2 x 1",
        ImagePath: "/images/bh3.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "lorem ipsum dolor sit amet 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Type: TypeProducts.Service,
        Include: null,
        ImagePath: "/images/bh5.png",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "lorem ipsum dolor sit amet 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Type: TypeProducts.Service,
        Include: null,
        ImagePath: "/images/bh6.png",
        Rating: 5
    }
]

function getProducts(): ProductCartPage[] {
    let maxAmount: number = 2
    let belongTo: number = 1
    let counter: number = 0
    let newList: ProductCartPage[] = []
    listProductsOffer.forEach(item => {
        let newItem: ProductCartPage = {
            Id: `idProductCart${counter}`,
            Product: item,
            BelongTo: defaultBelongTo,
            Amount: 1,
            MaxAMount: maxAmount
        }
        newList = [...newList, newItem]
        maxAmount += 1
        counter += 1
        belongTo += 1
    })
    return newList
}

export default function CartPageProvider({children}) {
    let [listProducts, setListProducts] = useState(getProducts())
    let [listGuest, setListGuest] = useState([defaultBelongTo])
    const handleAmount = (id: string, amount: number) => {
        let newList = listProducts.map(item => {
            if (item.Id == id) return {...item, Amount: amount}
            else return {...item}
        })
        setListProducts(newList)
    }
    const handleBelongTo = (idProduct: string, belongTo: BelongToGuest) => {
        let newList = listProducts.map(item => {
            if (item.Id == idProduct) return {...item, BelongTo: belongTo}
            else return {...item}
        })
        setListProducts(newList)
    }
    const handleGuest = (guest: BelongToGuest, isAdd: boolean) => {
        if (isAdd) setListGuest([...listGuest, guest])
        else {
            let newListProducts = listProducts.map(item => {
                if (item.BelongTo.Id == guest.Id) return {...item, BelongTo: defaultBelongTo}
                else return {...item}
            })
            setListProducts(newListProducts)
            setListGuest(listGuest.filter(item => item.Id != guest.Id))
        }
    }
    const handleDeleteProduct = (id: string) => {
        setListProducts(listProducts.filter(item => item.Id != id))
    }
    const handleSortByPrice = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Product.Price * a.Amount < b.Product.Price * b.Amount) return 1
                else if (a.Product.Price * a.Amount > b.Product.Price * b.Amount) return -1
                else return 0
            })
            setListProducts(newListMyShopping)
        } else {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Product.Price * a.Amount > b.Product.Price * b.Amount) return 1
                else if (a.Product.Price * a.Amount < b.Product.Price * b.Amount) return -1
                else return 0
            })
            setListProducts(newListMyShopping)
        }
    }
    const handleSortByAmount = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Amount < b.Amount) return 1
                else if (a.Amount > b.Amount) return -1
                else return 0
            })
            setListProducts(newListMyShopping)
        } else {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Amount > b.Amount) return 1
                else if (a.Amount < b.Amount) return -1
                else return 0
            })
            setListProducts(newListMyShopping)
        }
    }
    const handleSortByBelongTo = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.BelongTo.Name < b.BelongTo.Name) return 1
                else if (a.BelongTo.Name > b.BelongTo.Name) return -1
                else return 0
            })
            setListProducts(listProducts = newListMyShopping)
        } else {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.BelongTo.Name > b.BelongTo.Name) return 1
                else if (a.BelongTo.Name < b.BelongTo.Name) return -1
                else return 0
            })
            setListProducts(listProducts = newListMyShopping)
        }
    }
    const handleSortByName = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Product.Name < b.Product.Name) return 1
                else if (a.Product.Name > b.Product.Name) return -1
                else return 0
            })
            setListProducts(listProducts = newListMyShopping)
        } else {
            let newListMyShopping = listProducts.sort((a, b) => {
                if (a.Product.Name > b.Product.Name) return 1
                else if (a.Product.Name < b.Product.Name) return -1
                else return 0
            })
            setListProducts(listProducts = newListMyShopping)
        }
    }
    const subTotal: number = getTotal()

    let cartProvider: ProviderCartPage = {
        Products: listProducts,
        ListGuest: listGuest,
        Subtotal: subTotal,
        HandleAmount: handleAmount,
        HandleBelongTo: handleBelongTo,
        HandleGuest: handleGuest,
        HandleDeleteProduct: handleDeleteProduct,
        SortByAMount: handleSortByAmount,
        SortByName: handleSortByName,
        SortByPrice: handleSortByPrice,
        SortByBelongTo: handleSortByBelongTo,
        TypeSite: TypeSite.Service
    }

    return (
        <ProductsCartContext.Provider value={cartProvider}>
            <RecommendedCartContext.Provider value={listRecommended}>
                {children}
            </RecommendedCartContext.Provider>
        </ProductsCartContext.Provider>
    )

    function getTotal(): number {
        let total: number = 0
        listProducts.forEach(item => {
            total += item.Amount * item.Product.Price
        })
        return total
    }
}