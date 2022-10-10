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

export class Seats {
    RowNumber: number
    Type: RowType
    SeatsAmount: number
}

export class SectionDetails {
    Id: string
    Seats: Seats[]
    RowNumber: number
    RowTickets: TicketStadium[]
}

export class AreaItem {
    Id: string
    Name: string
}

export class Venue {
    FirstArea: AreaLayout
    ListAreaItem: AreaItem[]
}

export class AreaLayout {
    Id: string
    Name: string
    UrlSvg: string
    IsContinuous: boolean
    MainTickets: TicketStadium[]
    GroupSections?: Zone[]
    AreasStadium: Section[]
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

export class Section {
    Id: string
    Name: string
    Capacity: number
    StateArea: StateArea
    AtributesAreas: AtributesArea[]
    SectionDetail: SectionDetails
    TotalTickets: number
    SoldTickets: number
}

export class Zone {
    Id: string
    Name: string
    Color: string
}

export class VenueInfo {
    Name: string
    Venue: string
    Capacity: number
    GoogleMapPath: string
    GoogleMapLink: string
}

export namespace ListZones{
    export const list: Zone[] = [
        {
            Id: "idZone1",
            Name: "Platea Sur",
            Color: "#13e3b8"
        },
        {
            Id: "idZone2",
            Name: "Platea Norte",
            Color: "#00b8ff"
        },
        {
            Id: "idZone3",
            Name: "Palco Sur",
            Color: "#ff0000"
        },
        {
            Id: "idZone4",
            Name: "Palco Norte",
            Color: "#ff9700"
        },
        {
            Id: "idZone5",
            Name: "Galeria Sur",
            Color: "#fff900"
        },
        {
            Id: "idZone6",
            Name: "Galeria Norte",
            Color: "#73ff00"
        },
        {
            Id: "idZone7",
            Name: "VIP Norte",
            Color: "#0022ff"
        },
        {
            Id: "idZone8",
            Name: "VIP Sur",
            Color: "#d300ff"
        },
    ]
}

export const listZones: Zone[] = [
    {
        Id: "idZone1",
        Name: "Platea Sur",
        Color: "#13e3b8"
    },
    {
        Id: "idZone2",
        Name: "Platea Norte",
        Color: "#00b8ff"
    },
    {
        Id: "idZone3",
        Name: "Palco Sur",
        Color: "#ff0000"
    },
    {
        Id: "idZone4",
        Name: "Palco Norte",
        Color: "#ff9700"
    },
    {
        Id: "idZone5",
        Name: "Galeria Sur",
        Color: "#fff900"
    },
    {
        Id: "idZone6",
        Name: "Galeria Norte",
        Color: "#73ff00"
    },
    {
        Id: "idZone7",
        Name: "VIP Norte",
        Color: "#0022ff"
    },
    {
        Id: "idZone8",
        Name: "VIP Sur",
        Color: "#d300ff"
    },
]

const subAreaSeats1: Seats[] = [
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
const atributesArea1: AtributesArea[] = [
    {
        Description: "Poca Visibilidad",
        Type: TypeAtributesArea.LowVisibility
    },
]
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
 /*   {
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
    }*/
]
const subArea1: SectionDetails = {
    RowNumber: 1,
    Id: "subAreaStadium1",
    Seats: subAreaSeats1,
    RowTickets: tickets1,

}

const subAreaSeats2: Seats[] = [
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
const atributesArea2: AtributesArea[] = [
    {
        Description: "Cerca del baño",
        Type: TypeAtributesArea.NearToilet
    },
]
const tickets2: TicketStadium[] = [
    {
        Id: "id7",
        AreaName: "Test Update",
        Row: 2,
        Seat: 9,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id8",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 10,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id9",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 11,
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
        Seat: 12,
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
        Seat: 13,
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
        Seat: 14,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id121",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 15,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id122",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 16,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id123",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 17,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id124",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 18,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id125",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 19,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    },
    {
        Id: "id126",
        AreaName: "Galeria Sur",
        Row: 2,
        Seat: 20,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea2
    }
]
const subArea2: SectionDetails = {
    RowNumber: 2,
    Id: "subAreaStadium2",
    Seats: subAreaSeats2,
    RowTickets: tickets2,

}

const atributesArea3: AtributesArea[] = [{
    Description: "Buena Visibilidad",
    Type: TypeAtributesArea.VIP
}]
const tickets3: TicketStadium[] = [
    {
        Id: "id13",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 40,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id14",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 41,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id15",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 42,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id16",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 43,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id17",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 44,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id18",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 45,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id19",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 46,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    },
    {
        Id: "id20",
        AreaName: "Palco VIP",
        Row: 3,
        Seat: 47,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea3
    }
]
const subAreaSeats3: Seats[] = [
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
const subArea3: SectionDetails = {
    RowNumber: 3,
    Id: "subAreaStadium3",
    Seats: subAreaSeats3,
    RowTickets: tickets3,
}

const atributesArea4: AtributesArea[] = [{
    Description: "Buena Visibilidad",
    Type: TypeAtributesArea.VIP
}]
const tickets4: TicketStadium[] = [
    {
        Id: "id41",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 48,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id42",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 49,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id43",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 50,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id44",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 51,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id45",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 52,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id46",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 53,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id47",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 54,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id48",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 55,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id49",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 56,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id50",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 57,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id51",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 58,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
    {
        Id: "id52",
        AreaName: "Palco VIP",
        Row: 4,
        Seat: 59,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea4
    },
]
const subAreaSeats4: Seats[] = [
    {
        RowNumber: 4,
        Type: RowType.Available,
        SeatsAmount: 12
    },
    {
        RowNumber: 4,
        Type: RowType.Empty,
        SeatsAmount: 3
    },
    {
        RowNumber: 1,
        Type: RowType.Reserved,
        SeatsAmount: 5
    },
]
const subArea4: SectionDetails = {
    RowNumber: 4,
    Id: "subAreaStadium4",
    Seats: subAreaSeats4,
    RowTickets: tickets4,
}

const atributesArea5: AtributesArea[] = [{
    Description: "Buena Visibilidad",
    Type: TypeAtributesArea.VIP
}]
const tickets5: TicketStadium[] = [
    {
        Id: "id51",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 65,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id52",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 66,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id53",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 67,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id54",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 68,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id55",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 69,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id56",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 70,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id57",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 71,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id58",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 72,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id59",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 73,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea5
    },
    {
        Id: "id60",
        AreaName: "Palco VIP",
        Row: 5,
        Seat: 74,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea5
    },
]
const subAreaSeats5: Seats[] = [
    {
        RowNumber: 5,
        Type: RowType.Available,
        SeatsAmount: 10
    },
    {
        RowNumber: 5,
        Type: RowType.Reserved,
        SeatsAmount: 10
    },
]
const subArea5: SectionDetails = {
    RowNumber: 5,
    Id: "subAreaStadium5",
    Seats: subAreaSeats5,
    RowTickets: tickets5,
}

const atributesArea6: AtributesArea[] = [{
    Description: "Baja Visibilidad",
    Type: TypeAtributesArea.LowVisibility
}]
const tickets6: TicketStadium[] = [
    {
        Id: "id61",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 85,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id62",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 86,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id63",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 87,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id64",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 88,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id65",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 89,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id66",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 90,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id67",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 91,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id68",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 92,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id69",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 93,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id70",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 94,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id71",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 95,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id72",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 96,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id73",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 97,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id74",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 98,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id75",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 99,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id76",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 100,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id77",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 101,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id78",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 102,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id79",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 103,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
    {
        Id: "id80",
        AreaName: "Palco VIP",
        Row: 6,
        Seat: 104,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        State: false,
        Atributes: atributesArea6
    },
]
const subAreaSeats6: Seats[] = [
    {
        RowNumber: 6,
        Type: RowType.Available,
        SeatsAmount: 10
    },
    {
        RowNumber: 6,
        Type: RowType.Reserved,
        SeatsAmount: 10
    },
]
const subArea6: SectionDetails = {
    RowNumber: 6,
    Id: "subAreaStadium6",
    Seats: subAreaSeats6,
    RowTickets: tickets6,
}

export namespace SectionsDetailData {
    export const list: SectionDetails[] = [
        subArea1, subArea2, subArea3, subArea4, subArea5, subArea6
    ]
}

const mainTickets: TicketStadium[] = [
    {
        Id: "id1main",
        AreaName: "Palco Vip Sur",
        Row: 7,
        Seat: 70,
        Price: 10000,
        Type: TypeOffer.TwoXOne,
        Discount: null,
        Atributes: [{Description: "Area VIP", Type: TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    },
    {
        Id: "id2main",
        AreaName: "Galeria Norte",
        Row: 7,
        Seat: 71,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        Atributes: [{Description: "Area VIP", Type: TypeAtributesArea.VIP},
            {Description: "Asiento para discapacitados", Type: TypeAtributesArea.HandicapSeat}
        ],
        State: false
    },
    {
        Id: "id3main",
        AreaName: "Platea Sur",
        Row: 7,
        Seat: 72,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        Atributes: [{Description: "Area VIP", Type: TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    },
    {
        Id: "id4main",
        AreaName: "Galeria Sur",
        Row: 7,
        Seat: 73,
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
        Row: 7,
        Seat: 74,
        Price: 11000,
        Type: TypeOffer.Discount2Uni,
        Discount: 30,
        Atributes: [
            {Description: "Area VIP", Type: TypeAtributesArea.VIP},
            {Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}
        ],
        State: false
    },
    {
        Id: "id6main",
        AreaName: "PLatea Norte",
        Row: 7,
        Seat: 75,
        Price: 12000,
        Type: TypeOffer.Discount,
        Discount: 19000,
        Atributes: [{Description: "Cerca del Baño", Type: TypeAtributesArea.NearToilet}],
        State: false
    }
]

const areaStadium: Section[] = [
    {
        Id: "area1",
        Name: "Platea Norte",
        Capacity: 30,
        StateArea: StateArea.Critic,
        AtributesAreas: atributesArea1,
        SectionDetail: subArea1,
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
        UrlSvg: "/images/juventusFinal.svg",
        MainTickets: mainTickets,
        IsContinuous: true,
        GroupSections: listZones,
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
]

export namespace VenueData {
    export const venueData: Venue = {
        FirstArea: LayoutStadiumData.layout,
        ListAreaItem: areaItemData
    }
}





