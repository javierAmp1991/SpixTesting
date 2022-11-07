import {createContext, useState} from "react";
import {
    DateAreaSelected,
    PrincipalInfoEvent,
    ProviderNewsEvents, ProviderSectionTicket,
    ReviewSection,
    TicketSectionSiteEvents
} from "../../../../../Class/Site/TypeSite/Events/events";
import {FormLink, News, Product} from "../../../../../dataDemo/data";
import {ProviderOfferProducts, ProviderRecommended} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {EventCardType, EventCardWithPrice} from "../../../../../dataDemo/EventView/eventVerticalView";
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {GlobalConst} from "../../../../../public/globalConst";
import {Id} from "react-flags-select";
import {PrincipalFeaturedSearch} from "../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import {set} from "immutable";

const principalInfo: PrincipalInfoEvent = {
    Id: "12345abcde",
    Name: "Tributo a Pet Shop Boys y A Ha",
    Description: "Back to 80's en vivo: Noruega (Tributo A Ha ) y Suburbia (Tributo a Pet Shop Boys). Evento con aforo , según fase , para mayores de 18 años con pase de movilidad .Tenemos convenio con estacionamiento en Petrobras , Reserva tu estacionamiento al whatsapp : +56944864934",
    Rating: 5,
    PathBanner: "/images/banner.png",
    PathPoster: "/images/coverImage.jpg",
    PathLogo: "/images/logo el Huevo.jpg",
    Restrictions: ["/images/hoody.png", "/images/cap.png", "/images/semiformal.png"],
    DateVenue: [
        {
            Id: "12345",
            Date: new Date(2022, 8, 18),
            Venue: "Blanco 1386, Valparaíso",
            IsSelected: false,
            Capacity: 200,
            NameVenue: "El Huevo",
            ImageMap: "/images/googleMapHuevo.jpg",
            LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

        },
        {
            Id: "12345abc",
            Date: new Date(2022, 9, 19),
            Venue: "Plz Anibal Pinto 1182, Valparaíso",
            IsSelected: false,
            Capacity: 50,
            NameVenue: "Cinzano",
            ImageMap: "/images/googleMapCinzano.jpg",
            LinkGoogleMap: "https://goo.gl/maps/BHF532ZZNGPXL8Sn6"
        },
        {
            Id: "12345abcde12",
            Date: new Date(2022, 10, 20),
            Venue: "Blanco 889, Valparaíso",
            IsSelected: false,
            Capacity: 150,
            NameVenue: "Woo Club",
            ImageMap: "/images/googleMapWooClub.jpg",
            LinkGoogleMap: "https://goo.gl/maps/mPvXV5ZbCja19kQo7"
        },
        {
            Id: "12345abcfhjkjkde12",
            Date: new Date(2022, 10, 25),
            Venue: "Blanco 889, Valparaíso",
            IsSelected: false,
            Capacity: 150,
            NameVenue: "Woo Club",
            ImageMap: "/images/googleMapWooClub.jpg",
            LinkGoogleMap: "https://goo.gl/maps/mPvXV5ZbCja19kQo7"
        },
        {
            Id: "12345abcdesas212",
            Date: new Date(2022, 11, 7),
            Venue: "Blanco 889, Valparaíso",
            IsSelected: false,
            Capacity: 150,
            NameVenue: "Woo Club",
            ImageMap: "/images/googleMapWooClub.jpg",
            LinkGoogleMap: "https://goo.gl/maps/mPvXV5ZbCja19kQo7"
        },
    ],
    Attributes: ["Rock", "Conciertos", "Festivales"],
    Category: "Bar Restaurant",
    Likes: 400,
    WishList: 50,
    Images: ["/images/thedoor1.jpg", "/images/thedoor2.jpg", "/images/thedoor3.jpg", "/images/thedoor4.jpg"/*, "/images/thedoor5.jpg"*/],
    Video: "images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
    Contact: [
        {
            Id: "contact000",
            Icon: GlobalConst.sourceImages.googleMap,
            Link: "www.elhuevo.cl"
        },
        {
            Id: "contact002",
            Icon: GlobalConst.sourceImages.whatsaapIcon,
            Link: "+56934579283"
        },
        {
            Id: "contact001",
            Icon: GlobalConst.sourceImages.tiktokIcon,
            Link: "/test"
        },
        {
            Id: "contact003",
            Icon: GlobalConst.sourceImages.instagramICon,
            Link: "/test2"
        },
        {
            Id: "contact004",
            Icon: GlobalConst.sourceImages.facebookIcon,
            Link: "/test3"
        }
    ],
    Whatssapp: 987347654,
    Instagram: "/",
    TikTok: "/",
    Facebook: "/",
    WebPage: "/",
}
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
    /*    {
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
        },*/
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
    /*    {
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

        },*/
]
const listProducts: Product[] = [
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza",
        Rating: 2
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Tag: "Energetica",
        Rating: 3
    },
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack",
        Rating: 4
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica",
        Rating: 5
    },
]
const listProductsAdd: Product[] = [
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas",
        Rating: 0
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Tag: "Bebida",
        Rating: 4
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica",
        Rating: 5
    },
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack",
        Rating: 4
    },
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
const reviewSection: ReviewSection = {
    Rating: 4,
    TotalReview: 91,
    Reviews: [
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
        {
            Id: "idReview004",
            Rating: 4,
            Date: new Date(2022, 9, 23),
            Likes: 120,
            ByWho: "Paola Stevens",
            Title: "Bueno, bueno",
            ProfileImage: "/images/fotoperfil4.png",
            Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

        },
    ],
    ReviewBreakDown: [30, 30, 20, 15, 5]
}
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
const allDateToFind: DateAreaSelected[] = [
    {
        Id: "dateAreaSelected001",
        NameVenue: "Estadio Nacional de Chile",
        Date: {
            Id: "12345",
            Date: new Date(2022, 8, 18),
            Venue: "Blanco 1386, Punta Arenas",
            IsSelected: false,
            Capacity: 200,
            NameVenue: "El Huevo",
            ImageMap: "/images/googleMapHuevo.jpg",
            LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

        },
        Area: [
            {
                Id: "dateSelected001",
                Name: "Area 001.1",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    },
                    {
                        Id: "Zona 007",
                        Name: "Zona 007.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Gray"
                    },
                    {
                        Id: "Zona 008",
                        Name: "Zona 008.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Black"
                    }
                ],
                IsSelected: true
            },
            {
                Id: "dateSelected002",
                Name: "Area 002.1",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                ],
                IsSelected: false
            },
            {
                Id: "dateSelected003",
                Name: "Area 003.1",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.1.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    }
                ],
                IsSelected: false
            }
        ],
        MapImage: `/images/juventusFinal.svg`
    },
    {
        Id: "dateAreaSelected002",
        NameVenue: "Estadio Monumental de Chile",
        Date: {
            Id: "12345",
            Date: new Date(2022, 8, 18),
            Venue: "Blanco 1386, Santiago",
            IsSelected: false,
            Capacity: 200,
            NameVenue: "El Huevo",
            ImageMap: "/images/googleMapHuevo.jpg",
            LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

        },
        Area: [
            {
                Id: "dateSelected001",
                Name: "Area 001.2",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006.2.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    }
                ],
                IsSelected: true
            },
        ],
        MapImage: `/images/juventusFinal.svg`
    },
    {
        Id: "dateAreaSelected003",
        NameVenue: "Estadio Universidad de Chile",
        Date: {
            Id: "12345",
            Date: new Date(2022, 8, 18),
            Venue: "Blanco 1386, Valparaiso",
            IsSelected: false,
            Capacity: 200,
            NameVenue: "El Huevo",
            ImageMap: "/images/googleMapHuevo.jpg",
            LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

        },
        Area: [
            {
                Id: "dateSelected001",
                Name: "Area 001.3",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    }
                ],
                IsSelected: true
            },
            {
                Id: "dateSelected002",
                Name: "Area 002.3",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    }
                ],
                IsSelected: false
            },
            {
                Id: "dateSelected003",
                Name: "Area 003.3",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.3.3",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    }
                ],
                IsSelected: false
            },
            {
                Id: "dateSelected004",
                Name: "Area 004.3",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.4.4",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.4.4",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.4.4",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    }
                ],
                IsSelected: false
            },

        ],
        MapImage: `/images/juventusFinal.svg`
    }
]
const sectionTickets: TicketSectionSiteEvents = {
    Id: "idSectionTickets09823093",
    AllDates: [
        {
            Id: "dateAreaSelected001",
            Venue: "Direction 001",
            Date: new Date(2022, 11, 20),
            IsSelected: true
        },
        {
            Id: "dateAreaSelected002",
            Venue: "Direction 001",
            Date: new Date(2022, 11, 22),
            IsSelected: false
        },
        {
            Id: "dateAreaSelected003",
            Venue: "Direction 001",
            Date: new Date(2022, 11, 24),
            IsSelected: false
        }
    ],
    FirstDateSelected: allDateToFind[0]
    /* {
        Id: "dateAreaSelected001",
        NameVenue: "Estadio Nacional de Chile",
        Date: {
            Id: "12345",
            Date: new Date(2022, 8, 18),
            Venue: "Blanco 1386, Punta Arenas",
            IsSelected: false,
            Capacity: 200,
            NameVenue: "El Huevo",
            ImageMap: "/images/googleMapHuevo.jpg",
            LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

        },
        Area: [
            {
                Id: "dateSelected001",
                Name: "Area 001",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    }
                ],
                IsSelected: true
            },
            {
                Id: "dateSelected002",
                Name: "Area 002",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006.1",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    }
                ],
                IsSelected: false
            },
            {
                Id: "dateSelected003",
                Name: "Area 003",
                Zones: [
                    {
                        Id: "Zona 001",
                        Name: "Zona 001.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Red"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 002.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 10,
                        Include: null,
                        Color: "Blue"
                    },
                    {
                        Id: "Zona 003",
                        Name: "Zona 003.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 25,
                        Include: null,
                        Color: "Orange"
                    },
                    {
                        Id: "Zona 004",
                        Name: "Zona 004.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 20,
                        Include: null,
                        Color: "Green"
                    },
                    {
                        Id: "Zona 005",
                        Name: "Zona 005.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: 70,
                        Include: null,
                        Color: "Yellow"
                    },
                    {
                        Id: "Zona 006",
                        Name: "Zona 006.2",
                        MinPrice: 9990,
                        MaxPrice: 21990,
                        Discount: null,
                        Include: "Lleve 2 pague 1",
                        Color: "Purple"
                    }
                ],
                IsSelected: false
            }
        ],
        MapImage: `/images/juventusFinal.svg`
    }*/
}

