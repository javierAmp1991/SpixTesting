import {Filters} from "../components/Desktop/Search/subcategoryContainer";
import {SubcategoryFilter} from "../components/Desktop/Search/subcategoryContainer";
import {GlobalConst} from "../public/globalConst";
import exp from "constants";

export enum priceFilters {
    TitleSubcategory = 'Precios',
    less15k = 'Menor que $15.000',
    less50k = "Menor que $50.000",
    greater50k = "Mayor que $50.000",
    priceRange = "priceRange",
}

export enum dateFilters {
    titleSubcategory = 'Fecha',
    today = 'Hoy',
    thisWeek = 'Esta semana',
    thisMonth = 'Este mes',
    rangeDate = 'rangeDate'
}

export enum discountFilters {
    titleSubcategory = "Descuentos",
    less25 = 'Hasta 25% dcto',
    less50 = 'Hasta 50% dcto',
    greater50 = 'Mas 50% dcto'
}

const atributesType: string = "Atributos"

export namespace AtributesData {
    export const listAtributes: SubcategoryFilter[] = [
        {Name: "Corte ondulado", id: "abcde", isChecked: false},
        {Name: "Comida al paso", id: "abcdef", Type: "atributesCat", isChecked: false},
        {Name: "Festival callejero", id: "fg", Type: "atributesCat", isChecked: false},
    ]
}

export namespace AtributesDataFilter {
    export const atributes: Filters = {
        FilterName: atributesType,
        SubCategorys:
            [
                {Name: "Corte Ondulado", id: "123", Type: atributesType, isChecked: false},
                {Name: "Comida al paso", id: "1234", Type: atributesType, isChecked: false},
                {Name: "Festival Callejero", id: "12345", Type: atributesType, isChecked: false},
                {Name: "Restaurantes de sushi", id: "123456", Type: atributesType, isChecked: false},
                {Name: "Discos", id: "1234567", Type: atributesType, isChecked: false},
                {Name: "Masaje terapeutico", id: "12345678", Type: atributesType, isChecked: false}
            ]
    }
}

export namespace FiltersData {
    export const listFilters: Filters[] = [
        /*{
            FilterName: atributesType,
            SubCategorys:
                [
                    {Name: "Corte Ondulado", id: "123", Type: atributesType, isChecked:false},
                    {Name: "Comida al paso", id: "1234", Type: atributesType, isChecked:false},
                    {Name: "Festival Callejero", id: "12345", Type: atributesType, isChecked:false},
                    {Name: "Restaurantes de sushi", id: "123456", Type: atributesType, isChecked:false},
                    {Name: "Discos", id: "1234567", Type: atributesType, isChecked:false},
                    {Name: "Masaje terapeutico", id: "12345678", Type: atributesType, isChecked:false}
                ]
        },*/
        {
            FilterName: priceFilters.TitleSubcategory,
            SubCategorys:
                [
                    {Name: priceFilters.less15k, Type: priceFilters.TitleSubcategory, id: "123", isChecked: false},
                    {Name: priceFilters.less50k, Type: priceFilters.TitleSubcategory, id: "1234", isChecked: false},
                    {Name: priceFilters.greater50k, Type: priceFilters.TitleSubcategory, id: "12345", isChecked: false},
                    {
                        Name: priceFilters.priceRange,
                        Type: priceFilters.TitleSubcategory,
                        id: "123456",
                        isChecked: false
                    },
                ]
        },
        {
            FilterName: dateFilters.titleSubcategory,
            SubCategorys: [
                {Name: dateFilters.today, Type: dateFilters.titleSubcategory, id: "123a", isChecked: false},
                {Name: dateFilters.thisWeek, Type: dateFilters.titleSubcategory, id: "1234a", isChecked: false},
                {Name: dateFilters.thisMonth, Type: dateFilters.titleSubcategory, id: "1235a", isChecked: false},
                {Name: dateFilters.rangeDate, Type: dateFilters.titleSubcategory, id: "1236a", isChecked: false},
            ]
        },
        {
            FilterName: discountFilters.titleSubcategory,
            SubCategorys: [
                {Name: discountFilters.less25, Type: discountFilters.titleSubcategory, id: "123ab", isChecked: false},
                {Name: discountFilters.less50, Type: discountFilters.titleSubcategory, id: "1234ab", isChecked: false},
                {
                    Name: discountFilters.greater50,
                    Type: discountFilters.titleSubcategory,
                    id: "12345ab",
                    isChecked: false
                },
            ]
        }
    ]
}

export namespace Offer {
    export const listOffers: string[] = [
        "Hasta 50%",
        "Leva 2 paga 1",
        "Dcto 2 uni."
    ]
}

export namespace PublicityData {
    export const publicityList: string[] = [
        "/images/publicidad2.jpg",
        "/images/publicidad1.jpg",
    ]
}

export namespace FeaturedHome {
    export const listFeaturedHome: EventLookUp[] = [
        {
            EventId: "123456",
            EventName: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",

            Popularity: 160,
            Rating: 42,
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
            TotalTickets: 10000,
            SoldTickets: 9950,
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
            PeriodicDays: null,
            InVenues: "Cine Planet",
            HasPromotableOffers: true,
            CoverImage: "/images/thorlov.jpg",
            Tags: ["Accion", "Aventura", "Superheroes"],
            LogoPath: "/images/cineplanet.png"
        },
        {
            EventId: "12345",
            EventName: "Minions: Nace un villano",
            Subtitle: "Minions: Nace un villano",

            Popularity: 10,
            Rating: 37,
            TicketPriceMin: 8990,
            TicketPriceMax: 49990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 2, 8),
            MaxDate: new Date(2022, 2, 8),
            PeriodicDays: null,
            InVenues: "Cine Mark",
            HasPromotableOffers: false,
            CoverImage: "/images/minions.jpg",
            Tags: ["Comedia", "Aventura", "Accion"],
            LogoPath: "/images/cinemark.png"

        },
        {
            EventId: "1234",
            EventName: "Jurassic World: Dominion",
            Subtitle: "Jurassic World: Dominion",

            Popularity: 10,
            Rating: 48,
            TicketPriceMin: 7990,
            TicketPriceMax: 39990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 3, 8),
            MaxDate: new Date(2022, 3, 8),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Cine Hoyts",
            HasPromotableOffers: false,
            CoverImage: "/images/jurassic.jpg",
            Tags: ["Accion", "Aventura", "Ficcion"],
            LogoPath: "/images/cinehoyts.png"

        },
        {
            EventId: "123",
            EventName: "Light Year",
            Subtitle: "Light Year",

            Popularity: 1,
            Rating: 39,
            TicketPriceMin: 7990,
            TicketPriceMax: 39990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 4, 8),
            MaxDate: new Date(2022, 4, 8),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Cine Hoyts",
            HasPromotableOffers: false,
            CoverImage: "/images/lightYear.jpg",
            Tags: ["Accion", "Aventura", "Ficcion"],
            LogoPath: "/images/cinehoyts.png"

        },
        {
            EventId: "12",
            EventName: "Top Gun Maverick",
            Popularity: 160,
            Rating: 35,
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
            TotalTickets: 10000,
            SoldTickets: 9950,
            MinDate: new Date(2022, 5, 8),
            MaxDate: new Date(2022, 5, 8),
            PeriodicDays: null,
            InVenues: "Cine Planet",
            HasPromotableOffers: true,
            CoverImage: "/images/topgun.jpg",
            Tags: ["Accion", "Aventura", "Ficcion"],
            LogoPath: "/images/cineplanet.png"
        },
        {
            EventId: "1",
            EventName: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",


            Popularity: 160,
            Rating: 42,
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
            TotalTickets: 10000,
            SoldTickets: 9950,
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
            PeriodicDays: null,
            InVenues: "Cine Planet",
            HasPromotableOffers: true,
            CoverImage: "/images/thorlov.jpg",
            Tags: ["Accion", "Aventura", "Superheroes"],
            LogoPath: "/images/cineplanet.png"
        },
    ]
}

export namespace HomeBannerData {
    export const listBanners: string[] = [
        "/images/bannerHd.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner1.jpg",
        "/images/banner5.jpg",
        "/images/banner6.jpg",
        "/images/banner7.jpg",
        "/images/banner8.jpg",
        "/images/banner10.jpg",
    ]
}

export namespace CarrouselAutoHome {
    export const listImage: string[] = [
        "/images/auto1.jpg",
        "/images/auto2.jpg",
        "/images/auto3.jpg",
        "/images/auto4.jpg",
        "/images/auto5.jpg",
        "/images/auto6.jpg",
        "/images/auto7.jpg",
        "/images/auto8.jpg",
        "/images/auto9.jpg",
        "/images/auto10.jpg",
        "/images/auto11.jpg",
        "/images/auto12.jpg",
        "/images/auto14.jpg",
        "/images/auto13.jpg",
        "/images/auto15.jpg",
        "/images/auto16.jpg",
    ];
}

export class MenuHeader {
    Name: string
    Link: string
    Id: string
}

export namespace Menu {
    export const listMenu: MenuHeader[] = [
        {
            Name: "Ofertas",
            Link: "/offerSearch",
            Id: "1234"
        },
        {
            Name: "Destacados",
            Link: "/featuredSearch",
            Id: "12sdsd3c478dcasdsad123"
        },
        {
            Name: "Entretencion",
            Link: "/entertaimentSearch",
            Id: "123cdsf47dsd"
        },
        {
            Name: "Deportes",
            Link: "/sportSearch",
            Id: "12347lñfdsf"
        },
        {
            Name: "Comida",
            Link: "/searchRestaurant",
            Id: "12346"
        },
        {
            Name: "Servicios",
            Link: "/servicesSearch",
            Id: "12347"
        },
        {
            Name: "Reseñas",
            Link: "/reviewSearch",
            Id: "123478"
        },
        {
            Name: "Noticias",
            Link: "/newsSearch",
            Id: "123478dasdsad123"
        },
        {
            Name: "Reventa",
            Link: "/resaleEventSearch",
            Id: "123xcc478dasdsad123"
        },
    ]
}

