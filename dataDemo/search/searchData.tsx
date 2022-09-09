export class EventSearch{
    Id: string
    CoverImage: string
    Title: string
    SubTitle: string
    Rating: number
    TotalResale: number
}

export class PublicitySearch{
    Id: string
    Title: string
    Subtitle: string
    Date: Date
    BannerPath: string
}

export namespace listPublicityNews{
    export const list: PublicitySearch[] = [
        {
            Id: "asda34cvffdsds",
            Title: "Star Wars",
            Subtitle: "Sinfonico",
            Date: new Date(2022,10,10),
            BannerPath: "/images/banner2.jpg"
        },
        {
            Id: "asdas9893dawdds",
            Title: "Seafret",
            Subtitle: "Seafret",
            Date: new Date(2022,10,20),
            BannerPath: "/images/banner3.jpg"
        },
        {
            Id: "asd12dwdasds",
            Title: "Guns N Roses",
            Subtitle: "Arum Super",
            Date: new Date(2022,11,26),
            BannerPath: "/images/banner7.jpg"
        },
        {
            Id: "asdd232asds",
            Title: "Nikkita",
            Subtitle: "Concert 2022",
            Date: new Date(2022,9,15),
            BannerPath: "/images/banner5.jpg"
        },
        {
            Id: "asdasdwqwef566s",
            Title: "Fiebre del Memo",
            Subtitle: "La Fonda",
            Date: new Date(2022,8,9),
            BannerPath: "/images/banner6.jpg"
        }
    ]
}

export namespace ListEventSearch{
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