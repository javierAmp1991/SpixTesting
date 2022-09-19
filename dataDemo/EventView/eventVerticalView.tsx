
export enum EventCardType {
    EventCardWithPrice,
    EventCardWithDate,
    EventCardWithResale,
    EventCardWithOffer,
    EventCardFull
}

export abstract class BaseEventCard {
    Link?: string
    Type: EventCardType
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    TotalTickets: number
    SoldTickets: number
    Rating: number
}

export class EventCardWithPrice extends BaseEventCard {
    MinPrice: number
    MaxPrice: number
}

export class EventCardWithDate extends BaseEventCard {
    MaxDate: Date;
    MinDate: Date;
}

export class EventCardResale extends BaseEventCard {
    TotalResale: number
}

export class EventCardWithOffer extends BaseEventCard{
    ListTagsOffer: string[]
    TotalOffers: number
}

export class EventCardFull extends BaseEventCard {
    MinPrice: number
    MaxPrice: number
    MinDate: Date
    MaxDate: Date
}

export namespace TodayInValpoFull {
    export const list: EventCardWithPrice[] = [
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
        {
            Id: "51234567890",
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
    ]
}

export namespace InOfferHome {
    export const list: EventCardFull[] = [
        {
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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

export namespace DropDownHome {
    export const list: EventCardFull[] = [
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1216"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1215"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1214"
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1213"
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1212"
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1211"
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "1210"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "129"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel8.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "128"
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel9.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "127"
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel10.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Rating: 30,
            Id: "126"
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel11.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "125"
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "124"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel13.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "123"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel14.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25),
            Id: "12"
        }
    ]
}

export namespace DropDownSearch {
    export const list: EventCardFull[] = [
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1216",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1215",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1214",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1213",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1212",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1211",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "1210",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "129",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel8.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "128",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel9.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "127",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel10.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Type: EventCardType.EventCardFull,
            Rating: 30,
            Id: "126",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel11.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "125",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "124",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel13.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "123",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel14.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardFull,
            Id: "12",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        }
    ]
}

export namespace DropDownResale {
    export const list: EventCardResale[] = [
        {
            Link: "/resaleTicketSearch",
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1216",
            TotalResale: 10
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1215",
            TotalResale: 11
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1214",
            TotalResale: 12
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1213",
            TotalResale: 3
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1212",
            TotalResale: 4
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1211",
            TotalResale: 5
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "1210",
            TotalResale: 10
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "129",
            TotalResale: 9
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel8.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "128",
            TotalResale: 8
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel9.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "127",
            TotalResale: 7
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel10.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Type: EventCardType.EventCardWithResale,
            Rating: 30,
            Id: "126",
            TotalResale: 20
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel11.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "125",
            TotalResale: 21
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "124",
            TotalResale: 22
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel13.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "123",
            TotalResale: 23
        },
        {
            Link: "/resaleTicketSearch",
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel14.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithResale,
            Id: "12",
            TotalResale: 30
        }
    ]
}

export namespace MostPopularDataHome {
    export const list: EventCardFull[] = [
        {
            Title: "Cumbre del Spund",
            Subtitle: "la gran fiesta",
            PathImage: "/images/elHuevo.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
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
            Type: EventCardType.EventCardFull,
            Id: "12abc",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
    ]
}

export namespace MoreOfferSearch {
    export const list: EventCardWithDate[] = [
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1216",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1215",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1214",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1213",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1212",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithDate,
            Id: "1211",
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        },
    ]
}

export namespace OfferSearch{
    export const list: EventCardWithOffer[] = [
        {
            Title: "Tributo a Pet Shop Boys y A Ha",
            Subtitle: "Lo mejor del Rock Internacional",
            PathImage: "/images/inOffer1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["2 x 1", "Dcto 2da uni" ],
            TotalOffers: 10
        },
        {
            Title: "Star Wars Sinfonico",
            Subtitle: "Orquesta Internacional",
            PathImage: "/images/inOffer2.jpg",
            TotalTickets: 1000,
            SoldTickets: 400,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["50% dcto", "2 x 1" ],
            TotalOffers: 10
        },
        {
            Title: "Seafret, most of us",
            Subtitle: "Latin American Tour",
            PathImage: "/images/inOffer3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["50% dcto" ],
            TotalOffers: 10
        },
        {
            Title: "Nikkita Wild",
            Subtitle: "Nikkita wild",
            PathImage: "/images/inOffer4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["50% dcto", "Dcto 2da uni" ],
            TotalOffers: 10
        },
        {
            Title: "Moonage Daydream",
            Subtitle: "Pelicula de Brett Morgen",
            PathImage: "/images/inOffer5.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["Dcto 2da uni" ],
            TotalOffers: 10
        },
        {
            Title: "El perro samurai",
            Subtitle: "La leyenda de kakamucho",
            PathImage: "/images/inOffer6.jpg",
            TotalTickets: 1000,
            SoldTickets: 3000,
            Rating: 30,
            Type: EventCardType.EventCardWithOffer,
            Id: "12",
            Link: "/",
            ListTagsOffer: ["50% dcto" ],
            TotalOffers: 10
        }
    ]
}