export namespace InformationHomeData {
    export const listInformationHome: InformationHome[] = [
        {
            Title: "Descubre nuestras",
            SubTitle: "opciones para tener la mejor experiencia"
        },
        {
            Title: "Verifica tu cuenta",
            SubTitle: "Y ten accesos a todos los beneficios de Spix",
            LinkImage: "/images/identiMor.png"
        },
        {
            Title: "Reventa entradas",
            SubTitle: "Vende las entradas que no puedas usar a traves de Spix",
            LinkImage: "/images/stadiumRounMor.png"
        },
        {
            Title: "Eventos en tu ciudad",
            SubTitle: "Encuentra los eventos que hay hoy en tu ciudad",
            LinkImage: "/images/stadiumRounMor.png"
        }
    ]
}

export namespace DailyOfferData {
    export const dailyOffer: EventLookUp = {
        EventId: "1235",
        EventName: "Tributo a Pet Shop Boys y A Ha",
        Subtitle: "Lo mejor del Rock Internacional",
        Rating: 30,
        Tags: ["Hasta 50%", "Dcto 2 uni."],
        BannerPath: "/images/banner.png",
        LogoPath: "/images/logo el Huevo.jpg",
        ListProducts: [
            {
                Name: "Producto 1.1",
                Price: 18990,
                DiscountPercent: 10,
                Include: "Lleve 2 pague 1",
                ImagePath: "/images/product1.jpg"
            },
            {
                Name: "Producto 2.1", Price: 4990,
                DiscountPercent: 25,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product2.jpg"
            },
            {
                Name: "Producto 3.1",
                Price: 1990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product3.jpg"
            },
            {
               Name: "Producto 4.1",
               Price: 2990,
               DiscountPercent: 25,
               Include: null,
               ImagePath: "/images/product4.jpg"
           },
            /*{
                 Name: "Producto 5.1",
                 Price: 990,
                 DiscountPercent: 30,
                 Include: null,
                 ImagePath: "/images/product5.jpg"
             },
             {
                 Name: "Producto 6.1",
                 Price: 9990,
                 DiscountPercent: 20,
                 Include: "Dcto 2 Un.",
                 ImagePath: "/images/product6.jpg"
             },
             {
                 Name: "Producto 7.1",
                 Price: 10990,
                 DiscountPercent: 30,
                 Include: null,
                 ImagePath: "/images/product7.jpg"
             },
             {
                 Name: "Producto 8.1",
                 Price: 10990,
                 DiscountPercent: 30,
                 Include: null,
                 ImagePath: "/images/product8.jpg"
             },
             {
                 Name: "Producto 9.1",
                 Price: 10990,
                 DiscountPercent: 30,
                 Include: null,
                 ImagePath: "/images/product9.jpg"
             },
             {
                 Name: "Producto 10.1",
                 Price: 6990,
                 DiscountPercent: 30,
                 Include: null,
                 ImagePath: "/images/product10.jpg"
             }*/
        ],
        ListAtributes: ["Rock", "Conciertos", "Festivales"],
        Category: "Bar Restaurant"
    }
}

export namespace DailyOfferData2 {
    export const dailyOffer: EventLookUp = {
        EventId: "1235",
        EventName: "Tributo a Pet Shop Boys y A Ha",
        Subtitle: "Lo mejor del Rock Internacional",
        Rating: 30,
        Tags: ["Hasta 50%", "Leva 2 paga 1"],
        BannerPath: "/images/banner5.jpg",
        LogoPath: "/images/logo el Huevo.jpg",
        ListProducts: [
            {
                Name: "Producto 1.1",
                Price: 18990,
                DiscountPercent: 10,
                Include: "Lleve 2 pague 1",
                ImagePath: "/images/product5.jpg"
            },
            {
                Name: "Producto 2.1", Price: 4990,
                DiscountPercent: 25,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product6.jpg"
            },
            {
                Name: "Producto 3.1",
                Price: 1990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product7.jpg"
            },
            {
                Name: "Producto 4.1",
                Price: 2990,
                DiscountPercent: 25,
                Include: null,
                ImagePath: "/images/product8.jpg"
            },
        ],
        ListAtributes: ["Rock", "Conciertos", "Festivales"],
        Category: "Bar Restaurant"
    }
}

export namespace OfferSearchData{
    export const list: EventLookUp[] = [
        {
            EventId: "1235",
            EventName: "Tributo a Pet Shop Boys y A Ha",
            Subtitle: "Lo mejor del Rock Internacional",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner.png",
            LogoPath: "/images/logo el Huevo.jpg",
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product2.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product3.jpg"
                },
            ],
            ListAtributes: ["Rock", "Conciertos", "Festivales"],
            Category: "Bar Restaurant"
        },
        {
            EventId: "12356",
            EventName: "Star Wars Sinfonico",
            Subtitle: "Orquesta sinfonica 2022",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner2.jpg",
            LogoPath: "/images/logo el Huevo.jpg",
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product4.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product5.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product6.jpg"
                },
            ],
            ListAtributes: ["Rock", "Conciertos", "Festivales"],
            Category: "Bar Restaurant"
        },
        {
            EventId: "12357",
            EventName: "Seafret, most of us",
            Subtitle: "Latin American Tour",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner3.jpg",
            LogoPath: "/images/logo el Huevo.jpg",
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product7.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product8.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product9.jpg"
                },
            ],
            ListAtributes: ["Rock", "Conciertos", "Festivales"],
            Category: "Bar Restaurant"
        },
        {
            EventId: "12358",
            EventName: "Nikkita Wild",
            Subtitle: "Nikkita wild",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner5.jpg",
            LogoPath: "/images/logo el Huevo.jpg",
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product10.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product2.jpg"
                },
            ],
            ListAtributes: ["Rock", "Conciertos", "Festivales"],
            Category: "Bar Restaurant"
        }
    ]
}

export namespace ListOffertData {
    export const listOffert: EventLookUp[] = [
        {
            EventId: "1235",
            EventName: "Dcto Medios de pago",
            Subtitle: "Asociado a Falabella",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner.png",
            LogoPath: "/images/logo el Huevo.jpg",
            TicketPriceMin: 9990,
            TicketPriceMax: 12999,
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product2.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product3.jpg"
                },
/*                {
                    Name: "Producto 4.1",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/product4.jpg"
                },
                {
                    Name: "Producto 5.1",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product5.jpg"
                },
                {
                    Name: "Producto 6.1",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product6.jpg"
                },
                {
                    Name: "Producto 7.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product7.jpg"
                },
                {
                    Name: "Producto 8.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product8.jpg"
                },
                {
                    Name: "Producto 9.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product9.jpg"
                },
                {
                    Name: "Producto 10.1",
                    Price: 6990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product10.jpg"
                },*/
            ],
            Category: "Descuentos"
        },
        {
            EventId: "12357",
            EventName: "Dcto hasta agotar stock",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner.png",
            LogoPath: "/images/logo el Huevo.jpg",
            TicketPriceMin: 9990,
            TicketPriceMax: 9999,
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product2.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product3.jpg"
                },
                {
                    Name: "Producto 4.1",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/product4.jpg"
                },
                {
                    Name: "Producto 5.1",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product5.jpg"
                },
                {
                    Name: "Producto 6.1",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product6.jpg"
                },
                {
                    Name: "Producto 7.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product7.jpg"
                },
                {
                    Name: "Producto 8.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product8.jpg"
                },
                {
                    Name: "Producto 9.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product9.jpg"
                },
                {
                    Name: "Producto 10.1",
                    Price: 6990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product10.jpg"
                },
            ]
        },
        {
            EventId: "12359",
            EventName: "Dcto todo medio de pago",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner.png",
            LogoPath: "/images/logo el Huevo.jpg",
            TicketPriceMin: 9990,
            TicketPriceMax: 13999,
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product2.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product3.jpg"
                },
                {
                    Name: "Producto 4.1",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/product4.jpg"
                },
                {
                    Name: "Producto 5.1",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product5.jpg"
                },
                {
                    Name: "Producto 6.1",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product6.jpg"
                },
                {
                    Name: "Producto 7.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product7.jpg"
                },
                {
                    Name: "Producto 8.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product8.jpg"
                },
                {
                    Name: "Producto 9.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product9.jpg"
                },
                {
                    Name: "Producto 10.1",
                    Price: 6990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product10.jpg"
                },
            ]
        },
        {
            EventId: "12359",
            EventName: "Dcto todo medio de pago",
            Rating: 30,
            Tags: ["Hasta 50%", "Leva 2 paga 1", "Dcto 2 uni."],
            BannerPath: "/images/banner.png",
            LogoPath: "/images/logo el Huevo.jpg",
            TicketPriceMin: 9990,
            TicketPriceMax: 13999,
            ListProducts: [
                {
                    Name: "Producto 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product1.jpg"
                },
                {
                    Name: "Producto 2.1", Price: 4990,
                    DiscountPercent: 25,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product2.jpg"
                },
                {
                    Name: "Producto 3.1",
                    Price: 1990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product3.jpg"
                },
                {
                    Name: "Producto 4.1",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/product4.jpg"
                },
                {
                    Name: "Producto 5.1",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product5.jpg"
                },
                {
                    Name: "Producto 6.1",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/product6.jpg"
                },
                {
                    Name: "Producto 7.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product7.jpg"
                },
                {
                    Name: "Producto 8.1",
                    Price: 10990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product8.jpg"
                },
            ]
        }
    ]
}

