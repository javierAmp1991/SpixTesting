export enum TypeOffer {
    TwoXOne,
    Discount2Uni,
    Discount
}

export enum TypeAtributesArea {
    LowVisibility,
    NearToilet,
    VIP,
    HandicapSeat
}

export enum StateArea {
    NoStock,
    Critic,
    Normal
}

export enum RowType {
    Available,
    Reserved,
    Empty,
    Selected
}

export class SubAreaSeats {
    RowNumber: number
    Type: RowType
    SeatsAmount: number
}

export class SubAreaStadium {
    Id: string
    Seats: SubAreaSeats[]
    FirstRowTickets: TicketStadium[]

}

export class AreaItem {
    Id: string
    Name: string
}

export class Venue{
    FirstArea: AreaLayout
    ListAreaItem: AreaItem[]
}

export class AreaLayout {
    Id: string
    Name: string
    UrlSvg: string
    IsContinuous: boolean
    MainTickets: TicketStadium[]
    AreasStadium: SectionStadium[]
}

export class TicketStadium {
    Id: string
    AreaName?: string
    Row: number
    Seat: number
    Price: number
    Type: TypeOffer
    Discount?: number
    Atributes?: AtributesArea[]
    State: boolean
}

export class AtributesArea {
    Description: string
    Type: TypeAtributesArea
}

export class SectionStadium {
    Id: string
    Name: string
    Capacity: number
    StateArea: StateArea
    AtributesAreas: AtributesArea[]
    SubAreaStadium: SubAreaStadium
    TotalTickets: number
    SoldTickets: number
}

export class VenueInfo {
    Name: string
    Venue: string
    Capacity: number
    GoogleMapPath: string
    GoogleMapLink: string
}

/*const seatAvabiles1: SeatsAvaibles[] = [
    {
        Empty: false,
        RowNumber: 1,
        From: 1,
        Until: 2
    },
    {
        Empty: true,
        RowNumber: 1,
        From: 3,
        Until: null
    },
    {
        Empty: false,
        RowNumber: 1,
        From: 4,
        Until: 6
    }
]

const seatAvabiles2: SeatsAvaibles[] = [
    {
        Empty: false,
        RowNumber: 2,
        From: 1,
        Until: 6
    },
]

const seatAvabiles3: SeatsAvaibles[] = [
    {
        Empty: true,
        RowNumber: 3,
        From: 1,
        Until: 3
    },
    {
        Empty: false,
        RowNumber: 3,
        From: 4,
        Until: 6
    }
]

const subAreaRow1: SubareaRow = {
    SeatNumber: 3,
    IsVirtual: false,
    ListSeatAvaibles: seatAvabiles1
}

const subAreaRow2: SubareaRow = {
    SeatNumber: 3,
    IsVirtual: false,
    ListSeatAvaibles: seatAvabiles2
}

const subAreaRow3: SubareaRow = {
    SeatNumber: 3,
    IsVirtual: false,
    ListSeatAvaibles: seatAvabiles3
}*/

