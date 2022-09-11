import {EventLookUp} from "../data";
import {VerticalViewClass, VerticalViewSearch} from "../EventView/eventVerticalView";

export class EventSearch {
    Id: string
    CoverImage: string
    Title: string
    SubTitle: string
    Rating: number
    TotalResale: number
}

export class PublicitySearch {
    Id: string
    Title: string
    Subtitle: string
    Date: Date
    BannerPath: string
}

export enum typeNews {
    base, principal, featured
}

export class newsBase {
    id: string
    type: typeNews
    title: string
    link: string
}

export class newsFeatured extends newsBase {
    subTitle: string
}

export class newsPrinciapl extends newsFeatured {
    goTo: string
}

export namespace listFeatured {
    export const list: newsFeatured[] = [
        {
            type: typeNews.featured,
            id: "pruebadestacado",
            title: "prueba",
            link: "prueba",
            subTitle: "prueba",
        }
    ]
}

export namespace listNewBase {
    export const list: newsBase[] = [
        {
            id: "pruebabase",
            type: typeNews.base,
            title: "prueba",
            link: "prueba",
        }
    ]
}

export namespace listnewPrincipal {
    export const list: newsPrinciapl[] = [
        {
            id: "pruebaprincipal",
            type: typeNews.principal,
            title: "prueba",
            link: "prueba",
            subTitle: "prueba",
            goTo: "prueba"
        }
    ]
}

export namespace listPublicityNews {
    export const list: PublicitySearch[] = [
        {
            Id: "asda34cvffdsds",
            Title: "Star Wars",
            Subtitle: "Sinfonico",
            Date: new Date(2022, 10, 10),
            BannerPath: "/images/cartel1.jpg"
        },
        {
            Id: "asdas9893dawdds",
            Title: "Seafret",
            Subtitle: "Seafret",
            Date: new Date(2022, 10, 20),
            BannerPath: "/images/cartel2.jpg"
        },
        {
            Id: "asd12dwdasds",
            Title: "Guns N Roses",
            Subtitle: "Arum Super",
            Date: new Date(2022, 11, 26),
            BannerPath: "/images/cartel3.jpg"
        },
        {
            Id: "asdd232asds",
            Title: "Nikkita",
            Subtitle: "Concert 2022",
            Date: new Date(2022, 9, 15),
            BannerPath: "/images/cartel4.jpg"
        },
        {
            Id: "asdasdwqwef566s",
            Title: "Fiebre del Memo",
            Subtitle: "La Fonda",
            Date: new Date(2022, 8, 9),
            BannerPath: "/images/cartel5.jpg"
        }
    ]
}

export namespace ListEventSearch {
    export const eventSearch: EventSearch[] = [
        {
            Id: "123abc1",
            CoverImage: "/images/cartel0.jpg",
            Title: "Metallica 2022",
            SubTitle: "WorldWired On Tour",
            Rating: 4,
            TotalResale: 8
        },
        {
            Id: "123abc2",
            Title: "Asesino sin memoria",
            CoverImage: "/images/cartel1.jpg",
            SubTitle: "Infinita ",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc3",
            Title: "Classic Music Festival",
            CoverImage: "/images/cartel2.jpg",
            SubTitle: "Concert Abismal",
            Rating: 4,
            TotalResale: 5
        },
        {
            Id: "123abc4",
            Title: "Daddy Yankee 2022",
            CoverImage: "/images/cartel3.jpg",
            SubTitle: "World Tour",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc5",
            Title: "Light Year",
            CoverImage: "/images/cartel4.jpg",
            SubTitle: "Light Year",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc6",
            Title: "Singer Concert",
            CoverImage: "/images/cartel5.jpg",
            SubTitle: "On Fest",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc7",
            CoverImage: "/images/cartel6.jpg",
            Title: "Metallica 2022",
            SubTitle: "WorldWired On Tour",
            Rating: 4,
            TotalResale: 8
        },
        {
            Id: "123abc8",
            Title: "Asesino sin memoria",
            CoverImage: "/images/cartel7.jpg",
            SubTitle: "Infinita ",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc9",
            Title: "Classic Music Festival",
            CoverImage: "/images/cartel8.jpg",
            SubTitle: "Concert Abismal",
            Rating: 4,
            TotalResale: 5
        },
        {
            Id: "123abc10",
            Title: "Daddy Yankee 2022",
            CoverImage: "/images/cartel9.jpg",
            SubTitle: "World Tour",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc11",
            Title: "Light Year",
            CoverImage: "/images/cartel10.jpg",
            SubTitle: "Light Year",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc12",
            Title: "Singer Concert",
            CoverImage: "/images/cartel11.jpg",
            SubTitle: "On Fest",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc13",
            CoverImage: "/images/cartel12.jpg",
            Title: "Metallica 2022",
            SubTitle: "WorldWired On Tour",
            Rating: 4,
            TotalResale: 8
        },
        {
            Id: "123abc1",
            Title: "Asesino sin memoria",
            CoverImage: "/images/cartel13.jpg",
            SubTitle: "Infinita ",
            Rating: 4,
            TotalResale: 5

        },
        {
            Id: "123abc14",
            Title: "Classic Music Festival",
            CoverImage: "/images/cartel4.jpg",
            SubTitle: "Concert Abismal",
            Rating: 4,
            TotalResale: 5
        },
    ]
}