export namespace ListProductsExtra {
    export const listProducts: Product[] = [
        {
            Name: "Producto 1.1",
            Price: 18990,
            DiscountPercent: 10,
            Include: "Lleve 2 pague 1",
            ImagePath: "/images/product1.jpg",
            Tag: "Cerveza"
        },
        {
            Name: "Producto 2.2",
            Price: 2990,
            DiscountPercent: 25,
            Include: null,
            ImagePath: "/images/product4.jpg",
            Tag: "Energetica"
        },
        {
            Name: "Producto 3.3",
            Price: 990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product5.jpg",
            Tag: "Snack"
        },
        {
            Name: "Producto 4.4",
            Price: 9990,
            DiscountPercent: 20,
            Include: "Dcto 2 Un.",
            ImagePath: "/images/product6.jpg",
            Tag: "Energetica"
        },
        {
            Name: "Producto 5.5",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product7.jpg",
            Tag: "Bebida"
        },
        {
            Name: "Producto 6.6",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product8.jpg",
            Tag: "Energeticas"
        },
        {
            Name: "Producto 1.1",
            Price: 18990,
            DiscountPercent: 10,
            Include: "Lleve 2 pague 1",
            ImagePath: "/images/product1.jpg",
            Tag: "Cerveza"
        },
    ]
}

export namespace ListProducts {
    export const listProducts: Product[] = [
        {
            Name: "Producto 1.1",
            Price: 18990,
            DiscountPercent: 10,
            Include: "Lleve 2 pague 1",
            ImagePath: "/images/product1.jpg",
            Tag: "Cerveza"
        },
        {
            Name: "Producto 2.2",
            Price: 2990,
            DiscountPercent: 25,
            Include: null,
            ImagePath: "/images/product4.jpg",
            Tag: "Energetica"
        },
        {
            Name: "Producto 3.3",
            Price: 990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product5.jpg",
            Tag: "Snack"
        },
        {
            Name: "Producto 4.4",
            Price: 9990,
            DiscountPercent: 20,
            Include: "Dcto 2 Un.",
            ImagePath: "/images/product6.jpg",
            Tag: "Energetica"
        },
        {
            Name: "Producto 5.5",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product7.jpg",
            Tag: "Bebida"
        },
        {
            Name: "Producto 6.6",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product8.jpg",
            Tag: "Energeticas"
        },
    ]
}

export class sectionProduct {
    Title: string;
    listItems: productSelected[]
}

export class productSelected {
    Product: Product
    IsSelected: boolean
}

export class productAmount {
    Product: Product;
    Amount: number;
}

export class GuestProducts {
    NameGuest: string
    ListProducts: Product[]
}