const subAreaSeats1: SubAreaSeats[] = [
    {
        RowNumber: 1,
        Type: RowType.Empty,
        SeatsAmount: 12
    },
    {
        RowNumber: 1,
        Type: RowType.Available,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Reserved,
        SeatsAmount: 5
    },

    {
        RowNumber: 2,
        Type: RowType.Available,
        SeatsAmount: 12
    },
    {
        RowNumber: 2,
        Type: RowType.Reserved,
        SeatsAmount: 7
    },
    {
        RowNumber: 2,
        Type: RowType.Empty,
        SeatsAmount: 1
    },

    {
        RowNumber: 3,
        Type: RowType.Empty,
        SeatsAmount: 20
    },

    {
        RowNumber: 4,
        Type: RowType.Reserved,
        SeatsAmount: 12
    },
    {
        RowNumber: 4,
        Type: RowType.Available,
        SeatsAmount: 8
    },

    {
        RowNumber: 5,
        Type: RowType.Empty,
        SeatsAmount: 20
    },

    {
        RowNumber: 6,
        Type: RowType.Available,
        SeatsAmount: 12
    },
    {
        RowNumber: 6,
        Type: RowType.Empty,
        SeatsAmount: 3
    },
    {
        RowNumber: 6,
        Type: RowType.Reserved,
        SeatsAmount: 5
    },

    {
        RowNumber: 7,
        Type: RowType.Available,
        SeatsAmount: 10
    },
    {
        RowNumber: 7,
        Type: RowType.Reserved,
        SeatsAmount: 10
    },

    {
        RowNumber: 8,
        Type: RowType.Available,
        SeatsAmount: 20
    },

    {
        RowNumber: 9,
        Type: RowType.Available,
        SeatsAmount: 20
    },

/*    {
        RowNumber: 10,
        Type: RowType.Available,
        SeatsAmount: 9
    },

    {
        RowNumber: 11,
        Type: RowType.Available,
        SeatsAmount: 9
    },*/
]

const subAreaSeats2: SubAreaSeats[] = [
    {
        RowNumber: 1,
        Type: RowType.Empty,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Available,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Reserved,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Available,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Reserved,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Empty,
        SeatsAmount: 3
    }
]

const subAreaSeats3: SubAreaSeats[] = [
    {
        RowNumber: 1,
        Type: RowType.Empty,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Available,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Reserved,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Available,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Reserved,
        SeatsAmount: 3
    },
    {
        RowNumber: 2,
        Type: RowType.Empty,
        SeatsAmount: 3
    }
]

const atributesArea1: AtributesArea[] = [
    {
        Description: "Poca Visibilidad",
        Type: TypeAtributesArea.LowVisibility
    },
]

const atributesArea2: AtributesArea[] = [
    {
        Description: "Cerca del baño",
        Type: TypeAtributesArea.NearToilet
    },
]

const atributesArea3: AtributesArea[] = [{
    Description: "Buena Visibilidad",
    Type: TypeAtributesArea.VIP
}]

const tickets1: TicketStadium[] = [
    {
        Id: "id1",
        AreaName: "Platea Norte",
        Row: 1,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea1
    },
    {
        Id: "id2",
        AreaName: "Platea Norte",
        Row: 1,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea1
    },
    {
        Id: "id3",
        AreaName: "Platea Norte",
        Row: 1,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea1
    },
    {
        Id: "id4",
        AreaName: "Platea Norte",
        Row: 2,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea1
    },
    {
        Id: "id5",
        AreaName: "Platea Norte",
        Row: 2,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea1
    },
    {
        Id: "id6",
        AreaName: "Platea Norte",
        Row: 2,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea1
    }
]