export namespace DropDownRestaurantSearch {
    export const listDropDown: VerticalViewSearch[] = [
        {
            Title: "Cinzano",
            Subtitle: "Cinzano",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest1.png",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            MinPrice: 29990,
            Id: "",
            MaxPrice: 299990,
        },
        {
            Title: "Marco Polo",
            Subtitle: "Marco Polo",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest2.png",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            MinPrice: 9990,
            Id: "",
            MaxPrice: 59990,
        },
        {
            Title: "Nomade",
            Subtitle: "Nomade",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            MinPrice: 7990,
            Id: "",
            MaxPrice: 12990,
        },
        {
            Title: "Amor y Pastas",
            Subtitle: "Amor y Pastas",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest4.jpeg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            MinPrice: 6990,
            Id: "",
            MaxPrice: 9990,
        },
        {
            Title: "La tienda de Pia",
            Subtitle: "La tienda de Pia",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest5.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 50,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            MinPrice: 8990,
            Id: "",
            MaxPrice: 18990,
        },
        {
            Title: "Delicias",
            Subtitle: "Delicias",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            MinPrice: 9990,
            Id: "",
            MaxPrice: 59990,
        },
        {
            Title: "Delicious Food",
            Subtitle: "Delicious Food",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            MinPrice: 29990,
            Id: "",
            MaxPrice: 299990,
        },
        {
            Title: "Indra Restaurant",
            Subtitle: "Indra Restaurant",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            MinPrice: 9990,
            Id: "",
            MaxPrice: 59990,
        },
        {
            Type: VerticalViewClass.search,
            Title: "Food 4 You",
            Subtitle: "Food 4 You",
            PathImage: "/images/rest9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            MinPrice: 7990,
            Id: "",
            MaxPrice: 12990,
        },
        {
            Title: "Haitani Restaurant",
            Subtitle: "Haitani Restaurant",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            MinPrice: 6990,
            Id: "",
            MaxPrice: 9990,
        },
        {
            Title: "China Town",
            Subtitle: "China Town",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest11.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            MinPrice: 8990,
            MaxPrice: 18990,
            Id: "",
        },
        {
            Title: "La Cabrera",
            Subtitle: "La Cabrera",
            Type: VerticalViewClass.search,
            PathImage: "/images/rest12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            MinPrice: 9990,
            Id: "",
            MaxPrice: 59990,
        },
    ]
}

export namespace DropDownSportSearch {
    export const listDropDown: VerticalViewSearch[] = [
        {
            Id: "12",
            Title: "Futbol de salon",
            Subtitle: "Futbol de salon",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            MinPrice: 29990,
            MaxPrice: 59000,
        },
        {
            Id: "123",
            Title: "Torneo Futbol",
            Subtitle: "Torneo Futbol",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport2.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            MinPrice: 9990,
            MaxPrice: 59990,

        },
        {
            Id: "124",
            Title: "Torneo de basketball",
            Subtitle: "Torneo de basketball",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            MinPrice: 7990,
            MaxPrice: 12990,
        },
        {
            Id: "125",
            Title: "The legends Tournament",
            Subtitle: "The legends Tournament",
            Type: VerticalViewClass.search,

            PathImage: "/images/sport4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            MinPrice: 6990,
            MaxPrice: 9990,
        },
        {
            Id: "126",
            Title: "Torneo tenis senior",
            Subtitle: "Torneo tenis senior",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport5.jpg",
            Rating: 60,
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            MinPrice: 18990,
            MaxPrice: 24990
        },
        {
            Id: "127",
            Title: "Babolpa Cup",
            Subtitle: "Babolpa Cup",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            MinPrice: 9990,
            MaxPrice: 59990,
        },
        {
            Id: "128",
            Title: "Boxing night",
            Subtitle: "Boxing night",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            MinPrice: 29990,
            MaxPrice: 299990,
        },
        {
            Id: "129",
            Title: "Boxing fight",
            Subtitle: "Boxing fight",
            Type: VerticalViewClass.search,

            PathImage: "/images/sport8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            MinPrice: 9990,
            MaxPrice: 59990,
        },
        {
            Id: "1210",
            Title: "Rugby Sur",
            Subtitle: "Rugby Sur",
            Type: VerticalViewClass.search,

            PathImage: "/images/sport9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            MinPrice: 7990,
            MaxPrice: 12990,
        },
        {
            Id: "1211",
            Title: "rugby Sudamericano",
            Subtitle: "rugby Sudamericano",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            MinPrice: 6990,
            MaxPrice: 9990,
        },
        {
            Id: "1212",
            Title: "2K22 Sprint",
            Subtitle: "2K22 Sprint",
            Type: VerticalViewClass.search,
            Rating: 50,
            PathImage: "/images/sport11.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            MinPrice: 18990,
            MaxPrice: 28990
        },
        {
            Id: "1214",
            Title: "Final Sprint",
            Subtitle: "Final Sprint",
            Type: VerticalViewClass.search,
            PathImage: "/images/sport12.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            MinPrice: 9990,
            MaxPrice: 59990,
        },
    ]
}