export namespace ListProducts2 {
    export const listProducts: sectionProduct[] = [
        {
            Title: "Cervezas",
            listItems: [
                {
                    Product: {
                        Name: "Ceveza 1.1",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/cerveza1.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Cerveza 2.2",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/cerveza2.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false
                },
                {
                    Product: {
                        Name: "Cerveza 3.3",
                        Price: 2990,
                        DiscountPercent: 25,
                        Include: null,
                        ImagePath: "/images/cerveza3.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
                ,
                {
                    Product: {
                        Name: "Cerveza 4.4",
                        Price: 990,
                        DiscountPercent: 30,
                        Include: null,
                        ImagePath: "/images/product2.jpg",
                        Tag: "Snack"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Cerveza 5.5",
                        Price: 9990,
                        DiscountPercent: 20,
                        Include: "Dcto 2 Un.",
                        ImagePath: "/images/cerveza5.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
            ]
        },
        {
            Title: "Hamburguesas",
            listItems: [
                {
                    Product: {
                        Name: "Hamburguesa 1.1",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/hamb1.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Hamburguesa 2.2",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/hamb2.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false
                },
                {
                    Product: {
                        Name: "Hamburguesa 3.3",
                        Price: 2990,
                        DiscountPercent: 25,
                        Include: null,
                        ImagePath: "/images/hamb3.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
                ,
                {
                    Product: {
                        Name: "Hamburguesa 4.4",
                        Price: 990,
                        DiscountPercent: 30,
                        Include: null,
                        ImagePath: "/images/hamb4.jpg",
                        Tag: "Snack"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Hamburguesa 5.5",
                        Price: 9990,
                        DiscountPercent: 20,
                        Include: "Dcto 2 Un.",
                        ImagePath: "/images/hamb5.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
            ]
        },
        {
            Title: "Energeticas",
            listItems: [
                {
                    Product: {
                        Name: "Energetica 1.1",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/product6.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Energetica 2.2",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/product8.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false
                },
                {
                    Product: {
                        Name: "Energetica 3.3",
                        Price: 2990,
                        DiscountPercent: 25,
                        Include: null,
                        ImagePath: "/images/product9.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
                ,
                {
                    Product: {
                        Name: "Energetica 4.4",
                        Price: 990,
                        DiscountPercent: 30,
                        Include: null,
                        ImagePath: "/images/bebidas.jpg",
                        Tag: "Snack"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Energetica 5.5",
                        Price: 9990,
                        DiscountPercent: 20,
                        Include: "Dcto 2 Un.",
                        ImagePath: "/images/beb2.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
            ]
        },
        {
            Title: "Snacks",
            listItems: [
                {
                    Product: {
                        Name: "Snack 1.1",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/product3.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Snack 2.2",
                        Price: 18990,
                        DiscountPercent: 10,
                        Include: "Lleve 2 pague 1",
                        ImagePath: "/images/product5.jpg",
                        Tag: "Cerveza"
                    }, IsSelected: false
                },
                {
                    Product: {
                        Name: "Snack 3.3",
                        Price: 2990,
                        DiscountPercent: 25,
                        Include: null,
                        ImagePath: "/images/snack1.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                }
                ,
                {
                    Product: {
                        Name: "Snack 4.4",
                        Price: 990,
                        DiscountPercent: 30,
                        Include: null,
                        ImagePath: "/images/snack2.jpg",
                        Tag: "Snack"
                    }, IsSelected: false

                },
                {
                    Product: {
                        Name: "Snack 5.5",
                        Price: 9990,
                        DiscountPercent: 20,
                        Include: "Dcto 2 Un.",
                        ImagePath: "/images/snack3.jpg",
                        Tag: "Energetica"
                    }, IsSelected: false
                },
            ]
        }
    ]
}

export namespace ListProducts3 {
    export const listProducts: GuestProducts[] = [
        {
            NameGuest: "Javier",
            ListProducts: [
                {
                    Name: "Ceveza 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/cerveza1.jpg",
                    Tag: "Cerveza"

                },
                {
                    Name: "Cerveza 2.2",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/cerveza2.jpg",
                    Tag: "Cerveza"
                },
                {
                    Name: "Cerveza 3.3",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/cerveza3.jpg",
                    Tag: "Energetica"
                }
                ,
                {
                    Name: "Cerveza 4.4",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/product2.jpg",
                    Tag: "Snack"

                },
                {
                    Name: "Cerveza 5.5",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/cerveza5.jpg",
                    Tag: "Energetica"
                }
            ]
        },
        {
            NameGuest: "Felipe",
            ListProducts: [
                {
                    Name: "Hamburguesa 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/hamb1.jpg",
                    Tag: "Cerveza"

                },
                {
                    Name: "Hamburguesa 2.2",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/hamb2.jpg",
                    Tag: "Cerveza"
                },
                {
                    Name: "Hamburguesa 3.3",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/hamb3.jpg",
                    Tag: "Energetica"
                }
                ,
                {
                    Name: "Hamburguesa 4.4",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/hamb4.jpg",
                    Tag: "Snack"

                },
                {
                    Name: "Hamburguesa 5.5",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/hamb5.jpg",
                    Tag: "Energetica"
                }
            ]
        },
        {
            NameGuest: "Alejandro",
            ListProducts: [
                {
                    Name: "Energetica 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product6.jpg",
                    Tag: "Cerveza"

                },
                {
                    Name: "Energetica 2.2",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product8.jpg",
                    Tag: "Cerveza"
                },
                {
                    Name: "Energetica 3.3",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/product9.jpg",
                    Tag: "Energetica"
                }
                ,
                {
                    Name: "Energetica 4.4",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/bebidas.jpg",
                    Tag: "Snack"

                },
                {
                    Name: "Energetica 5.5",
                    Price: 9990,
                    DiscountPercent: 20,
                    Include: "Dcto 2 Un.",
                    ImagePath: "/images/beb2.jpg",
                    Tag: "Energetica"
                }
            ]
        },
        {
            NameGuest: "Fernanda",
            ListProducts: [
                {
                    Name: "Snack 1.1",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product3.jpg",
                    Tag: "Cerveza"

                },
                {
                    Name: "Snack 2.2",
                    Price: 18990,
                    DiscountPercent: 10,
                    Include: "Lleve 2 pague 1",
                    ImagePath: "/images/product5.jpg",
                    Tag: "Cerveza"
                },
                {
                    Name: "Snack 3.3",
                    Price: 2990,
                    DiscountPercent: 25,
                    Include: null,
                    ImagePath: "/images/snack1.jpg",
                    Tag: "Energetica"
                }
                ,
                {
                    Name: "Snack 4.4",
                    Price: 990,
                    DiscountPercent: 30,
                    Include: null,
                    ImagePath: "/images/snack2.jpg",
                    Tag: "Snack"

                },
            ]
        }
    ]
}

export namespace EventPageEvent {
    export const eventPage: EventLookUp = {
        EventId: "12345abcde",
        EventName: "Tributo a Pet Shop Boys y A Ha",
        Subtitle: "Lo mejor del Rock",
        Description: "Back to 80's en vivo: Noruega (Tributo A Ha ) y Suburbia (Tributo a Pet Shop Boys). Evento con aforo , según fase , para mayores de 18 años con pase de movilidad .Tenemos convenio con estacionamiento en Petrobras , Reserva tu estacionamiento al whatsapp : +56944864934",
        Rating: 30,
        Tags: ["Rock", "Conciertos", "Festivales"],
        BannerPath: "/images/banner.png",
        CoverImage: "/images/coverImage.jpg",
        LogoPath: "/images/logo el Huevo.jpg",
        ListRestriction: ["/images/hoody.png", "/images/cap.png", "/images/semiformal.png"],
        ListProducts: [
            {
                Name: "Producto 1.1",
                Price: 18990,
                DiscountPercent: 10,
                Include: "Lleve 2 pague 1",
                ImagePath: "/images/product1.jpg"
            },
            {
                Name: "Producto 2.1", Price: 4990,
                DiscountPercent: 25,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product2.jpg"
            },
            {
                Name: "Producto 3.1",
                Price: 1990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product3.jpg"
            },
            {
                Name: "Producto 4.1",
                Price: 2990,
                DiscountPercent: 25,
                Include: null,
                ImagePath: "/images/product4.jpg"
            },
            {
                Name: "Producto 5.1",
                Price: 990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product5.jpg"
            },
            {
                Name: "Producto 6.1",
                Price: 9990,
                DiscountPercent: 20,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product6.jpg"
            },
            {
                Name: "Producto 7.1",
                Price: 10990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product7.jpg"
            },
            {
                Name: "Producto 8.1",
                Price: 10990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product8.jpg"
            },
            {
                Name: "Producto 9.1",
                Price: 10990,
                DiscountPercent: 30,
                Include: null,
                ImagePath: "/images/product9.jpg"
            }
        ],
        ListImages: ["/images/thedoor1.jpg", "/images/thedoor2.jpg", "/images/thedoor3.jpg", "/images/thedoor4.jpg", "/images/thedoor5.jpg"],
        Video: "images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        VenueDate: [
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
                Venue: "Plaza Anibal Pinto 1182, Valparaíso",
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
        ]
    }
}

export namespace MostPopularData {
    export const listMostPopular: EventLookUp[] = [
        {
            CoverImage: "/images/elHuevo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
        },
        {
            CoverImage: "/images/cinzano.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
        },
        {
            CoverImage: "/images/woo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
        },
        {
            CoverImage: "/images/mascotas.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
        },
        /*        {
                    CoverImage: "/images/terraza.jpg",
                    TotalTickets: 1000,
                    SoldTickets: 990,
                }*/
    ]

}

export namespace DropDownData {
    export const listDropDown: EventLookUp[] = [
        {
            EventName: "Metallica WorldWired",
            CoverImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Asesino sin memoria",
            CoverImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Classic Music Festival",
            CoverImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Daddy Yankee World tour",
            CoverImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "Light Year",
            CoverImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Singer Concert",
            CoverImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Metallica WorldWired",
            CoverImage: "/images/cartel6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Asesino sin memoria",
            CoverImage: "/images/cartel7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Classic Music Festival",
            CoverImage: "/images/cartel8.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Daddy Yankee World tour",
            CoverImage: "/images/cartel9.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "Light Year",
            CoverImage: "/images/cartel10.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Singer Concert",
            CoverImage: "/images/cartel11.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Metallica WorldWired",
            CoverImage: "/images/cartel12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Asesino sin memoria",
            CoverImage: "/images/cartel13.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Classic Music Festival",
            CoverImage: "/images/cartel14.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        }
    ]
}

export namespace DropDownDataRestaurant {
    export const listDropDown: EventLookUp[] = [
        {
            EventName: "Cinzano",
            CoverImage: "/images/rest1.png",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Marco Polo",
            CoverImage: "/images/rest2.png",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Nomade",
            CoverImage: "/images/rest3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Amor y Pastas",
            CoverImage: "/images/rest4.jpeg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "La tienda de Pia",
            CoverImage: "/images/rest5.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Delicias",
            CoverImage: "/images/rest6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Delicious Food",
            CoverImage: "/images/rest7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Indra Restaurant",
            CoverImage: "/images/rest8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Food 4 You",
            CoverImage: "/images/rest9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Haitani Restaurant",
            CoverImage: "/images/rest10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "China Town",
            CoverImage: "/images/rest11.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "La Cabrera",
            CoverImage: "/images/rest12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
    ]
}

export namespace DropDownDataSport {
    export const listDropDown: EventLookUp[] = [
        {
            EventName: "Futbol de salon",
            CoverImage: "/images/sport1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Torneo Futbol",
            CoverImage: "/images/sport2.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Torneo de basketball",
            CoverImage: "/images/sport3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "The legends Tournament",
            CoverImage: "/images/sport4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "Torneo tenis senior",
            CoverImage: "/images/sport5.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Babolpa Cup",
            CoverImage: "/images/sport6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Boxing night",
            CoverImage: "/images/sport7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Boxing fight",
            CoverImage: "/images/sport8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Rugby Sur",
            CoverImage: "/images/sport9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "rugby Sudamericano",
            CoverImage: "/images/sport10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "2K22 Sprint",
            CoverImage: "/images/sport11.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Final Sprint",
            CoverImage: "/images/sport12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
    ]
}

export namespace DropDownDataServices {
    export const listDropDown: EventLookUp[] = [
        {
            EventName: "Salon Fame",
            CoverImage: "/images/serv1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Oslyala",
            CoverImage: "/images/serv2.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Ellora",
            CoverImage: "/images/serv3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Barber Shop",
            CoverImage: "/images/serv4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
        {
            EventName: "Marcelos",
            CoverImage: "/images/serv5M.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            InVenues: "movistar arena, estadio nacional, el huevo",
            TicketPriceMin: 8990,
            TicketPriceMax: 18990,
        },
        {
            EventName: "Isis",
            CoverImage: "/images/serv6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Teresa Azagra",
            CoverImage: "/images/serv7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 29990,
            TicketPriceMax: 299990,
        },
        {
            EventName: "Spa Luna",
            CoverImage: "/images/serv8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            InVenues: "Teatro Caupolican",
            TicketPriceMin: 9990,
            TicketPriceMax: 59990,
        },
        {
            EventName: "Beuty Spa",
            CoverImage: "/images/serv9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            InVenues: "Estadio nacional",
            TicketPriceMin: 7990,
            TicketPriceMax: 12990,
        },
        {
            EventName: "Dentistry",
            CoverImage: "/images/serv10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            InVenues: "Cinemark, Cine Hoyts, Cine Planet",
            TicketPriceMin: 6990,
            TicketPriceMax: 9990,
        },
    ]
}

export namespace DropDownNewSearch {
    export const listNews: News[] = [
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
            Id: "123sdad45",
            Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
            SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
            PathImage: "/images/new3.webp",
            Event: "Evento generico 1",
            Date: "Ayer",
            HasEvent: true
        },
        {
            Id: "1234asdsdh56",
            Title: "Trap latino de primera para inaugurar el Share Festival de Republica Dominicana",
            SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
            PathImage: "/images/new4.webp",
            Event: "Evento generico 1",
            Date: "Hace 3 dias",
            HasEvent: true
        },
        {
            Id: "123456ñlsñdl87",
            Title: "Ozzy Osbourne rompe nuevo récord: Número 1 del rock con su single «Patient Number 9»",
            SubTitle: "El single «Patient Number 9» de Ozzy Osbourne es todo un éxito porque en la primera semana de estreno, llegó al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, «Patient Number 9» obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, según Luminate.",
            PathImage: "/images/new5.webp",
            Event: "Evento generico 1",
            Date: "Hoy",
            HasEvent: true
        },
        {
            Id: "1234567dsadpp9388",
            Title: "Queen anuncia los detalles de “Rhapsody Over London”, un concierto espectacular que se emitirá para todo el mundo",
            SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
            PathImage: "/images/new6.webp",
            Event: "Evento generico 1",
            Date: "Hace 5 dias",
            HasEvent: false
        },
        {
            Id: "12aswdñlsñdl87",
            Title: "Ozzy Osbourne rompe nuevo récord: Número 1 del rock con su single «Patient Number 9»",
            SubTitle: "El single «Patient Number 9» de Ozzy Osbourne es todo un éxito porque en la primera semana de estreno, llegó al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, «Patient Number 9» obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, según Luminate.",
            PathImage: "/images/new7.webp",
            Event: "Evento generico 1",
            Date: "Ayer",
            HasEvent: true
        },
        {
            Id: "12sadl67dsadpp9388",
            Title: "Queen anuncia los detalles de “Rhapsody Over London”, un concierto espectacular que se emitirá para todo el mundo",
            SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
            PathImage: "/images/new8.webp",
            Event: "Evento generico 1",
            Date: "Hace 1 Semana",
            HasEvent: true
        },
    ]
}

export namespace Cines {
    export const listCines: EventLookUp[] = [
        {
            EventId: "123",
            CoverImage: "/images/cineplanet.png",
        },
        {
            EventId: "1234",
            CoverImage: "/images/cinehoyts.png",
        },
        {
            EventId: "12345",
            CoverImage: "/images/cinemark.png",
        },
        {
            EventId: "123456",
            CoverImage: "/images/cinesol.png",
        },
        {
            EventId: "1234567",
            CoverImage: "/images/condel.png",
        },
        {
            EventId: "12345678",
            CoverImage: "/images/cinearte.png",
        },
        {
            EventId: "123",
            CoverImage: "/images/cineplanet.png",
        },
        {
            EventId: "1234",
            CoverImage: "/images/cinehoyts.png",
        },
        {
            EventId: "12345",
            CoverImage: "/images/cinemark.png",
        },
        {
            EventId: "123456",
            CoverImage: "/images/cinesol.png",
        },
    ]
}

export namespace OwnPublicityData {
    export const listOwnPublicity: OwnPublicity[] = [
        {
            Title: "Reseña un evento",
            FirstText: "Escribe una reseña",
            SecondText: "y comparte tu opinion",
            LinkImage: "/images/writeReview.png"
        },
        {
            Title: "Noticias y Anuncios",
            FirstText: "Mantente al dia de",
            SecondText: "las ultimas novedades",
            LinkImage: "/images/newsNew.png"
        }
    ]
}

export namespace TodayInValpo {
    export const listEventLookUp: EventLookUp[] = [
        {
            EventId: "123456",
            EventName: "Restaurant Cinzano",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 6990,
            TicketPriceMax: 12990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PeriodicDays: null,
            InVenues: "Plaza Anibal Pinto 1182, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/cinzano.jpg",
        },
        {
            EventId: "1234567",
            EventName: "WOO! Club",
            Popularity: 10000,
            Rating: 30,
            TicketPriceMin: 5000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PeriodicDays: null,
            InVenues: "Blanco 889, Valparaiso",
            HasPromotableOffers: false,
            CoverImage: "/images/Woo.png",
        },
        {
            EventId: "12345678",
            EventName: "Black Phone",
            Popularity: 10,
            Rating: 30,
            TicketPriceMin: 3990,
            TicketPriceMax: 3990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PeriodicDays: null,
            InVenues: "Cine Hoyts",
            HasPromotableOffers: false,
            CoverImage: "/images/blackphone.png",
        },
        {
            EventId: "123456789",
            EventName: "Terraza Bellavista",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 9990,
            TicketPriceMax: 21990,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 4, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Blanco 1285, Valparaiso",
            HasPromotableOffers: false,
            CoverImage: "/images/terrraza1.png",
        },
        {
            EventId: "1234567890",
            EventName: "Marco Polo",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 7800,
            TicketPriceMax: 21800,
            TotalTickets: 10000,
            SoldTickets: 3000,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 4, 5),
            PeriodicDays: null,
            InVenues: "Pedro Montt 2199, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/marcoPolo.png",
        },
        {
            EventId: "12345678901",
            EventName: "Bar Civico",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 7990,
            TicketPriceMax: 15990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 5, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Calle Blanco 1273, Valparaiso",
            HasPromotableOffers: false,
            CoverImage: "/images/Civico.png",
        },
        {
            EventId: "123456",
            EventName: "Restaurant Cinzano",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 6990,
            TicketPriceMax: 12990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PeriodicDays: null,
            InVenues: "Plaza Anibal Pinto 1182, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/cinzano.jpg",
        },
        {
            EventId: "1234567",
            EventName: "WOO! Club",
            Popularity: 10000,
            Rating: 30,
            TicketPriceMin: 5000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PeriodicDays: null,
            InVenues: "Blanco 889, Valparaiso",
            HasPromotableOffers: false,
            CoverImage: "/images/Woo.png",
        },
        {
            EventId: "12345678",
            EventName: "Black Phone",
            Popularity: 10,
            Rating: 30,
            TicketPriceMin: 3990,
            TicketPriceMax: 3990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PeriodicDays: null,
            InVenues: "Cine Hoyts",
            HasPromotableOffers: false,
            CoverImage: "/images/blackphone.png",
        },
        {
            EventId: "123456789",
            EventName: "Terraza Bellavista",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 9990,
            TicketPriceMax: 21990,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 4, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Blanco 1285, Valparaiso",
            HasPromotableOffers: false,
            CoverImage: "/images/terrraza1.png",
        },
        {
            EventId: "1234567890",
            EventName: "Marco Polo",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 7800,
            TicketPriceMax: 21800,
            TotalTickets: 10000,
            SoldTickets: 3000,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 4, 5),
            PeriodicDays: null,
            InVenues: "Pedro Montt 2199, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/marcoPolo.png",
        },
    ]
}

export namespace InOffer {
    export const listInOffer: EventLookUp[] = [

        {
            EventId: "12",
            EventName: "Tenemos Explosivos",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 6000,
            TicketPriceMax: 7000,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 4, 1),
            MaxDate: new Date(2022, 4, 1),
            PeriodicDays: null,
            InVenues: "Blanco 1386, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/oferta6.jpg",
        },
        {
            EventId: "123",
            EventName: "KEVIN CORRAL",
            Popularity: 10000,
            Rating: 30,
            TicketPriceMin: 5000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            PeriodicDays: null,
            InVenues: "Quillota 192 esquina Benavente, Puerto Montt",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta2.jpg",
        },
        {
            EventId: "1234",
            EventName: "Mundos Magicos",
            Popularity: 10,
            Rating: 30,
            TicketPriceMin: 6000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            PeriodicDays: null,
            InVenues: "Av. Pajaritos; Frente al Cerro 15, Camino a la Farfana. Metro del Sol.",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta3.jpg",
        },
        {
            EventId: "12345",
            EventName: "Tributo Bon Jovi",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 9990,
            TicketPriceMax: 21990,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 5, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Tierras del Sol, Marga Marga 1892",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta4.jpg",
        },
        {
            EventId: "123456",
            EventName: "Aura club",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 8000,
            TicketPriceMax: 18000,
            TotalTickets: 10000,
            SoldTickets: 3000,
            MinDate: new Date(2022, 4, 1),
            MaxDate: new Date(2022, 4, 1),
            PeriodicDays: null,
            InVenues: "Aura CLub Vitacura, Avenida Vitacura 9339",
            HasPromotableOffers: true,
            CoverImage: "/images/oferta5.jpg",
        },
        {
            EventId: "1234567",
            EventName: "Todas Partes",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 7990,
            TicketPriceMax: 15990,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 5, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Artura Prat n°33, santiago, Metro U de Chile",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta1.jpg",
        },
        {
            EventId: "12",
            EventName: "Tenemos Explosivos",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 6000,
            TicketPriceMax: 7000,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 4, 1),
            MaxDate: new Date(2022, 4, 1),
            PeriodicDays: null,
            InVenues: "Blanco 1386, Valparaiso",
            HasPromotableOffers: true,
            CoverImage: "/images/oferta6.jpg",
        },
        {
            EventId: "123",
            EventName: "KEVIN CORRAL",
            Popularity: 10000,
            Rating: 30,
            TicketPriceMin: 5000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            PeriodicDays: null,
            InVenues: "Quillota 192 esquina Benavente, Puerto Montt",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta2.jpg",
        },
        {
            EventId: "1234",
            EventName: "Mundos Magicos",
            Popularity: 10,
            Rating: 30,
            TicketPriceMin: 6000,
            TicketPriceMax: 10000,
            TotalTickets: 10000,
            SoldTickets: 5000,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            PeriodicDays: null,
            InVenues: "Av. Pajaritos; Frente al Cerro 15, Camino a la Farfana. Metro del Sol.",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta3.jpg",
        },
        {
            EventId: "12345",
            EventName: "Tributo Bon Jovi",
            Popularity: 10,
            Rating: 300,
            TicketPriceMin: 9990,
            TicketPriceMax: 21990,
            TotalTickets: 10000,
            SoldTickets: 9990,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 5, 5),
            PeriodicDays: "Monday-13:00-22:00|Tuesday-11:00-18:00|Wednesday-8:00-17:00|Thursday-10:00-21:00|Friday-12:00-15:00|Saturday-8:00-21:00|Sunday-13:00-19:00",
            InVenues: "Tierras del Sol, Marga Marga 1892",
            HasPromotableOffers: false,
            CoverImage: "/images/oferta4.jpg",
        },
        {
            EventId: "123456",
            EventName: "Aura club",
            Popularity: 160,
            Rating: 30,
            TicketPriceMin: 8000,
            TicketPriceMax: 18000,
            TotalTickets: 10000,
            SoldTickets: 3000,
            MinDate: new Date(2022, 4, 1),
            MaxDate: new Date(2022, 4, 1),
            PeriodicDays: null,
            InVenues: "Aura CLub Vitacura, Avenida Vitacura 9339",
            HasPromotableOffers: true,
            CoverImage: "/images/oferta5.jpg",
        },
    ]
}

export namespace Restaurants {
    export const listRestaurants: EventLookUp[] = [

        {
            EventId: "12",
            EventName: "Corte de cabello con flequillo",
            CoverImage: "/images/cinzano.png",
        },
        {
            EventId: "123",
            EventName: "Corte de cabello en capas swag o shaggy",
            CoverImage: "/images/oporto.png",
        },
        {
            EventId: "1234",
            EventName: "Corte de cabello estilo Bob corto",
            CoverImage: "/images/rishtedar.png",
        },
        {
            EventId: "12345",
            EventName: "Corte de cabello estilo Pixie largo",
            CoverImage: "/images/matsuri.jpg",
        },
        {
            EventId: "123456",
            EventName: "Corte de cabello estilo Pixie largo",
            CoverImage: "/images/salt.jpg",
        },
        {
            EventId: "1234567",
            EventName: "Corte de cabello estilo Pixie largo",
            CoverImage: "/images/borago.png",
        },
        {
            EventId: "12",
            EventName: "Corte de cabello con flequillo",
            CoverImage: "/images/cinzano.png",
        },
        {
            EventId: "123",
            EventName: "Corte de cabello en capas swag o shaggy",
            CoverImage: "/images/oporto.png",
        },
        {
            EventId: "1234",
            EventName: "Corte de cabello estilo Bob corto",
            CoverImage: "/images/rishtedar.png",
        },
        {
            EventId: "12345",
            EventName: "Corte de cabello estilo Pixie largo",
            CoverImage: "/images/matsuri.jpg",
        }
    ]
}

export namespace AtributesFooter {
    export const listAtribute: Atribute[] = [
        {
            Title: "Metal",
            LinkImage: "/images/atr1.jpg",
        },
        {
            Title: "Rock",
            LinkImage: "/images/atr2.jpg",
        },
        {
            Title: "Cine",
            LinkImage: "/images/atr3.jpg",
        },
        {
            Title: "Restaurante",
            LinkImage: "/images/atr4.jpg",
        },
        {
            Title: "Festivales",
            LinkImage: "/images/atr5.jpg",
        },
        {
            Title: "Musicales",
            LinkImage: "/images/atr6.jpg",
        }
    ]
}

export namespace HomeNewsData {
    export const listNews: News[] = [
        {
            Id: "12345",
            Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
            SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
            PathImage: "/images/daddy.jpg",
            Event: "Evento Generico1",
            Date: "Hoy"
        },
        {
            Id: "123456",
            Title: "Trap latino de primera para inaugurar el Share Festival",
            SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
            PathImage: "/images/anuel.jpg",
            Event: "Evento Generico2",
            Date: "Hoy"
        },
        {
            Id: "1234567",
            Title: "Ozzy Osbourne rompe nuevo récord: Número 1 del rock con su single «Patient Number 9»",
            SubTitle: "El single «Patient Number 9» de Ozzy Osbourne es todo un éxito porque en la primera semana de estreno, llegó al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, «Patient Number 9» obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, según Luminate.",
            PathImage: "/images/ossy.jpg",
            Event: "Evento Generico3",
            Date: "Hoy"
        },
        {
            Id: "12345678",
            Title: "Queen anuncia los detalles de “Rhapsody Over London”, un concierto espectacular que se emitirá para todo el mundo",
            SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
            PathImage: "/images/queen.jpg",
            Event: "Evento Generico4",
            Date: "Hoy"
        },
        {
            Id: "12345",
            Title: "Daddy Yankee graba un nuevo vídeo en Boqueron, Cabo Rojo",
            SubTitle: "Desde tempranas horas de la noche de ayer sábado, el pegajoso ritmo de la canción “Rumbatón”, del cantante Daddy Yankee, se apoderó del poblado de Boquerón, en Cabo Rojo, debido a que se llevó a cabo la grabación de su vídeo. Como se puede apreciar en varios vídeos y fotografías publicadas en las redes sociales, el artista filmó sobre una pantalla en forma de tarima donde aparecían imágenes color",
            PathImage: "/images/daddy.jpg",
            Event: "Evento Generico5",
            Date: "Hoy"
        },
        {
            Id: "123456",
            Title: "Trap latino de primera para inaugurar el Share Festival",
            SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
            PathImage: "/images/anuel.jpg",
            Event: "Evento Generico6",
            Date: "Hoy"
        },
    ]
}

export namespace CommentSectionData {
    export const listComment: comment[] = [
        {
            ByWho: "Oscar Perez",
            Comment: " esta vez si que no me lo pierdo por nada del mundo, no pienso hacer horas extras ese dia, o tal vez si ajajajajajaja",
            ProfileImage: "/images/fotoperfil2.png"
        },
        {
            ByWho: "Juan Andrade",
            Comment: "Tremendas bandas a las que se les rinde tributo, y las bandas que lo hacen son casi igual que las originales",
            ProfileImage: "/images/fotoperfil1.png"
        },
        {
            ByWho: "Veronica Castillo",
            Comment: "Se ve bueno, ya he visto a ese grupo en otros lugares con mi pareja, sacaremos mas fotos para el recuerdo de estos eventos",
            ProfileImage: "/images/fotoperfil3.png"
        },
        {
            ByWho: "Pedro Fernandez",
            Comment: "ahora si, la vez pasada no pude pero en esta ya tengo mi entrada lista para el sabado",
            ProfileImage: "/images/fotoperfil4.png"
        },
        {
            ByWho: "Paula Herrera",
            Comment: "tamos listos con el arturo la javiera, el cesar y la gabirela pa ir a verlos :D :D :D",
            ProfileImage: "/images/fotoperfil5.png"
        }
    ]
}

export namespace ReviewsSectionData {
    export const listReviews: review[] = [
        {
            ByWho: "Javiera Perez",
            Title: "Buena la tocata",
            ProfileImage: "/images/fotoperfil2.png",
            Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

        },
        {
            ByWho: "Oscar Castillo",
            Title: "Gran Tributo",
            ProfileImage: "/images/fotoperfil1.png",
            Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

        },
        {
            ByWho: "Paulo Andrade",
            Title: "Se nota la pasion",
            ProfileImage: "/images/fotoperfil3.png",
            Review: "Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum."

        }
    ]
}

export class reviewSearch {
    PathBanner: string
    listReview: review[]
    NameEvent: string
    ResumeStars: number
    ProfilePath: string

}

export namespace ReviewSearchData {
    export const listReviewSearch: reviewSearch[] = [
        {
            PathBanner: "/images/banner.png",
            listReview: ReviewsSectionData.listReviews,
            NameEvent: "Tributo a PetShop Boys y A ha",
            ResumeStars: 4,
            ProfilePath: "/images/fotoperfil2.png"
        },
        {
            PathBanner: "/images/banner7.jpg",
            listReview: ReviewsSectionData.listReviews,
            NameEvent: "Djarum Super Guns N Roses",
            ResumeStars: 4,
            ProfilePath: "/images/fotoperfil1.png"
        },
        {
            PathBanner: "/images/banner8.jpg",
            listReview: ReviewsSectionData.listReviews,
            NameEvent: "Kuervos del Sur en vivo",
            ResumeStars: 3,
            ProfilePath: "/images/fotoperfil3.png"
        },
        {
            PathBanner: "/images/banner10.jpg",
            listReview: ReviewsSectionData.listReviews,
            NameEvent: "On Tour Colection",
            ResumeStars: 3,
            ProfilePath: "/images/fotoperfil4.png"
        }
    ]
}

export namespace QuestionSectionData {
    export const listQuestions: question[] = [
        {
            Question: "Se puede llevar comida desde el exterior ?",
            Answer: "No, no se puede",
            ByWho: "Maria Gonzalez"
        },
        {
            Question: "Hasta que hora se pueden comprar ?",
            Answer: "Hasta las 20:00 hrs, horarios Chile",
            ByWho: "Felipe Perez"
        },
        {
            Question: "Donde puedo ver devoluciones?",
            Answer: "Inbox",
            ByWho: "Juan Castillo"
        }
    ]
}

export namespace ResumeReviews {
    export const resumeReviews = {
        rating: 4,
        totalReview: 91,
        infoReviews: [
            {
                numStars: 5,
                numReviews: 20,
            },
            {
                numStars: 4,
                numReviews: 30,
            },
            {
                numStars: 3,
                numReviews: 40,
            },
            {
                numStars: 2,
                numReviews: 5,
            },
            {
                numStars: 1,
                numReviews: 0,
            }
        ]
    }
}

export class EventLookUp {
    public EventId?: string
    public EventName?: string
    public Subtitle?: string
    public Description?: string
    public Popularity?: number
    public Rating?: number
    public TicketPriceMin?: number
    public TicketPriceMax?: number
    public TotalTickets?: number
    public SoldTickets?: number
    public MinDate?: Date
    public MaxDate?: Date
    public PeriodicDays?: string
    public InVenues?: string
    public HasPromotableOffers?: boolean
    public CoverImage?: string
    public Tags?: string[]
    public ListProducts?: Product[]
    public ListRestriction?: string[]
    public BannerPath?: string
    public LogoPath?: string
    public ListImages?: string[]
    public Video?: string
    public Date?: Date[]
    public VenueDate?: DateVenue[]
    public ListAtributes?: String[]
    public Category?: string

}

export class DateVenue {
    Id: string
    Date: Date
    Venue: string
    IsSelected: boolean
    Capacity: number
    NameVenue: string
    ImageMap: string
    LinkGoogleMap: string
}

export class Product {
    public Name: string
    public Price: number
    public DiscountPercent: number
    public Include?: string
    public ImagePath?: string
    public Tag?: string
}

class OwnPublicity {
    public Title: string
    public FirstText: string
    public SecondText: string
    public LinkImage: string
}

class Atribute {
    public Title: string
    public LinkImage: string
}

class InformationHome {
    public Title: string;
    public SubTitle: string;
    public LinkImage?: string;
}

export class News {
    Id: string;
    Title: string;
    SubTitle: string;
    PathImage: string;
    Event?: string;
    Date?: string;
    HasEvent?: boolean
}

export class review {
    ByWho: string;
    Title: string;
    Review: string;
    ProfileImage: string;
}

export class comment {
    ByWho: string;
    ProfileImage: string;
    Comment: string;
}

export class question {
    ByWho: string;
    Question: string;
    Answer: string;
}

export class fomrLink {
    text: string;
    link?: string;
}

export namespace FormList {
    export const listForm: fomrLink[] = [
        {
            text: "Se necesita camarero o camarera por el fin de semana.",
            link: ""
        },
        {
            text: "Se necesita barman, guardia de seguridad y camareros modalidad part-time ",
            link: ""
        },
        {
            text: "Se busca banda de rock, metal y cumbia para reemplazo ",
            link: ""
        }
    ]
}

export class CategoryFilter {
    Id: string
    ImagePath: string
    Name: string
    IsSelected: boolean
}

export class SuperCategoryFilter {
    Name: string
    Id: string
    PathIcon: string
    ListCategory: CategoryFilter[]
    isSelected: boolean
}

export namespace SuperCategoryFood {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Restaurant",
            PathIcon: "/images/restaurant.png",
            Id: "restauratn123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: GlobalConst.sourceImages.sushiIcon,
                    Name: "Sushi",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: GlobalConst.sourceImages.pizzaIcon,
                    Name: "Pizza",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: GlobalConst.sourceImages.hambIcon,
                    Name: "Hamburguesa",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: GlobalConst.sourceImages.peruvianFood,
                    Name: "Peruana",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: GlobalConst.sourceImages.cofeeIcon,
                    Name: "Cafe",
                    IsSelected: false
                },
                {
                    Id: "abcdefghsdasw13",
                    ImagePath: GlobalConst.sourceImages.postres,
                    Name: "Postres",
                    IsSelected: false
                },
            ],
            isSelected: true
        },
        {
            Name: "Restobar",
            PathIcon: "/images/restobar.png",
            Id: "restobar123",
            ListCategory: [
                {
                    Id: "abcde",
                    ImagePath: "/images/preparados.png",
                    Name: "Preparados",
                    IsSelected: true
                },
                {
                    Id: "abcd",
                    ImagePath: GlobalConst.sourceImages.sushiIcon,
                    Name: "Sushi",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cocktail.png",
                    Name: "Cocktail",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/vinos.png",
                    Name: "Vinos",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: GlobalConst.sourceImages.cofeeIcon,
                    Name: "Cafe",
                    IsSelected: false
                },
                {
                    Id: "abcdefghsdasw13",
                    ImagePath: GlobalConst.sourceImages.postres,
                    Name: "Postres",
                    IsSelected: false
                },
            ],
            isSelected: false
        },
        {
            Name: "Buffet",
            PathIcon: "/images/buffette.png",
            Id: "buffet123",
            ListCategory: [
                {
                    Id: "abcdef",
                    ImagePath: GlobalConst.sourceImages.hambIcon,
                    Name: "Hamburguesa",
                    IsSelected: true
                },
                {
                    Id: "abcd",
                    ImagePath: GlobalConst.sourceImages.sushiIcon,
                    Name: "Sushi",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: GlobalConst.sourceImages.pizzaIcon,
                    Name: "Pizza",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: GlobalConst.sourceImages.peruvianFood,
                    Name: "Peruana",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: GlobalConst.sourceImages.cofeeIcon,
                    Name: "Cafe",
                    IsSelected: false
                },
                {
                    Id: "abcdefghsdasw13",
                    ImagePath: GlobalConst.sourceImages.postres,
                    Name: "Postres",
                    IsSelected: false
                },
            ],
            isSelected: false
        },
        {
            Name: "Cafeteria",
            PathIcon: "/images/cofee.png",
            Id: "cafeteria123",
            ListCategory: [
                {
                    Id: "abcdefg",
                    ImagePath: "/images/espresso.png",
                    Name: "Espresso",
                    IsSelected: true
                },
                {
                    Id: "abcd",
                    ImagePath: "/images/capuccino.png",
                    Name: "Capuccino",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/cafeHelado.png",
                    Name: "Cafe Helado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/sandwich.png",
                    Name: "Sandwich",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/mediaLuna.png",
                    Name: "Media Luna",
                    IsSelected: false
                },
            ],
            isSelected: false
        }
    ]
}

export namespace SuperCategoryEntertaiment {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Night Club",
            PathIcon: "/images/nightClubIcon.png",
            Id: "clubNocturno123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],
            isSelected: true
        },
        {
            Name: "Cines",
            PathIcon: "/images/cinemaIcon.png",
            Id: "cines123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/3d.png",
                    Name: "3D",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/sub.png",
                    Name: "SUB",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/sub.png",
                    Name: "DUB",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/imax.png",
                    Name: "IMAX",
                    IsSelected: false
                },
            ],
            isSelected: false
        },
        {
            Name: "Conciertos",
            PathIcon: "/images/microfono.png",
            Id: "conciertos123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Zoologicos",
            PathIcon: "/images/zooIcon.png",
            Id: "zoologicos123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Festivales",
            PathIcon: "/images/concerts.png",
            Id: "festivales123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        }
    ]
}

export namespace SuperCategorySports {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Futbol",
            PathIcon: "/images/futbol.png",
            Id: "futbol123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],
            isSelected: true
        },
        {
            Name: "Boxeo",
            PathIcon: "/images/box.png",
            Id: "Boxeo123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Rugby",
            PathIcon: "/images/rugby.png",
            Id: "Rugby123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Volleyball",
            PathIcon: "/images/volley.png",
            Id: "Volleyball123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Basketball",
            PathIcon: "/images/basket.png",
            Id: "Basketball123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        }
    ]
}

export namespace SuperCategoryServices {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Peluqueria",
            PathIcon: "/images/peluqueria.png",
            Id: "Peluqueria123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/colorimetria.png",
                    Name: "Colorimetria",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/lavado.png",
                    Name: "Lavado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/platinado.png",
                    Name: "Platinado",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/ballayage.png",
                    Name: "Ballayage",
                    IsSelected: false
                },
            ],
            isSelected: true
        },
        {
            Name: "Spa",
            PathIcon: "/images/spa.png",
            Id: "Spa123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/colorimetria.png",
                    Name: "Colorimetria",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/lavado.png",
                    Name: "Lavado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/platinado.png",
                    Name: "Platinado",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/ballayage.png",
                    Name: "Ballayage",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Salon Belleza",
            PathIcon: "/images/salonBelleza.png",
            Id: "SalonBelleza123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/colorimetria.png",
                    Name: "Colorimetria",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/lavado.png",
                    Name: "Lavado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/platinado.png",
                    Name: "Platinado",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/ballayage.png",
                    Name: "Ballayage",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Odontologia",
            PathIcon: "/images/odontologia.png",
            Id: "Odontologia123",
            ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/caries.png",
                    Name: "Caries",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/braquest.png",
                    Name: "Braquets",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/limpiezaDiente.png",
                    Name: "Limpieza",
                    IsSelected: false
                },
            ],
            isSelected: false
        },
    ]
}

