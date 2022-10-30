import {createContext, useState} from "react";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {ProductItem, QuestionItem, ReviewItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {EventCardType, EventCardWithPrice} from "../../../../../../dataDemo/EventView/eventVerticalView";
import {Product, question, review, reviewSearch, ReviewsSectionData} from "../../../../../../dataDemo/data";

export const HeaderContext = createContext(null)
export const SectionProductsContext = createContext(null)
export const RecommendedContext = createContext(null)
export const ReviewsSectionContext = createContext(null)
export const QuestionSectionContext = createContext(null)
export const OfferProductsContext = createContext(null)

const listProductsOffer: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
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
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Rating: 5
    }
]
const listRecomendedAdd: EventCardWithPrice[] = [
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
]

const headerData: PresentationCard = {
    Banner: "/images/sushiBanner.jpg",
    LogoPath: "/images/hellsKitchen.jpeg",
    ImagePath: "/images/hellsKitchen.jpg",
    VideoPath: null,
    Name: "HellsKitchen Nightmare",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "                    Corporis culpa dicta libero minima molestiae nihil odio officia\n" +
        "                    quo totam. Alias cum eveniet inventore ipsam necessitatibus,\n" +
        "                    nemo nobis omnis reprehenderit ut voluptatem! Adipisci atque, culpa\n" +
        "                    cum deleniti dignissimos dolores eos eveniet iste iusto laboriosam",
    Venue: {
        Venue: "San Francisco 657, California",
        Capacity: 50,
        Name: "HellsKitchen Nightmare",
        ImageMap: "/images/googleMapHuevo.jpg",
        LinkGoogleMap: "https://goo.gl/maps/GdriuQJvA4vEFnK48"
    },
    Whatssapp: 987347654,
    Instagram: "/",
    TikTok: "/",
    Facebook: "/",
    WebPage: "/",
    SideImages: ["/images/hellkitchen1.jpg", "/images/hellkitchen2.jpg", "/images/hellkitchen3.jpg"]

}
const listSectionProducst: SectionProductItem[] = [
    {
        Id: "sectinProduct001",
        Name: "Hamburguesas",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProduct002",
        Name: "Pizzas",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProduct003",
        Name: "Bebidas",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProduct004",
        Name: "Snacks",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProduct005",
        Name: "Pastas",
        ListProducts: listProductsOffer
    }
]
const listInitialRecommended: EventCardWithPrice[] = [
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
        Id: "1234sdsadw56",
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
    /*{
        Id: "1234sdsadw56",
        Type: EventCardType.EventCardWithPrice,
        Title: "Restaurant Cinzano",
        Subtitle: "Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },*/
]
const listReview: ReviewItem[] = [
    {
        Id: "idReview001",
        Rating: 5,
        Date: new Date(2022, 9, 23),
        Likes: 120,
        ByWho: "Javiera Perez",
        Title: "Buena la tocata",
        ProfileImage: "/images/fotoperfil2.png",
        Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

    },
    {
        Id: "idReview002",
        Rating: 4,
        Date: new Date(2022, 9, 23),
        Likes: 120,
        ByWho: "Oscar Castillo",
        Title: "Gran Tributo",
        ProfileImage: "/images/fotoperfil1.png",
        Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

    },
    {
        Id: "idReview003",
        Rating: 3,
        Date: new Date(2022, 9, 23),
        Likes: 120,
        ByWho: "Paulo Andrade",
        Title: "Se nota la pasion",
        ProfileImage: "/images/fotoperfil3.png",
        Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

    },
]
const listQuestions: QuestionItem[] = [
    {
        Id: "idQuestion001",
        Rating: 5,
        Date: new Date(2022, 9, 23),
        Question: "Se puede llevar comida desde el exterior ?",
        Answer: "No, no se puede",
        ByWho: "Maria Gonzalez"
    },
    {
        Id: "idQuestion002",
        Rating: 4,
        Date: new Date(2022, 9, 23),
        Question: "Hasta que hora se pueden comprar ?",
        Answer: "Hasta las 20:00 hrs, horarios Chile",
        ByWho: "Felipe Perez"
    },
    {
        Id: "idQuestion003",
        Rating: 3,
        Date: new Date(2022, 9, 23),
        Question: "Donde puedo ver devoluciones?",
        Answer: "Inbox",
        ByWho: "Juan Castillo"
    },
    {
        Id: "idQuestion004",
        Rating: 5,
        Date: new Date(2022, 9, 23),
        Question: "Se puede pagar con cuenta rut?",
        Answer: "Si se puede",
        ByWho: "Alberto Fernandez"
    }
]
const listOfferProducts: Product[] = [
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 10,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza",
        Rating: 2
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: 25,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Tag: "Energetica",
        Rating: 3
    },
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack",
        Rating: 4
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica",
        Rating: 5
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Tag: "Bebida",
        Rating: 4
    },
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas",
        Rating: 0
    },
]

export default function RestaurantProvider({children}) {
    let [recommendedItems, setRecommendedItems] = useState(listInitialRecommended)
    let [offerProducts, setOfferProducts] = useState(listOfferProducts)
    const handleAddRecomended = () => {
    }
    const handleAddOfferProducts = () => {
    }
    let providerRecommended: ProviderRecommended = {
        InitialItems: recommendedItems,
        AddItems: handleAddRecomended
    }
    let providerOfferProducts: ProviderOfferProducts = {
        InitialItems: offerProducts,
        AddItems: handleAddOfferProducts
    }
    return (
        <HeaderContext.Provider value={headerData}>
            <SectionProductsContext.Provider value={listSectionProducst}>
                <RecommendedContext.Provider value={providerRecommended}>
                    <ReviewsSectionContext.Provider value={listReview}>
                        <QuestionSectionContext.Provider value={listQuestions}>
                            <OfferProductsContext.Provider value={providerOfferProducts}>
                                {children}
                            </OfferProductsContext.Provider>
                        </QuestionSectionContext.Provider>
                    </ReviewsSectionContext.Provider>
                </RecommendedContext.Provider>
            </SectionProductsContext.Provider>
        </HeaderContext.Provider>
    )
}