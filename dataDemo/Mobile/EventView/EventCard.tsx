import {EventCardType} from "../../EventView/eventVerticalView";

export enum EventCardTypeMobile {
    EventCardWithPrice,
    EventCardWithDate,
    EventCardWithOffer,
    EventCardFull
}

export abstract class BaseEventCardMobile {
    Link?: string
    Type: EventCardTypeMobile
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    TotalTickets: number
    SoldTickets: number
    Rating: number
}

export class EventCardWithPriceMobile extends BaseEventCardMobile {
    MinPrice: number
    MaxPrice: number
}

export class EventCardWithDateMobile extends BaseEventCardMobile {
    MinDate: Date
    MaxDate: Date
}

export class EventCardWithFullMobile extends BaseEventCardMobile {
    MinPrice: number
    MaxPrice: number
    MinDate: Date
    MaxDate: Date
}

export class EventCardWithOffer extends BaseEventCardMobile{
    ListTagsOffer: string[]
    TotalOffers: number
}

export namespace DailyOfferMobile{
    export const list: EventCardWithOffer[] = [
        {
            Title: "Tributo a Pet Shop Boys y A Ha",
            Subtitle: "Lo mejor del Rock Internacional",
            PathImage: "/images/inOffer1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardWithOffer,
            Id: "12",
            Link: "/eventPage",
            ListTagsOffer: ["2 x 1", "Dcto 2da uni"],
            TotalOffers: 10
        },
        {
            Title: "Star Wars Sinfonico",
            Subtitle: "Orquesta Internacional",
            PathImage: "/images/inOffer2.jpg",
            TotalTickets: 1000,
            SoldTickets: 400,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardWithOffer,
            Id: "12",
            Link: "/eventPage",
            ListTagsOffer: ["50% dcto", "2 x 1"],
            TotalOffers: 10
        },
        {
            Title: "Seafret, most of us",
            Subtitle: "Latin American Tour",
            PathImage: "/images/inOffer3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardWithOffer,
            Id: "12",
            Link: "/eventPage",
            ListTagsOffer: ["50% dcto"],
            TotalOffers: 10
        },
        {
            Title: "Nikkita Wild",
            Subtitle: "Nikkita wild",
            PathImage: "/images/inOffer4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardWithOffer,
            Id: "12",
            Link: "/eventPage",
            ListTagsOffer: ["50% dcto", "Dcto 2da uni"],
            TotalOffers: 10
        },
        {
            Title: "Moonage Daydream",
            Subtitle: "Pelicula de Brett Morgen",
            PathImage: "/images/inOffer5.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardWithOffer,
            Id: "12",
            Link: "/eventPage",
            ListTagsOffer: ["Dcto 2da uni"],
            TotalOffers: 10
        },
    ]
}

export namespace TodayInValpoMobile {
    export const list: EventCardWithPriceMobile[] = [
        {
            Id: "123456",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Title: "Restaurant Cinzano",
            Subtitle: "Cinzano",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/
        },
        {
            Id: "1234567",
            Title: "WOO! Club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "WOO! Club",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "12345678",
            Title: "Black Phone",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Black Phone",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "123456789",
            Title: "Terraza Bellavista",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Terraza Bellavista",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "1234567890",
            Title: "Marco Polo",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Marco Polo",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "12345678901",
            Title: "Bar Civico",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/Civico.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Bar Civico",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "1123456",
            Title: "Restaurant Cinzano",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Restaurant Cinzano",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "21234567",
            Title: "WOO! Club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "WOO! Club",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "312345678",
            Title: "Black Phone",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Black Phone",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "4123456789",
            Title: "Terraza Bellavista",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Terraza Bellavista",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
        {
            Id: "51234567890",
            Title: "Marco Polo",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: EventCardTypeMobile.EventCardWithPrice,
            Subtitle: "Marco Polo",
            MinPrice: 2990,
            MaxPrice: 9990,
/*            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),*/

        },
    ]
}

export namespace InOfferHomeMobile {
    export const list: EventCardWithFullMobile[] = [
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1234",
            Title: "Mundos Magicos",
            Subtitle: "Mundos Magicos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta3.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "12345",
            Title: "Tributo Bon Jovi",
            Subtitle: "Tributo Bon Jovi",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta4.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "123456",
            Title: "Aura club",
            Subtitle: "Aura club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/oferta5.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1234567",
            Title: "Todas Partes",
            Subtitle: "Todas Partes",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta1.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1234",
            Title: "Mundos Magicos",
            Subtitle: "Mundos Magicos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta3.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "12345",
            Title: "Tributo Bon Jovi",
            Subtitle: "Tributo Bon Jovi",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta4.jpg",
        },
        {
            Type: EventCardTypeMobile.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "123456",
            Title: "Aura club",
            Subtitle: "Aura club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/oferta5.jpg",
        },
    ]
}

export namespace MostPopularDataHomeMobile {
    export const list: EventCardWithFullMobile[] = [
        {
            Title: "Cumbre del Spund",
            Subtitle: "la gran fiesta",
            PathImage: "/images/elHuevo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardFull,
            Id: "12",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Bar Cinzano",
            Subtitle: "Bar Cinzano",
            PathImage: "/images/cinzano.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardFull,
            Id: "12aq",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "SabaWoo",
            Subtitle: "X Ley C Sale",
            PathImage: "/images/woo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardFull,
            Id: "12ab",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Liga de Masccotas",
            Subtitle: "Supermascotas",
            PathImage: "/images/mascotas.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardTypeMobile.EventCardFull,
            Id: "12abc",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
    ]
}