export namespace SuperCategoryReview {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Peluqueria",
            PathIcon: "/images/peluqueria.png",
            Id: "Peluqueria123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/colorimetria.png",
                    Name: "Colorimetria",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/lavado.png",
                    Name: "Lavado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/platinado.png",
                    Name: "Platinado",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/ballayage.png",
                    Name: "Ballayage",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Futbol",
            PathIcon: "/images/futbol.png",
            Id: "futbol123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Night Club",
            PathIcon: "/images/nightClubIcon.png",
            Id: "clubNocturno123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Restaurant",
            PathIcon: "/images/restaurant.png",
            Id: "restauratn123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: GlobalConst.sourceImages.sushiIcon,
                    Name: "Sushi",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: GlobalConst.sourceImages.pizzaIcon,
                    Name: "Pizza",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: GlobalConst.sourceImages.hambIcon,
                    Name: "Hamburguesa",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: GlobalConst.sourceImages.peruvianFood,
                    Name: "Peruana",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: GlobalConst.sourceImages.cofeeIcon,
                    Name: "Cafe",
                    IsSelected: false
                },
                {
                    Id: "abcdefghsdasw13",
                    ImagePath: GlobalConst.sourceImages.postres,
                    Name: "Postres",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
    ]
}

export namespace SuperCategoryNews {
    export const listSuperCat: SuperCategoryFilter[] = [
        {
            Name: "Peluqueria",
            PathIcon: "/images/peluqueria.png",
            Id: "Peluqueria123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/colorimetria.png",
                    Name: "Colorimetria",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/lavado.png",
                    Name: "Lavado",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/platinado.png",
                    Name: "Platinado",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/ballayage.png",
                    Name: "Ballayage",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Futbol",
            PathIcon: "/images/futbol.png",
            Id: "futbol123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Night Club",
            PathIcon: "/images/nightClubIcon.png",
            Id: "clubNocturno123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/rock.png",
                    Name: "Rock",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/trap.png",
                    Name: "Trap",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/cumbia.png",
                    Name: "Cumbia",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/regeton.png",
                    Name: "Reggaeton",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Restaurant",
            PathIcon: "/images/restaurant.png",
            Id: "restauratn123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: GlobalConst.sourceImages.sushiIcon,
                    Name: "Sushi",
                    IsSelected: true
                },
                {
                    Id: "abcde",
                    ImagePath: GlobalConst.sourceImages.pizzaIcon,
                    Name: "Pizza",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: GlobalConst.sourceImages.hambIcon,
                    Name: "Hamburguesa",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: GlobalConst.sourceImages.peruvianFood,
                    Name: "Peruana",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: GlobalConst.sourceImages.cofeeIcon,
                    Name: "Cafe",
                    IsSelected: false
                },
                {
                    Id: "abcdefghsdasw13",
                    ImagePath: GlobalConst.sourceImages.postres,
                    Name: "Postres",
                    IsSelected: false
                },
            ],*/
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Odontologia",
            PathIcon: "/images/odontologia.png",
            Id: "Odontologia123",
            ListCategory: null,
            isSelected: false
        },
        {
            Name: "Boxeo",
            PathIcon: "/images/box.png",
            Id: "Boxeo123",
            /*ListCategory: [
                {
                    Id: "abcd",
                    ImagePath: "/images/chilena.png",
                    Name: "Seleccion",
                    IsSelected: false
                },
                {
                    Id: "abcde",
                    ImagePath: "/images/colo.png",
                    Name: "Colo Colo",
                    IsSelected: false
                },
                {
                    Id: "abcdef",
                    ImagePath: "/images/uchile.png",
                    Name: "U. de Chile",
                    IsSelected: false
                },
                {
                    Id: "abcdefg",
                    ImagePath: "/images/catolica.png",
                    Name: "U. Catolica",
                    IsSelected: false
                },
                {
                    Id: "abcdefgh",
                    ImagePath: "/images/wander.png",
                    Name: "Wanderers",
                    IsSelected: false
                }
            ],*/
            ListCategory: null,
            isSelected: false
        },
    ]
}