export const OfferProductsContext = createContext(null)
export const ProductsContext = createContext(null)
export const NewsContext = createContext(null)
export const OtherEventsContext = createContext(null)
export const ReviewContext = createContext(null)
export const QuestionContext = createContext(null)
export const InSearchContext = createContext(null)
export const PrincipalInfoEventContext = createContext(null)
export const TicketSectionContext = createContext(null)

export default function EventProvider({children}) {
    let [offerProducts, setOfferProducts] = useState(listOfferProducts)
    let [products, setProducts] = useState(listProducts)
    let [otherEvents, setOtherEvents] = useState(listInitialRecommended)
    let [news, setNews] = useState(listInitialNews)
    let [dateArea, setDateArea] = useState(sectionTickets.FirstDateSelected)
    let [allDates, setAllDates] = useState(sectionTickets.AllDates)
    const handleRightClickProductsOffer = () => setOfferProducts(offerProducts = listOfferProductsAdd)
    const handleLeftClickProductsOffer = () => setOfferProducts(offerProducts = listOfferProducts)
    const handleRightClickProducts = () => setProducts(products = listProductsAdd)
    const handleLeftClickProducts = () => setProducts(products = listProducts)
    const handleRightClickRecomended = () => setOtherEvents(otherEvents = listRecomendedAdd)
    const handleLeftClickRecomended = () => setOtherEvents(otherEvents = listInitialRecommended)
    const handleRightClickNews = () => setNews(news = listNewsAdd)
    const handleLeftClickNews = () => setNews(news = listInitialNews)
    const handleDateSelected = (id: string) => {
        let newDates = allDates.map(item => {
            if (item.Id == id) return {...item, IsSelected: true}
            else return {...item, IsSelected: false}
        })
        setAllDates(allDates = newDates)

        allDateToFind.forEach(item => {
            if (item.Id == id) setDateArea(dateArea = item)
        })
    }
    const handleAreaSelected = (id: string) => {
        let newAreaSelected = dateArea.Area.map(item => {
            if (item.Id == id) return {...item, IsSelected: true}
            else return {...item, IsSelected: false}
        })
        let newDateArea: DateAreaSelected = {...dateArea, Area: newAreaSelected}
        setDateArea(dateArea = newDateArea)

    }

    let providerOfferProducts: ProviderOfferProducts = {
        InitialItems: offerProducts,
        RightClick: handleRightClickProductsOffer,
        LeftClick: handleLeftClickProductsOffer
    }
    let providerProducts: ProviderOfferProducts = {
        InitialItems: products,
        RightClick: handleRightClickProducts,
        LeftClick: handleLeftClickProducts
    }
    let providerOtherEvents: ProviderRecommended = {
        InitialItems: otherEvents,
        RightClick: handleRightClickRecomended,
        LeftClick: handleLeftClickRecomended
    }
    let providerNews: ProviderNewsEvents = {
        InitialItems: news,
        RightClick: handleRightClickNews,
        LeftClick: handleLeftClickNews
    }
    let providerSectionTicket: ProviderSectionTicket = {
        MainInfo: sectionTickets,
        AllDates: allDates,
        DateSelected: dateArea,
        SelectDate: handleDateSelected,
        SelectArea: handleAreaSelected
    }
    return (
        <PrincipalInfoEventContext.Provider value={principalInfo}>
            <TicketSectionContext.Provider value={providerSectionTicket}>
                <OfferProductsContext.Provider value={providerOfferProducts}>
                    <ProductsContext.Provider value={providerProducts}>
                        <NewsContext.Provider value={providerNews}>
                            <OtherEventsContext.Provider value={providerOtherEvents}>
                                <ReviewContext.Provider value={reviewSection}>
                                    <QuestionContext.Provider value={listQuestions}>
                                        <InSearchContext.Provider value={listForm}>
                                            {children}
                                        </InSearchContext.Provider>
                                    </QuestionContext.Provider>
                                </ReviewContext.Provider>
                            </OtherEventsContext.Provider>
                        </NewsContext.Provider>
                    </ProductsContext.Provider>
                </OfferProductsContext.Provider>
            </TicketSectionContext.Provider>
        </PrincipalInfoEventContext.Provider>
    )
}