const tickets2: TicketStadium[] = [
    {
        Id: "id7",
        AreaName: "Galeria Sur",
        Row: 1,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id8",
        AreaName: "Galeria Sur",
        Row: 1,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id9",
        AreaName: "Galeria Sur",
        Row: 1,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id10",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id11",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id12",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    }
]

const tickets3: TicketStadium[] = [
    {
        Id: "id13",
        AreaName: "Palco VIP",
        Row: 1,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id14",
        AreaName: "Palco VIP",
        Row: 1,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id15",
        AreaName: "Palco VIP",
        Row: 1,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id16",
        AreaName: "Palco VIP",
        Row: 2,
        Seat: 1,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id17",
        AreaName: "Palco VIP",
        Row: 2,
        Seat: 2,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id18",
        AreaName: "Palco VIP",
        Row: 2,
        Seat: 3,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    }
]

const mainTickets: TicketStadium[] = [
    {
        Id: "id1main",
        AreaName: "Palco Vip Sur",
        Row: 7,
        Seat: 70,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        Atributes: [{Description: "Area VIP", Type:TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    },
    {
        Id: "id2main",
        AreaName: "Galeria Norte",
        Row: 7,
        Seat: 69,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        Atributes: [{Description: "Area VIP", Type:TypeAtributesArea.VIP},
            {Description: "Asiento para discapacitados", Type: TypeAtributesArea.HandicapSeat}
            ],
        State: false
    },
    {
        Id: "id3main",
        AreaName: "Platea Sur",
        Row: 7,
        Seat: 68,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        Atributes: [{Description: "Area VIP", Type:TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    },
    {
        Id: "id4main",
        AreaName: "Galeria Sur",
        Row: 4,
        Seat: 35,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        Atributes: [{Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet},
            {Description: "Poca visibilidad", Type: TypeAtributesArea.LowVisibility}],
        State: false
    },
    {
        Id: "id5main",
        AreaName: "Palco VIP Norte",
        Row: 4,
        Seat: 34,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        Atributes: [
            {Description: "Area VIP", Type:TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}
            ],
        State: false
    },
    {
        Id: "id6main",
        AreaName: "PLatea Norte",
        Row: 4,
        Seat: 33,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        Atributes: [{Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    }
]

const subArea1: SubAreaStadium = {
    Id: "subAreaStadium1",
    Seats: subAreaSeats1,
    FirstRowTickets: tickets1,

}

const subArea2: SubAreaStadium = {
    Id: "subAreaStadium2",
    Seats: subAreaSeats2,
    FirstRowTickets: tickets2,

}

const subArea3: SubAreaStadium = {
    Id: "subAreaStadium3",
    Seats: subAreaSeats3,
    FirstRowTickets: tickets3,


}

const areaStadium: SectionStadium[] = [
    {
        Id: "area1",
        Name: "Platea Norte",
        Capacity: 30,
        StateArea: StateArea.Critic,
        AtributesAreas: atributesArea1,
        SubAreaStadium: subArea1,
        TotalTickets: 100,
        SoldTickets: 90,
    },
/*    {
        Id: "area2",
        Name: "Galeria Sur",
        Capacity: 20,
        StateArea: StateArea.NoStock,
        AtributesAreas: atributesArea2,
        SubAreaStadium: subArea2,
        TotalTickets: 100,
        SoldTickets: 50
    },
    {
        Id: "area3",
        Name: "Palco VIP",
        Capacity: 45,
        StateArea: StateArea.Normal,
        AtributesAreas: atributesArea3,
        SubAreaStadium: subArea3,
        TotalTickets: 100,
        SoldTickets: 80
    }*/
]

export namespace LayoutStadiumData {
    export const layout: AreaLayout = {
        Id: "idAreaItem1",
        Name: "Area Item 1",
        UrlSvg: "/images/juventusUpdateNew.svg",
        MainTickets: mainTickets,
        IsContinuous: true,
        AreasStadium: areaStadium
    }
}

export namespace StadiumDataInfo {
    export const data: VenueInfo = {
        Name: "Estadio Nacional de Chile",
        Venue: "Av. Grecia 2001, Ñuñoa, Región Metropolitana",
        Capacity: 10000,
        GoogleMapPath: "/images/mapEstadioNacional.png",
        GoogleMapLink: "https://goo.gl/maps/2YitxBpy1LUxEa4S6",
    }
}

const areaItemData: AreaItem[] = [
    {
        Name: "Area Item 1",
        Id: "idAreaItem1"
    },
    {
        Name: "Area Item 2",
        Id: "idAreaItem2"
    },
    {
        Name: "Area Item 3",
        Id: "idAreaItem3"
    },
    {
        Name: "Area Item 4",
        Id: "idAreaItem4"
    },
    {
        Name: "Area Item 5",
        Id: "idAreaItem5"
    }
]

export namespace VenueData{
    export const venueData: Venue = {
        FirstArea: LayoutStadiumData.layout,
        ListAreaItem: areaItemData
    }
}