/*export namespace CategoryFilterRestaurant {
    export const listCatRestaurant: CategoryFilter[] = [
        {
            Id: "abcd",
            ImagePath: GlobalConst.sourceImages.sushiIcon,
            Name: "Sushi",
            IsSelected: false
        },
        {
            Id: "abcde",
            ImagePath: GlobalConst.sourceImages.pizzaIcon,
            Name: "Pizza",
            IsSelected: false
        },
        {
            Id: "abcdef",
            ImagePath: GlobalConst.sourceImages.hambIcon,
            Name: "Hamburguesa",
            IsSelected: false
        },
        {
            Id: "abcdefg",
            ImagePath: GlobalConst.sourceImages.peruvianFood,
            Name: "Peruana",
            IsSelected: false
        },
        {
            Id: "abcdefgh",
            ImagePath: GlobalConst.sourceImages.cofeeIcon,
            Name: "Cafe",
            IsSelected: false
        },
        {
            Id: "abcdefghsdasw13",
            ImagePath: GlobalConst.sourceImages.postres,
            Name: "Postres",
            IsSelected: false
        },
    ]
}

export namespace CategoryFilterEntertaiment {
    export const listCatEntertaiment: CategoryFilter[] = [
        {
            Id: "abcd",
            ImagePath: "/images/concerts.png",
            Name: "Conciertos",
            IsSelected: false
        },
        {
            Id: "abcde",
            ImagePath: "/images/cinemaIcon.png",
            Name: "Cines",
            IsSelected: false
        },
        {
            Id: "abcdef",
            ImagePath: "/images/nightClubIcon.png",
            Name: "Club nocturno",
            IsSelected: false
        },
        {
            Id: "abcdefg",
            ImagePath: "/images/sports.png",
            Name: "Deportes",
            IsSelected: false
        },
        {
            Id: "abcdefgh",
            ImagePath: "/images/zooIcon.png",
            Name: "Zoologico",
            IsSelected: false
        },
        {
            Id: "abcdefghsdasw13",
            ImagePath: "/images/restaurantIcon.png",
            Name: "Restaurantes",
            IsSelected: false
        },
    ]
}

export namespace CategoryFilterSports {
    export const listCatSports: CategoryFilter[] = [
        {
            Id: "abcd",
            ImagePath: "/images/futbol.png",
            Name: "Futbol",
            IsSelected: false
        },
        {
            Id: "abcde",
            ImagePath: "/images/box.png",
            Name: "Boxeo",
            IsSelected: false
        },
        {
            Id: "abcdef",
            ImagePath: "/images/basket.png",
            Name: "Basquetball",
            IsSelected: false
        },
        {
            Id: "abcdefg",
            ImagePath: "/images/rugby.png",
            Name: "Rugby",
            IsSelected: false
        },
        {
            Id: "abcdefgh",
            ImagePath: "/images/volley.png",
            Name: "Volleyball",
            IsSelected: false
        },
        {
            Id: "abcdefghsdasw13",
            ImagePath: "/images/golf.png",
            Name: "Golf",
            IsSelected: false
        },
    ]
}*/

