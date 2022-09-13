export enum VerticalViewClass {
    base,
    search,
    searchResale
}

export class BaseVerticalView {
    Link?: string
    Type: VerticalViewClass
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    TotalTickets: number
    SoldTickets: number
    Rating: number
}

export class VerticalViewSearch extends BaseVerticalView {
    MinDate: Date
    MaxDate: Date
    MinPrice: number
    MaxPrice: number
}

export class VerticalViewResale extends BaseVerticalView {
    TotalResale: number
}

export namespace TodayInValpoHome {
    export const list: BaseVerticalView[] = [
        {
            Id: "123456",
            Type: VerticalViewClass.base,
            Title: "Restaurant Cinzano",
            Subtitle: "Cinzano",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
        },
        {
            Id: "1234567",
            Title: "WOO! Club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: VerticalViewClass.base,
            Subtitle: "WOO! Club",

        },
        {
            Id: "12345678",
            Title: "Black Phone",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: VerticalViewClass.base,
            Subtitle: "Black Phone",

        },
        {
            Id: "123456789",
            Title: "Terraza Bellavista",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: VerticalViewClass.base,
            Subtitle: "Terraza Bellavista",

        },
        {
            Id: "1234567890",
            Title: "Marco Polo",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: VerticalViewClass.base,
            Subtitle: "Marco Polo",

        },
        {
            Id: "12345678901",
            Title: "Bar Civico",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/Civico.png",
            Type: VerticalViewClass.base,
            Subtitle: "Bar Civico",

        },
        {
            Id: "123456",
            Title: "Restaurant Cinzano",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            Type: VerticalViewClass.base,
            Subtitle: "Restaurant Cinzano",

        },
        {
            Id: "1234567",
            Title: "WOO! Club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: VerticalViewClass.base,
            Subtitle: "WOO! Club",

        },
        {
            Id: "12345678",
            Title: "Black Phone",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: VerticalViewClass.base,
            Subtitle: "Black Phone",

        },
        {
            Id: "123456789",
            Title: "Terraza Bellavista",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: VerticalViewClass.base,
            Subtitle: "Terraza Bellavista",

        },
        {
            Id: "1234567890",
            Title: "Marco Polo",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: VerticalViewClass.base,
            Subtitle: "Marco Polo",

        },
    ]
}

export namespace InOfferHome {
    export const list: BaseVerticalView[] = [
        {
            Type: VerticalViewClass.base,
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "1234",
            Title: "Mundos Magicos",
            Subtitle: "Mundos Magicos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta3.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "12345",
            Title: "Tributo Bon Jovi",
            Subtitle: "Tributo Bon Jovi",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta4.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "123456",
            Title: "Aura club",
            Subtitle: "Aura club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/oferta5.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "1234567",
            Title: "Todas Partes",
            Subtitle: "Todas Partes",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta1.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "12",
            Title: "Tenemos Explosivos",
            Subtitle: "Tenemos Explosivos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta6.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "123",
            Title: "KEVIN CORRAL",
            Subtitle: "KEVIN CORRAL",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta2.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "1234",
            Title: "Mundos Magicos",
            Subtitle: "Mundos Magicos",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/oferta3.jpg",
        },
        {
            Type: VerticalViewClass.base,
            Id: "12345",
            Title: "Tributo Bon Jovi",
            Subtitle: "Tributo Bon Jovi",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/oferta4.jpg",
        },
        {
            Type: VerticalViewClass.base,
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
    export const list: BaseVerticalView[] = [
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1216"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1215"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel2.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1214"
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel3.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1213"
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel4.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1212"
        },
        {
            Title: "Singer Concert",
            Subtitle: "Singer Concert",
            PathImage: "/images/cartel5.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1211"
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "1210"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "129"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel8.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "128"
        },
        {
            Title: "Daddy Yankee World tour",
            Subtitle: "Daddy Yankee World tour",
            PathImage: "/images/cartel9.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "127"
        },
        {
            Title: "Light Year",
            Subtitle: "Light Year",
            PathImage: "/images/cartel10.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Type: VerticalViewClass.base,
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
            Type: VerticalViewClass.base,
            Id: "125"
        },
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "124"
        },
        {
            Title: "Asesino sin memoria",
            Subtitle: "Asesino sin memoria",
            PathImage: "/images/cartel13.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "123"
        },
        {
            Title: "Classic Music Festival",
            Subtitle: "Classic Music Festival",
            PathImage: "/images/cartel14.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            Type: VerticalViewClass.base,
            Id: "12"
        }
    ]
}

export namespace DropDownSearch {
    export const list: VerticalViewSearch[] = [
        {
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
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
            Type: VerticalViewClass.search,
            Id: "12",
            MinPrice: 2990,
            MaxPrice: 9990,
            MinDate: new Date(2022, 10, 11),
            MaxDate: new Date(2022, 11, 25)
        }
    ]
}

export namespace DropDownResale {
    export const list: VerticalViewResale[] = [
        {
            Link: "/resaleTicketSearch",
            Title: "Metallica WorldWired",
            Subtitle: "Metallica WorldWired",
            PathImage: "/images/cartel0.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
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
            Type: VerticalViewClass.searchResale,
            Id: "12",
            TotalResale: 30
        }
    ]
}
