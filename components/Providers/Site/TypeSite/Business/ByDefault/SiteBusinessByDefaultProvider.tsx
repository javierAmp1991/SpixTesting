import {createContext, useState} from "react";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended, ProviderReview, ProviderServicesProducts
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {GlobalConst} from "../../../../../../public/globalConst";
import {TypeActionContact} from "../../../../../../Class/Site/TypeSite/Events/events";
import {
    ProductItem,
    QuestionItem,
    ReviewItem,
    SectionProductItem,
    TypeProducts
} from "../../../../../../Class/Misc/GlobalClass";
import {FormLink, Product} from "../../../../../../dataDemo/data";
import {EventCardType, EventCardWithPrice} from "../../../../../../dataDemo/EventView/eventVerticalView";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {MultimediaItemType} from "../../../../../../Class/Layouts/layoutClass";

export const PrincipalInfoByDefaultContext = createContext(null)
export const ReviewByDefaultContext = createContext(null)
export const SectionProductsByDefaultContext = createContext(null)
export const FormByDefaultContext = createContext(null)
export const RecommendedByDefaultContext = createContext(null)
export const OfferByDefaultContext = createContext(null)
export const QuestionsByDefaultContext = createContext(null)
export const ShceduleByDefaultContext = createContext(null)
export const ServicesByDefaultContext = createContext(null)

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
    Contact: [
        {
            Id: "contact005",
            Icon: GlobalConst.sourceImages.emailIcon,
            Link: "elhuevo@hotmail.com",
            Type: TypeActionContact.Copied
        },
        {
            Id: "contact002",
            Icon: GlobalConst.sourceImages.whatsaapIcon,
            Link: "+56934579283",
            Type: TypeActionContact.Copied
        },
        {
            Id: "contact000",
            Icon: GlobalConst.sourceImages.webPageIcon,
            Link: "www.elhuevo.cl",
            Type: TypeActionContact.Link
        },
        {
            Id: "contact001",
            Icon: GlobalConst.sourceImages.tiktokIcon,
            Link: "/test",
            Type: TypeActionContact.Link
        },
        {
            Id: "contact003",
            Icon: GlobalConst.sourceImages.instagramICon,
            Link: "/test2",
            Type: TypeActionContact.Link
        },
        {
            Id: "contact004",
            Icon: GlobalConst.sourceImages.facebookIcon,
            Link: "/test3",
            Type: TypeActionContact.Link
        }
    ],
    GalleryImages: [
        {
            Id: "idRestaurantGalleryImage001",
            Type: MultimediaItemType.Image,
            Link: "/images/hellkitchen1.jpg"
        },
        {
            Id: "idRestaurantGalleryImage002",
            Type: MultimediaItemType.Image,
            Link: "/images/hellkitchen2.jpg"
        },
        {
            Id: "idRestaurantGalleryImage003",
            Type: MultimediaItemType.Image,
            Link: "/images/hellkitchen3.jpg"
        },
    ],
    Tags: ["Restaurant", "Sushi", "Bebidas"],
    SideImages: ["/images/hellkitchen1.jpg", "/images/hellkitchen2.jpg", "/images/hellkitchen3.jpg"],
    Announcement: {
        Id: "idAnnouncement001",
        Tittle: "Generic title announcement",
        Announcement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit asperiores beatae\n" +
            "                    commodi distinctio eos esse et harum impedit inventore iste iure iusto, laudantium\n" +
            "                    maxime, nesciunt porro praesentium, rerum saepe tempore unde?"
    }
}
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
const listReviewAdd: ReviewItem[] = [
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
        Id: "idReview001",
        Rating: 5,
        Date: new Date(2022, 9, 23),
        Likes: 120,
        ByWho: "Javiera Perez",
        Title: "Buena la tocata",
        ProfileImage: "/images/fotoperfil2.png",
        Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

    },
]
const listProductsOffer: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit  1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/bh2.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/bh4.png",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/bh1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "2 x 1",
        ImagePath: "/images/bh3.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/bh5.png",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/bh6.png",
        Rating: 5
    }
]
const listServices: ProductItem[] = [
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
        Time: `40`
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
        Time: `40`
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
        Time: `34`
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
        Time: `40`
    },
]
const listServicesAdd: ProductItem[] = [
    {
        Id: "idProduct03",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/bh1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "2 x 1",
        ImagePath: "/images/bh3.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/bh5.png",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "lorem ipsum dolor sit amet , sonsectetur adipisicing elit 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/bh6.png",
        Rating: 5
    }
]
const listSectionProducts: SectionProductItem[] = [
    {
        Id: "sectinProductBH001",
        Name: "Cuidado Personal",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProductBH002",
        Name: "Corte de pelo",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProductBH003",
        Name: "Manicure",
        ListProducts: listProductsOffer
    },
    /*{
        Id: "sectinProductBH004",
        Name: "Maquillaje",
        ListProducts: listProductsOffer
    },
    {
        Id: "sectinProductBH005",
        Name: "Dieta y ejercicio",
        ListProducts: listProductsOffer
    }*/
]
const listForm: FormLink[] = [
    {
        text: "Se necesita camarero o camarera por el fin de semana.",
        link: "/fillForm"
    },
    {
        text: "Se necesita barman, guardia de seguridad y camareros modalidad part-time ",
        link: "/fillForm"
    },
    {
        text: "Se busca banda de rock, metal y cumbia para reemplazo ",
        link: "/fillForm"
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
        PathImage: "/images/serv5.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },
    {
        Id: "1234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/serv6.jpg",
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
        PathImage: "/images/serv7.jpg",
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
        PathImage: "/images/serv8.jpg",
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
        PathImage: "/images/serv9.jpg",
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
        PathImage: "/images/serv1.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },
]
const listRecomendedAdd: EventCardWithPrice[] = [
    {
        Id: "4123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/serv1.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "312345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/serv2.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Black Phone",
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
        Id: "1123456",
        Title: "Restaurant Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/serv3.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Restaurant Cinzano",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678901",
        Title: "Bar Civico",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/serv4.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

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
    },
    {
        Id: "idQuestion005",
        Rating: 3,
        Date: new Date(2022, 9, 23),
        Question: "Donde puedo ver devoluciones?",
        Answer: "Inbox",
        ByWho: "Juan Castillo"
    },
    {
        Id: "idQuestion006",
        Rating: 5,
        Date: new Date(2022, 9, 23),
        Question: "Se puede pagar con cuenta rut?",
        Answer: "Si se puede",
        ByWho: "Alberto Fernandez"
    },

]
const scheduleLis: Schedule[] = [
    {
        Id: "horario002",
        Hour: "01:00",
        IsDisponible: null
    },
    {
        Id: "horario003",
        Hour: "02:00",
        IsDisponible: null
    },
    {
        Id: "horario004",
        Hour: "03:00",
        IsDisponible: null
    },
    {
        Id: "horario005",
        Hour: "04:00",
        IsDisponible: null
    },
    {
        Id: "horario006",
        Hour: "05:00",
        IsDisponible: null
    },
    {
        Id: "horario007",
        Hour: "06:00",
        IsDisponible: null
    },
    {
        Id: "horario008",
        Hour: "07:00",
        IsDisponible: null
    },
    {
        Id: "horario009",
        Hour: "08:00",
        IsDisponible: true,
    },
    {
        Id: "horario0010",
        Hour: "09:00",
        IsDisponible: true,
    },
    {
        Id: "horario0011",
        Hour: "10:00",
        IsDisponible: true,
    },
    {
        Id: "horario0012",
        Hour: "11:00",
        IsDisponible: false,
    },
    {
        Id: "horario001",
        Hour: "12:00",
        IsDisponible: true,
    },
    {
        Id: "horario002",
        Hour: "13:00",
        IsDisponible: true,
    },
    {
        Id: "horario003",
        Hour: "14:00",
        IsDisponible: false,
    },
    {
        Id: "horario004",
        Hour: "15:00",
        IsDisponible: true,
    },
    {
        Id: "horario005",
        Hour: "16:00",
        IsDisponible: true,
    },
    {
        Id: "horario006",
        Hour: "17:00",
        IsDisponible: true,
    },
    {
        Id: "horario007",
        Hour: "18:00",
        IsDisponible: false,
    },
    {
        Id: "horario008",
        Hour: "19:00",
        IsDisponible: true,
    },
    {
        Id: "horario009",
        Hour: "20:00",
        IsDisponible: true
    },
    {
        Id: "horario0010",
        Hour: "21:00",
        IsDisponible: null
    },
    {
        Id: "horario0011",
        Hour: "22:00",
        IsDisponible: null
    },
    {
        Id: "horario0012",
        Hour: "23:00",
        IsDisponible: null
    },
    {
        Id: "horario001",
        Hour: "00:00",
        IsDisponible: null
    },
]
const listOfferProducts: ProductItem[] = [
    {
        Id: "offerProduct007",
        Time: null,
        Description: "lorem",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 10,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Rating: 2
    },
    {
        Id: "offerProduct008",
        Time: null,
        Description: "lorem",
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: 25,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Rating: 3
    },
    {
        Id: "offerProduct009",
        Time: null,
        Description: "lorem",
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Rating: 4
    },
    {
        Id: "offerProduct0010",
        Time: null,
        Description: "lorem",
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Rating: 5
    },
    {
        Id: "offerProduct0011",
        Time: null,
        Description: "lorem",
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Rating: 4
    },
    {
        Id: "offerProduct0012",
        Time: null,
        Description: "lorem",
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Rating: 0
    },
]
const listOfferProductsAdd: ProductItem[] = [
    {
        Id: "offerProduct001",
        Time: null,
        Description: "lorem",
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Rating: 0
    },
    {
        Id: "offerProduct002",
        Time: null,
        Description: "lorem",
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Rating: 4
    },
    {
        Id: "offerProduct003",
        Time: null,
        Description: "lorem",
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Rating: 5
    },
    {
        Id: "offerProduct004",
        Time: null,
        Description: "lorem",
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Rating: 4
    },
    {
        Id: "offerProduct005",
        Time: null,
        Description: "lorem",
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: 25,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Rating: 3
    },
    {
        Id: "offerProduct006",
        Time: null,
        Description: "lorem",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 10,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Rating: 2
    },
]


export default function SiteBusinessByDefaultProvider({children}) {
    let [recommendedItems, setRecommendedItems] = useState(listInitialRecommended)
    let [offerProducts, setOfferProducts] = useState(listOfferProducts)
    let [services, setServices] = useState(listServices)
    let [reviews, setReviews] = useState(listReview)
    const handleRightClickRecomended = () => setRecommendedItems(recommendedItems = listRecomendedAdd)
    const handleLeftClickRecomended = () => setRecommendedItems(recommendedItems = listInitialRecommended)
    const handleRightClickProducts = () => setOfferProducts(offerProducts = listOfferProductsAdd)
    const handleLeftClickProducts = () => setOfferProducts(offerProducts = listOfferProducts)
    const handleRightClickServices = () => setServices(services = listServicesAdd)
    const handleLeftClickServices = () => setServices(services = listServices)
    const handleRightClickReviews = () => setReviews(reviews = listReviewAdd)
    const handleLeftClickReviews = () => setReviews(reviews = listReview)
    let providerRecommended: ProviderRecommended = {
        InitialItems: recommendedItems,
        RightClick: handleRightClickRecomended,
        LeftClick: handleLeftClickRecomended
    }
    let providerOfferProducts: ProviderOfferProducts = {
        InitialItems: offerProducts,
        RightClick: handleRightClickProducts,
        LeftClick: handleLeftClickProducts
    }
    let providerServices: ProviderServicesProducts = {
        InitialItems: services,
        RightClick: handleRightClickServices,
        LeftClick: handleLeftClickServices
    }
    let providerReview: ProviderReview = {
        InitialReview: reviews,
        RightClick: handleRightClickReviews,
        LeftClick: handleLeftClickReviews
    }

    return (
        <PrincipalInfoByDefaultContext.Provider value={headerData}>
            <RecommendedByDefaultContext.Provider value={providerRecommended}>
                <OfferByDefaultContext.Provider value={providerOfferProducts}>
                    <ServicesByDefaultContext.Provider value={providerServices}>
                        <ReviewByDefaultContext.Provider value={providerReview}>
                            <QuestionsByDefaultContext.Provider value={listQuestions}>
                                <ShceduleByDefaultContext.Provider value={scheduleLis}>
                                    <FormByDefaultContext.Provider value={listForm}>
                                        <SectionProductsByDefaultContext.Provider value={listSectionProducts}>
                                            {children}
                                        </SectionProductsByDefaultContext.Provider>
                                    </FormByDefaultContext.Provider>
                                </ShceduleByDefaultContext.Provider>
                            </QuestionsByDefaultContext.Provider>
                        </ReviewByDefaultContext.Provider>
                    </ServicesByDefaultContext.Provider>
                </OfferByDefaultContext.Provider>
            </RecommendedByDefaultContext.Provider>
        </PrincipalInfoByDefaultContext.Provider>
    )
}