export namespace CategoryPrincipalFilters {
    export const listPrinciaplFilters: CategoryFilter[] = [
        {
            Id: "1234abcd",
            ImagePath: "/images/discountIcon.png",
            Name: "En Oferta",
            IsSelected: false
        },
        {
            Id: "12345abcde",
            ImagePath: "/images/dollarUp.png",
            Name: "Menor a Mayor",
            IsSelected: false
        },
        {
            Id: "12345abcdedasdsw",
            ImagePath: "/images/dollarDown.png",
            Name: "Mayor a Menor",
            IsSelected: false
        },
    ]
}

export namespace CategoryPrincipalFiltersReview {
    export const listPrinciaplFiltersReview: CategoryFilter[] = [
        {
            Id: "1234abcd",
            ImagePath: "/images/hearticonColor.png",
            Name: "Mas Popular",
            IsSelected: false
        },
        {
            Id: "12345abcde",
            ImagePath: "/images/reviewUp.png",
            Name: "Calificacion",
            IsSelected: false
        },
        {
            Id: "12345abcdedasdsw",
            ImagePath: "/images/reviewDown.png",
            Name: "Calificacion",
            IsSelected: false
        },
    ]
}

export namespace CategoryPrincipalFiltersSearch {
    export const listPrinciaplFilters: CategoryFilter[] = [
        {
            Id: "1234abcd",
            ImagePath: "/images/hearticonColor.png",
            Name: "Mas Popular",
            IsSelected: false
        },
        {
            Id: "12345abcde",
            ImagePath: "/images/reviewUp.png",
            Name: "Recientes",
            IsSelected: false
        },
        {
            Id: "12345abcdedasdsw",
            ImagePath: "/images/reviewDown.png",
            Name: "Antiguos",
            IsSelected: false
        },
    ]
}

