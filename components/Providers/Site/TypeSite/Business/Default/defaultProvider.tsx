import {createContext, useState} from "react";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended, ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {ProductItem, QuestionItem, ReviewItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {EventCardType, EventCardWithPrice} from "../../../../../../dataDemo/EventView/eventVerticalView";
import {FormLink, News, Product} from "../../../../../../dataDemo/data";
import {ProviderNewsEvents} from "../../../../../../Class/Site/TypeSite/Events/events";

export const HeaderContext = createContext(null)
export const SectionProductsContext = createContext(null)
export const RecommendedContext = createContext(null)
export const ReviewsSectionContext = createContext(null)
export const QuestionSectionContext = createContext(null)
export const OfferProductsContext = createContext(null)
export const FormContext = createContext(null)
export const NewsContext = createContext(null)

const listProductsOffer: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/galletas1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas2.jpg",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/galletas3.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "Producto 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "Dcto 2da Uni.",
        ImagePath: "/images/galletas4.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "Producto 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas5.jpg",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "Producto 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/galletas6.jpg",
        Rating: 5
    }
]
const listProducts: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/galletas7.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas8.jpg",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/galletas9.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "Producto 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "Dcto 2da Uni.",
        ImagePath: "/images/galletas10.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "Producto 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas11.jpg",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "Producto 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/galletas12.jpg",
        Rating: 5
    }
]
const listRecomendedAdd: EventCardWithPrice[] = [
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
        PathImage: "/images/cinzano.jpg",
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
        PathImage: "/images/Civico.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]
const listOfferProductsAdd: Product[] = [

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
    /*    {
            Name: "Producto 6.6",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product8.jpg",
            Tag: "Energeticas",
            Rating: 0
        },*/
]
const listReviewAdd: ReviewItem[] = [
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
const headerData: PresentationCard = {
    Banner: "/images/galleteriaBanner.webp",
    LogoPath: "/images/logoCookies.png",
    ImagePath: "/images/hellsKitchen.jpg",
    VideoPath: null,
    Name: "La Galleteria Dulce",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "                    Corporis culpa dicta libero minima molestiae nihil odio officia\n" +
        "                    quo totam. Alias cum eveniet inventore ipsam necessitatibus,\n" +
        "                    nemo nobis omnis reprehenderit ut voluptatem! Adipisci atque, culpa\n" +
        "                    cum deleniti dignissimos dolores eos eveniet iste iusto laboriosam",
    Venue: {
        Venue: "Avenida Grecia, 133, Vi??a del Mar",
        Capacity: 30,
        Name: "La Galleteria Dulce",
        ImageMap: "/images/googleMapHuevo.jpg",
        LinkGoogleMap: "https://goo.gl/maps/GdriuQJvA4vEFnK48"
    },
    SideImages: ["/images/galleteria1.jpg", "/images/galleteria2.jpg", "/images/galleteria3.jpg"],
    Contact:[],
    Tags:[]

}
const listSectionProducst: SectionProductItem[] = [
    {
        Id: "sectinProduct001",
        Name: "Galletas Chocolate",
        ListProducts: listProducts
    },
    {
        Id: "sectinProduct002",
        Name: "Galletas Jengibre",
        ListProducts: listProducts
    },
    {
        Id: "sectinProduct003",
        Name: "Endulzadas",
        ListProducts: listProducts
    },
    {
        Id: "sectinProduct004",
        Name: "Galletas sin azucar",
        ListProducts: listProducts
    },
    {
        Id: "sectinProduct005",
        Name: "Galletas de menta",
        ListProducts: listProducts
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
    /*    {
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
const listOfferProducts: Product[] = [
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas7.jpg",
        Tag: "Energeticas",
        Rating: 0
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/galletas8.jpg",
        Tag: "Bebida",
        Rating: 4
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/galletas9.jpg",
        Tag: "Energetica",
        Rating: 5
    },
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/galletas10.jpg",
        Tag: "Snack",
        Rating: 4
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: 25,
        Include: null,
        ImagePath: "/images/galletas11.jpg",
        Tag: "Energetica",
        Rating: 3
    },
    /*{
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 10,
        Include: null,
        ImagePath: "/images/galletas12.jpg",
        Tag: "Cerveza",
        Rating: 2
    },*/
]
const listForm: FormLink[] = [
    {
        text: "Se necesita maestro galletero",
        link: "/fillForm"
    },
    {
        text: "Se busca alianza con importadora de harina y trigo ",
        link: "/fillForm"
    },
    {
        text: "Se busca vendedor en terreno ",
        link: "/fillForm"
    }
]
const listInitialNews: News[] = [
    {
        Id: "12345",
        Title: "Daddy Yankee graba un nuevo v??deo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer s??bado, el pegajoso ritmo de la canci??n ???Rumbat??n???, del cantante Daddy Yankee, se apoder?? del poblado de Boquer??n, en Cabo Rojo, debido a que se llev?? a cabo la grabaci??n de su v??deo. Como se puede apreciar en varios v??deos y fotograf??as publicadas en las redes sociales, el artista film?? sobre una pantalla en forma de tarima donde aparec??an im??genes color",
        PathImage: "/images/daddy.jpg",
        Event: "Daddy Yankee On Tour",
        Date: "Hoy",
        HasEvent: true
    },
    {
        Id: "123456",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El s??bado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el pr??ximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki N????ez, Fernando Costa, Miriam Rodr??guez y Doctor Prats. ",
        PathImage: "/images/anuel.jpg",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: true
    },
    {
        Id: "1234567",
        Title: "Ozzy Osbourne rompe nuevo r??cord: N??mero 1 del rock con su single ??Patient Number 9??",
        SubTitle: "El single ??Patient Number 9?? de Ozzy Osbourne es todo un ??xito porque en la primera semana de estreno, lleg?? al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, ??Patient Number 9?? obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, seg??n Luminate.",
        PathImage: "/images/ossy.jpg",
        Event: "Evento generico 1",
        Date: "Ayer",
        HasEvent: true
    },
    {
        Id: "12345dsadw3",
        Title: "Daddy Yankee graba un nuevo v??deo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer s??bado, el pegajoso ritmo de la canci??n ???Rumbat??n???, del cantante Daddy Yankee, se apoder?? del poblado de Boquer??n, en Cabo Rojo, debido a que se llev?? a cabo la grabaci??n de su v??deo. Como se puede apreciar en varios v??deos y fotograf??as publicadas en las redes sociales, el artista film?? sobre una pantalla en forma de tarima donde aparec??an im??genes color",
        PathImage: "/images/new1.webp",
        Event: "Daddy Yankee On Tour",
        Date: "Hoy",
        HasEvent: true
    },
]
const listNewsAdd: News[] = [
    {
        Id: "12345678",
        Title: "Queen anuncia los detalles de ???Rhapsody Over London???, un concierto espectacular que se emitir?? para todo el mundo",
        SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
        PathImage: "/images/queen.jpg",
        Event: "Evento generico 1",
        Date: "Hace 2 dias",
        HasEvent: false
    },
    {
        Id: "12345",
        Title: "Daddy Yankee graba un nuevo v??deo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer s??bado, el pegajoso ritmo de la canci??n ???Rumbat??n???, del cantante Daddy Yankee, se apoder?? del poblado de Boquer??n, en Cabo Rojo, debido a que se llev?? a cabo la grabaci??n de su v??deo. Como se puede apreciar en varios v??deos y fotograf??as publicadas en las redes sociales, el artista film?? sobre una pantalla en forma de tarima donde aparec??an im??genes color",
        PathImage: "/images/new1.webp",
        Event: "Evento generico 1",
        Date: "Ayer",
        HasEvent: true
    },
    {
        Id: "123456",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El s??bado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el pr??ximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki N????ez, Fernando Costa, Miriam Rodr??guez y Doctor Prats. ",
        PathImage: "/images/new2.webp",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: false
    },
    {
        Id: "123456dsadsa",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El s??bado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el pr??ximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki N????ez, Fernando Costa, Miriam Rodr??guez y Doctor Prats. ",
        PathImage: "/images/new3.webp",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: false
    },
]

export default function DefaultProvider({children}) {
    let [recommendedItems, setRecommendedItems] = useState(listInitialRecommended)
    let [offerProducts, setOfferProducts] = useState(listOfferProducts)
    let [reviewItems, setReviewItems] = useState(listReview)
    let [news, setNews] = useState(listInitialNews)

    const handleRightClickRecomended = () => setRecommendedItems(recommendedItems = listRecomendedAdd)
    const handleLeftClickRecomended = () => setRecommendedItems(recommendedItems = listInitialRecommended)

    const handleRightClickProducts = () => setOfferProducts(offerProducts = listOfferProductsAdd)
    const handleLeftClickProducts = () => setOfferProducts(offerProducts = listOfferProducts)

    const handleRightClickReview = () => setReviewItems(reviewItems = listReviewAdd)
    const handleLeftClickReview = () => setReviewItems(reviewItems = listReview)

    const handleRightClickNews = () => setNews(news = listNewsAdd)
    const handleLeftClickNews = () => setNews(news = listInitialNews)

    let providerRecommended: ProviderRecommended = {
        InitialItems: recommendedItems,
        RightClick: handleRightClickRecomended,
        LeftClick: handleLeftClickRecomended
    }
    let providerReview: ProviderReview = {
        InitialReview: reviewItems,
        RightClick: handleRightClickReview,
        LeftClick: handleLeftClickReview
    }
    let providerNews: ProviderNewsEvents = {
        InitialItems: news,
        RightClick: handleRightClickNews,
        LeftClick: handleLeftClickNews
    }
    return (
        <HeaderContext.Provider value={headerData}>
            <SectionProductsContext.Provider value={listSectionProducst}>
                <RecommendedContext.Provider value={providerRecommended}>
                    <ReviewsSectionContext.Provider value={providerReview}>
                        <QuestionSectionContext.Provider value={listQuestions}>
                                <FormContext.Provider value={listForm}>
                                    <NewsContext.Provider value={providerNews}>
                                        {children}
                                    </NewsContext.Provider>
                                </FormContext.Provider>
                        </QuestionSectionContext.Provider>
                    </ReviewsSectionContext.Provider>
                </RecommendedContext.Provider>
            </SectionProductsContext.Provider>
        </HeaderContext.Provider>
    )
}