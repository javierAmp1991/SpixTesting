export enum EventCardTypeWithGradient {
    EventCardWithPrice,
    EventCardWithDate,
    EventCardFull
}

export abstract class BaseEventCardWithGradient {
    Link?: string
    Type: EventCardTypeWithGradient
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    TotalTickets: number
    SoldTickets: number
    Rating: number
}

export class EventCardWithGradientPrice extends BaseEventCardWithGradient {
    MinPrice: number
    MaxPrice: number
}

export namespace TodayInValpoGradient {
    export const list: EventCardWithGradientPrice[] = [
        {
            Id: "123456",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Title: "Restaurant Cinzano",
            Subtitle: "Cinzano",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
        {
            Id: "1234567",
            Title: "WOO! Club",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "WOO! Club",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "12345678",
            Title: "Black Phone",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "Black Phone",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "123456789",
            Title: "Terraza Bellavista",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "Terraza Bellavista",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "1234567890",
            Title: "Marco Polo",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "Marco Polo",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "12345678901",
            Title: "Bar Civico",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/Civico.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "Bar Civico",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "1123456",
            Title: "Restaurant Cinzano",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "Restaurant Cinzano",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "21234567",
            Title: "WOO! Club",
            Rating: null,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Subtitle: "WOO! Club",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
    ]
}

export namespace InOfferHomeGradient {
    export const list: EventCardWithGradientPrice[] = [
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "1234",
            Title: "Mundos Magicos",
            Subtitle: "Mundos Magicos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta3.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "12345",
            Title: "Tributo Bon Jovi",
            Subtitle: "Tributo Bon Jovi",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta4.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "123456",
            Title: "Aura club",
            Subtitle: "Aura club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/oferta5.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "1234567",
            Title: "Todas Partes",
            Subtitle: "Todas Partes",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta1.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            MinPrice: 2990,
            MaxPrice: 9990,
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
    ]
}

export namespace MostPopularGradient {
    export const list: EventCardWithGradientPrice[] = [
        {
            Title: "Cumbre del Spund",
            Subtitle: "la gran fiesta",
            PathImage: "/images/elHuevo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: null,
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Id: "12",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
        {
            Title: "Bar Cinzano",
            Subtitle: "Bar Cinzano",
            PathImage: "/images/cinzano.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: null,
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Id: "12aq",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
        {
            Title: "SabaWoo",
            Subtitle: "X Ley C Sale",
            PathImage: "/images/woo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: null,
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Id: "12ab",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
        {
            Title: "Liga de Masccotas",
            Subtitle: "Supermascotas",
            PathImage: "/images/mascotas.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: null,
            Type: EventCardTypeWithGradient.EventCardWithPrice,
            Id: "12abc",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
    ]
}