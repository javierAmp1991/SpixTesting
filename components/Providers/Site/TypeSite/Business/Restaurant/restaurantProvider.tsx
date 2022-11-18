import {createContext, useState} from "react";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended, ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {ProductItem, QuestionItem, ReviewItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {EventCardType, EventCardWithPrice} from "../../../../../../dataDemo/EventView/eventVerticalView";
import {FormLink, News, Product} from "../../../../../../dataDemo/data";
import {ProviderNewsEvents, TypeActionContact} from "../../../../../../Class/Site/TypeSite/Events/events";
import {GlobalConst} from "../../../../../../public/globalConst";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {MultimediaItemType} from "../../../../../../Class/Layouts/layoutClass";

export const HeaderContext = createContext(null)
export const SectionProductsContext = createContext(null)
export const RecommendedContext = createContext(null)
export const ReviewsSectionContext = createContext(null)
export const QuestionSectionContext = createContext(null)
export const OfferProductsContext = createContext(null)
export const FormContext = createContext(null)
export const NewsContext = createContext(null)
export const ScheduleContext = createContext(null)

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
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas",
        Rating: 0
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
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica",
        Rating: 5
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
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: 25,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Tag: "Energetica",
        Rating: 3
    },
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 10,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza",
        Rating: 2
    },
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
    Tags: ["Restaurant", "Sushi", "Bebidas"],
    SideImages: ["/images/hellkitchen1.jpg", "/images/hellkitchen2.jpg", "/images/hellkitchen3.jpg"],
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
    Announcement: {
        Id: "idAnnouncement001",
        Link: "/",
        Announcement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit asperiores beatae\n" +
            "                    commodi distinctio eos esse et harum impedit inventore iste iure iusto, laudantium\n" +
            "                    maxime, nesciunt porro praesentium, rerum saepe tempore unde?"
    }
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
const listInitialNews: News[] = [
    {
        Id: "12345",
        Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
        PathImage: "/images/daddy.jpg",
        Event: "Daddy Yankee On Tour",
        Date: "Hoy",
        HasEvent: true
    },
    {
        Id: "123456",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
        PathImage: "/images/anuel.jpg",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: true
    },
    {
        Id: "1234567",
        Title: "Ozzy Osbourne rompe nuevo récord: Número 1 del rock con su single «Patient Number 9»",
        SubTitle: "El single «Patient Number 9» de Ozzy Osbourne es todo un éxito porque en la primera semana de estreno, llegó al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, «Patient Number 9» obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, según Luminate.",
        PathImage: "/images/ossy.jpg",
        Event: "Evento generico 1",
        Date: "Ayer",
        HasEvent: true
    },
    {
        Id: "12345dsadw3",
        Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
        PathImage: "/images/new1.webp",
        Event: "Daddy Yankee On Tour",
        Date: "Hoy",
        HasEvent: true
    },
]
const listNewsAdd: News[] = [
    {
        Id: "12345678",
        Title: "Queen anuncia los detalles de “Rhapsody Over London”, un concierto espectacular que se emitirá para todo el mundo",
        SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
        PathImage: "/images/queen.jpg",
        Event: "Evento generico 1",
        Date: "Hace 2 dias",
        HasEvent: false
    },
    {
        Id: "12345",
        Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
        SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
        PathImage: "/images/new1.webp",
        Event: "Evento generico 1",
        Date: "Ayer",
        HasEvent: true
    },
    {
        Id: "123456",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
        PathImage: "/images/new2.webp",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: false
    },
    {
        Id: "123456dsadsa",
        Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
        SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
        PathImage: "/images/new3.webp",
        Event: "Evento generico 1",
        Date: "Hoy",
        HasEvent: false
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


export default function RestaurantProvider({children}) {
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
    let providerOfferProducts: ProviderOfferProducts = {
        InitialItems: offerProducts,
        RightClick: handleRightClickProducts,
        LeftClick: handleLeftClickProducts
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
                            <OfferProductsContext.Provider value={providerOfferProducts}>
                                <FormContext.Provider value={listForm}>
                                    <NewsContext.Provider value={providerNews}>
                                        <ScheduleContext.Provider value={scheduleLis}>
                                            {children}
                                        </ScheduleContext.Provider>
                                    </NewsContext.Provider>
                                </FormContext.Provider>
                            </OfferProductsContext.Provider>
                        </QuestionSectionContext.Provider>
                    </ReviewsSectionContext.Provider>
                </RecommendedContext.Provider>
            </SectionProductsContext.Provider>
        </HeaderContext.Provider>
    )
}