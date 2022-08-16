import {Filters} from "../components/Desktop/Search/subcategoryContainer";

import {SubcategoryFilter} from "../components/Desktop/Search/subcategoryContainer";

export enum priceFilters {
    TitleSubcategory = 'Precios',
    less15k = 'Menor que $15.000',
    less50k = "Menor que $50.000",
    greater50k = "Mayor que $50.000",
    priceRange = "priceRange"
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

export namespace AtributesData {
    export const listAtributes: SubcategoryFilter[] = [
        {Name: "Corte ondulado", id: "abcde"},
        {Name: "Comida al paso", id: "abcdef"},
        {Name: "Festival callejero", id: "fg"},

    ]
}

export namespace AtributesDataFilter {
    export const atributes: Filters = {
        FilterName: "Atributos",
        SubCategorys:
            [
                {Name: "Corte Ondulado", id: "123"},
                {Name: "Comida al paso", id: "1234"},
                {Name: "Festival Callejero", id: "12345"},
                {Name: "Restaurantes de sushi", id: "123456"},
                {Name: "Discos Gay", id: "1234567"},
                {Name: "Masaje terapeutico", id: "12345678"}
            ]
    }
}

export namespace FiltersData {
    export const listFilters: Filters[] = [
        {
            FilterName: priceFilters.TitleSubcategory,
            SubCategorys:
                [
                    {Name: priceFilters.less15k, id: "123"},
                    {Name: priceFilters.less50k, id: "1234"},
                    {Name: priceFilters.greater50k, id: "12345"},
                    {Name: priceFilters.priceRange, id: "123456"},
                ]
        },
        {
            FilterName: dateFilters.titleSubcategory,
            SubCategorys: [
                {Name: dateFilters.today, id: "123a"},
                {Name: dateFilters.thisWeek, id: "1234a"},
                {Name: dateFilters.thisMonth, id: "1235a"},
                {Name: dateFilters.rangeDate, id: "1236a"},
            ]
        },
        {
            FilterName: discountFilters.titleSubcategory,
            SubCategorys: [
                {Name: discountFilters.less25, id: "123ab"},
                {Name: discountFilters.less50, id: "1234ab"},
                {Name: discountFilters.greater50, id: "12345ab"},
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
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner1.jpg",
        "/images/banner5.jpg",
        "/images/banner6.jpg",
    ]
}

export namespace CarrouselAutoHome {
    export const listImage: string[] = [
        "/images/minions.jpg",
        "/images/jurassic.jpg",
        "/images/lightYear.jpg",
        "/images/topgun.jpg",
        "/images/jujutsu.jpeg",
        "/images/thorlov.jpg"
    ];
}

export namespace Menu {
    export const listMenu: string[] = [
        "Ofertas", "Destacados", "Noticias", "Reseñas"
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
            LinkImage: "/images/dolarRoundMor.png"
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
            {Name: "Producto 3.1", Price: 1990, DiscountPercent: 30, Include: null, ImagePath: "/images/product3.jpg"},
            {Name: "Producto 4.1", Price: 2990, DiscountPercent: 25, Include: null, ImagePath: "/images/product4.jpg"},
            {Name: "Producto 5.1", Price: 990, DiscountPercent: 30, Include: null, ImagePath: "/images/product5.jpg"},
            {
                Name: "Producto 6.1",
                Price: 9990,
                DiscountPercent: 20,
                Include: "Dcto 2 Un.",
                ImagePath: "/images/product6.jpg"
            },
            {Name: "Producto 7.1", Price: 10990, DiscountPercent: 30, Include: null, ImagePath: "/images/product7.jpg"},
            {Name: "Producto 8.1", Price: 10990, DiscountPercent: 30, Include: null, ImagePath: "/images/product8.jpg"},
            {Name: "Producto 9.1", Price: 10990, DiscountPercent: 30, Include: null, ImagePath: "/images/product9.jpg"},
            {Name: "Producto 10.1", Price: 6990, DiscountPercent: 30, Include: null, ImagePath: "/images/product10.jpg"},
        ]
    }
}

export namespace ListOffertData {
    export const listOffert: EventLookUp[] = [
        {
            EventId: "1235",
            EventName: "Dcto Medios de pago Falabella",
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

export namespace EventPageEvent {
    export const eventPage: EventLookUp = {
        EventId: "12345abcde",
        EventName: "Tributo a Pet Shop Boys y A Ha",
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
                Date: new Date(2022, 8, 18),
                Venue: "Blanco 1386, Valparaíso",
                IsSelected: false,
                Capacity: 200,
                NameVenue: "El Huevo",
                ImageMap: "/images/googleMapHuevo.jpg",
                LinkGoogleMap: "https://goo.gl/maps/skWcW2X6YkEyhL7S6"

            },
            {
                Date: new Date(2022, 9, 19),
                Venue: "Plaza Anibal Pinto 1182, Valparaíso",
                IsSelected: false,
                Capacity: 50,
                NameVenue: "Cinzano",
                ImageMap: "/images/googleMapCinzano.jpg",
                LinkGoogleMap: "https://goo.gl/maps/BHF532ZZNGPXL8Sn6"
            },
            {
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
        {
            CoverImage: "/images/terraza.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
        }
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
        }
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
            PathImage: "/images/daddy.jpg"
        },
        {
            Id: "123456",
            Title: "Trap latino de primera para inaugurar el Share Festival",
            SubTitle: "El sábado abre la cita musical Anuel AA, uno de los mayores exponentes actuales del trap latino, en el Poble Espanyol. El cartel de actuaciones se completa hasta el próximo 17 de julio con las de Morad, Natalia Lacunza, Oques Grasses, Miki Núñez, Fernando Costa, Miriam Rodríguez y Doctor Prats. ",
            PathImage: "/images/anuel.jpg"
        },
        {
            Id: "1234567",
            Title: "Ozzy Osbourne rompe nuevo récord: Número 1 del rock con su single «Patient Number 9»",
            SubTitle: "El single «Patient Number 9» de Ozzy Osbourne es todo un éxito porque en la primera semana de estreno, llegó al puesto 1 del rock en cuanto a la lista Billboard.En la semana del 24 al 30 de junio, «Patient Number 9» obtuvo 2,2 millones de impresiones de audiencia de radio, 1,4 millones de impresiones oficiales de EE. UU. en streams y 1.800 descargas vendidas, según Luminate.",
            PathImage: "/images/ossy.jpg"
        },
        {
            Id: "12345678",
            Title: "Queen anuncia los detalles de “Rhapsody Over London”, un concierto espectacular que se emitirá para todo el mundo",
            SubTitle: "El elemento que intentas copiar se encuentra protegido mediante derechos de autor y pertenece a mariskalrock.com. Si deseas utilizar este medio para fines no comerciales, contacta con mariskalrock.com para solicitar autorizacion.MariskalRock.com, el portal de musica mas heavy",
            PathImage: "/images/queen.jpg"
        }
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
}

export class DateVenue {
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

class News {
    Id: string;
    Title: string;
    SubTitle: string;
    PathImage: string;
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