export namespace CategoryPrincipalFiltersNews {
    export const listPrinciaplFilters: CategoryFilter[] = [
        {
            Id: "1234abcd",
            ImagePath: "/images/hearticonColor.png",
            Name: "Mas Popular",
            IsSelected: false
        },
        {
            Id: "12345abcde",
            ImagePath: "/images/mostRevent.png",
            Name: "Recientes",
            IsSelected: false
        },
        {
            Id: "12345abcdedasdsw",
            ImagePath: "/images/mostOld.png",
            Name: "Antiguos",
            IsSelected: false
        },
    ]
}

export namespace CategoryPrincipalFilterTicket {
    export const filters: CategoryFilter[] = [
        {
            Id: "12345abcde",
            ImagePath: "/images/dollarUp.png",
            Name: "Menor a Mayor",
            IsSelected: false
        },
        {
            Id: "12345abcdedasdsw",
            ImagePath: "/images/dollarDown.png",
            Name: "Mayor a Menor",
            IsSelected: false
        }
    ]
}

export namespace DropDownResale {
    export const listDropDown: ResaleProduct[] = [
        {
            BannerImage: "/images/banner1.jpg",
            Name: "franciscaMeneses",
            ProfileImage: "/images/fotoPerfil7.jpg",
            NameEvent: "Festival Orquesta",
            PreviousPrice: 40000,
            Price: 20000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                },
                {
                    Name: "Papas Lays",
                    Price: 2990,
                    Amount: 1
                }
            ],
            Id: "jsdha123dsuwq"

        },
        {
            BannerImage: "/images/banner2.jpg",
            Name: "arturoPascal",
            ProfileImage: "/images/fotoperfil2.png",
            NameEvent: "Star Wars Sinfonico",
            PreviousPrice: 45000,
            Price: 35000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                },
                {
                    Name: "Papas Lays",
                    Price: 2990,
                    Amount: 1
                },
                {
                    Name: "Coca-Cola",
                    Price: 1990,
                    Amount: 1
                }
            ],
            Id: "jsdewegghauwq"

        },
        {
            BannerImage: "/images/banner3.jpg",
            Name: "pilarRuiz",
            ProfileImage: "/images/fotoperfil3.png",
            NameEvent: "Seafret",
            PreviousPrice: 30000,
            Price: 40000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                },
                {
                    Name: "Papas Lays",
                    Price: 2990,
                    Amount: 1
                },
                {
                    Name: "Coca-Cola",
                    Price: 1990,
                    Amount: 1
                },
                {
                    Name: "Snacks",
                    Price: 1990,
                    Amount: 1
                }
            ],
            Id: "jsdewqehauw2322q"

        },
        {
            BannerImage: "/images/banner6.jpg",
            Name: "pedroRodriguez",
            ProfileImage: "/images/fotoperfil4.png",
            NameEvent: "Fiebre del memo",
            PreviousPrice: 20000,
            Price: 27000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                },
                {
                    Name: "Papas Lays",
                    Price: 2990,
                    Amount: 1
                },
                {
                    Name: "Coca-Cola",
                    Price: 1990,
                    Amount: 1
                }
            ],
            Id: "jsdhawqe12uwq"

        },
        {
            BannerImage: "/images/banner5.jpg",
            Name: "isidoraAlvarez",
            ProfileImage: "/images/fotoperfil5.png",
            NameEvent: "Nikkita",
            PreviousPrice: 40000,
            Price: 25000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                },
                {
                    Name: "Papas Lays",
                    Price: 2990,
                    Amount: 1
                },
                {
                    Name: "Coca-Cola",
                    Price: 1990,
                    Amount: 1
                }
            ],
            Id: "jsdhauwq"

        },
        {
            BannerImage: "/images/banner7.jpg",
            Name: "antoniaHerrera",
            ProfileImage: "/images/fotoPerfil8.jpg",
            NameEvent: "Guns N Roses",
            PreviousPrice: 40000,
            Price: 60000,
            ListProducts: [
                {
                    Name: "Entrada Palco",
                    Price: 5990,
                    Amount: 1
                },
                {
                    Name: "Cerveza Cristal",
                    Price: 1990,
                    Amount: 2
                }
            ],
            Id: "jsdhauwq"

        },
    ]
}

export namespace EventResale {
    export const eventResale: ResaleEvent = {
        Title: "Tributo a PetShop Boys y Aha",
        Subtitle: "Lo mejor del Rock ochentero",
        Rating: 4,
        Banner: "/images/banner.png",
        ListResalePack: DropDownResale.listDropDown
    }
}

export class ResaleEvent {
    Title: string
    Subtitle: string
    Rating: number
    Banner: string
    ListResalePack: ResaleProduct[]
}

class productResale {
    Name: string
    Price: number
    Amount: number
}

export class ResaleProduct {
    Id: string
    BannerImage: string
    Name: string
    ProfileImage: string
    NameEvent: string
    PreviousPrice: number
    Price: number
    ListProducts: productResale[]

}

