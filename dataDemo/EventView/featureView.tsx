import {Product} from "../data";

export enum FeaturedViewClass {
    base,
    Search
}

export class BaseFeaturedView {
    Link: string
    Type: FeaturedViewClass
    Id: string
    PathImage: string
    PathLogo: string
    MinPrice: number
    MaxPrice: number
    Title: string
    Subtitle: string
    Rating: number
    MinDate: Date
    MaxDate: Date
    ListProducts: Product[]
}

export namespace PrincipalFeaturedSearch{
    export const item: BaseFeaturedView =
        {
            Type: FeaturedViewClass.Search,
            Id: "1",
            Title: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",
            Rating: 42,
            MinPrice: 9990,
            MaxPrice: 59990,
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
            PathImage: "/images/thorlov.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
}

export namespace FeaturedListSearch {
    export const list: BaseFeaturedView[] = [
        {
            Type: FeaturedViewClass.Search,
            Id: "12",
            Title: "Top Gun Maverick",
            Subtitle: "Top Gun Maverick",
            Rating: 35,
            MinPrice: 9990,
            MaxPrice: 59990,
            MinDate: new Date(2022, 5, 8),
            MaxDate: new Date(2022, 5, 8),
            PathImage: "/images/topgun.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
        },
        {
            Type: FeaturedViewClass.Search,
            Id: "12345",
            Title: "Minions: Nace un villano",
            Subtitle: "Minions: Nace un villano",
            Rating: 37,
            MinPrice: 8990,
            MaxPrice: 49990,
            MinDate: new Date(2022, 2, 8),
            MaxDate: new Date(2022, 2, 8),
            PathImage: "/images/minions.jpg",
            Link: "",
            PathLogo: "/images/cinemark.png",
            ListProducts: [
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

        },
        {
            Type: FeaturedViewClass.Search,
            Id: "1234",
            Title: "Jurassic World: Dominion",
            Subtitle: "Jurassic World: Dominion",
            Rating: 48,
            MinPrice: 7990,
            MaxPrice: 39990,
            MinDate: new Date(2022, 3, 8),
            MaxDate: new Date(2022, 3, 8),
            PathImage: "/images/jurassic.jpg",
            Link: "",
            PathLogo: "/images/cinehoyts.png",
            ListProducts: [
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

        },
        {
            Type: FeaturedViewClass.Search,
            Id: "123",
            Title: "Light Year",
            Subtitle: "Light Year",
            Rating: 39,
            MinPrice: 7990,
            MaxPrice: 39990,
            MinDate: new Date(2022, 4, 8),
            MaxDate: new Date(2022, 4, 8),
            PathImage: "/images/lightYear.jpg",
            Link: "",
            PathLogo: "/images/cinehoyts.png",
            ListProducts: [
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

        },
        {
            Type: FeaturedViewClass.Search,
            Id: "12",
            Title: "Top Gun Maverick",
            Subtitle: "Top Gun Maverick",
            Rating: 35,
            MinPrice: 9990,
            MaxPrice: 59990,
            MinDate: new Date(2022, 5, 8),
            MaxDate: new Date(2022, 5, 8),
            PathImage: "/images/topgun.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
        },
        {
            Type: FeaturedViewClass.Search,
            Id: "1",
            Title: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",
            Rating: 42,
            MinPrice: 9990,
            MaxPrice: 59990,
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
            PathImage: "/images/thorlov.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
        },
    ]
}


export namespace FeaturedListHome {
    export const list: BaseFeaturedView[] = [
        {
            Type: FeaturedViewClass.base,
            Id: "123456",
            MinPrice: 9990,
            MaxPrice: 59990,
            Title: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",
            Rating: 42,
            PathImage: "/images/thorlov.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
        },
        {
            Type: FeaturedViewClass.base,
            Id: "12345",
            Title: "Minions: Nace un villano",
            Subtitle: "Minions: Nace un villano",
            Rating: 37,
            MinPrice: 9990,
            MaxPrice: 59990,
            PathImage: "/images/minions.jpg",
            Link: "",
            PathLogo: "/images/cinemark.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),

        },
        {
            Type: FeaturedViewClass.base,
            Id: "1234",
            Title: "Jurassic World: Dominion",
            Subtitle: "Jurassic World: Dominion",
            MinPrice: 9990,
            MaxPrice: 59990,
            Rating: 48,
            PathImage: "/images/jurassic.jpg",
            Link: "",
            PathLogo: "/images/cinehoyts.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),

        },
        {
            Type: FeaturedViewClass.base,
            Id: "123",
            Title: "Light Year",
            Subtitle: "Light Year",
            MinPrice: 9990,
            MaxPrice: 59990,
            Rating: 39,
            PathImage: "/images/lightYear.jpg",
            Link: "",
            PathLogo: "/images/cinehoyts.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),

        },
        {
            Type: FeaturedViewClass.base,
            Id: "12",
            Title: "Top Gun Maverick",
            Subtitle: "Top Gun Maverick",
            Rating: 35,
            MinPrice: 9990,
            MaxPrice: 59990,
            PathImage: "/images/topgun.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
        },
        {
            Type: FeaturedViewClass.base,
            Id: "1",
            Title: "Thor Love and Thunder",
            Subtitle: "Thor Love and Thunder",
            Rating: 42,
            MinPrice: 9990,
            MaxPrice: 59990,
            PathImage: "/images/thorlov.jpg",
            Link: "",
            PathLogo: "/images/cineplanet.png",
            ListProducts: [
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
            ],
            MinDate: new Date(2022, 1, 8),
            MaxDate: new Date(2022, 1, 8),
        },
    ]
}