export namespace DropDownServvicesSearch {
    export const listDropDown: VerticalViewSearch[] = [
        {
            Title: "Salon Fame",
            Subtitle: "Salon Fame",
            PathImage: "/images/serv1.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            Type: VerticalViewClass.search,
            Id:"1239",
            MinPrice: 29990,
            MaxPrice: 299990,
        },
        {
            Title: "Oslyala",
            Subtitle: "Oslyala",
            PathImage: "/images/serv2.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            Type: VerticalViewClass.search,
            Id:"1238",
            MinPrice: 9990,
            MaxPrice: 59990,
        },
        {
            Title: "Ellora",
            Subtitle: "Ellora",
            PathImage: "/images/serv3.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            Type: VerticalViewClass.search,
            Id:"1237",
            MinPrice: 7990,
            MaxPrice: 12990,
        },
        {
            Title: "Barber Shop",
            Subtitle: "Barber Shop",
            PathImage: "/images/serv4.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            Type: VerticalViewClass.search,
            Id:"1236",
            MinPrice: 6990,
            MaxPrice: 9990,
        },
        {
            Title: "Marcelos",
            Subtitle: "Marcelos",
            PathImage: "/images/serv5M.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 8, 5),
            MaxDate: new Date(2022, 9, 5),
            Type: VerticalViewClass.search,
            Id:"1235",
            MinPrice: 8990,
            MaxPrice: 18990,
        },
        {
            Title: "Isis",
            Subtitle: "Isis",
            PathImage: "/images/serv6.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 9, 5),
            MaxDate: new Date(2022, 10, 5),
            Type: VerticalViewClass.search,
            Id:"1234",
            MinPrice: 9990,
            MaxPrice: 59990,
        },
        {
            Title: "Teresa Azagra",
            Subtitle: "Teresa Azagra",
            PathImage: "/images/serv7.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 4, 5),
            MaxDate: new Date(2022, 5, 5),
            Type: VerticalViewClass.search,
            Id:"1233",
            MinPrice: 29990,
            MaxPrice: 299990,
        },
        {
            Title: "Spa Luna",
            Subtitle: "Spa Luna",
            PathImage: "/images/serv8.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 5, 5),
            MaxDate: new Date(2022, 6, 5),
            Type: VerticalViewClass.search,
            Id:"1232",
            MinPrice: 9990,
            MaxPrice: 59990,
        },
        {
            Title: "Beuty Spa",
            Subtitle: "Beuty Spa",
            PathImage: "/images/serv9.jpg",
            TotalTickets: 1000,
            SoldTickets: 500,
            Rating: 30,
            MinDate: new Date(2022, 6, 5),
            MaxDate: new Date(2022, 7, 5),
            Type: VerticalViewClass.search,
            Id:"1231",
            MinPrice: 7990,
            MaxPrice: 12990,
        },
        {
            Title: "Dentistry",
            Subtitle: "Dentistry",
            PathImage: "/images/serv10.jpg",
            TotalTickets: 1000,
            SoldTickets: 990,
            Rating: 30,
            MinDate: new Date(2022, 7, 5),
            MaxDate: new Date(2022, 8, 5),
            Type: VerticalViewClass.search,
            Id:"123",
            MinPrice: 6990,
            MaxPrice: 9990,
        },
    ]
}

