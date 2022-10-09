import {
    Section, AreaLayout, LayoutStadiumData,
    RowType, VenueInfo, StadiumDataInfo,
    Seats, SectionDetails, TicketStadium,
    Venue, VenueData, SectionsDetailData
} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import React, {createContext, useEffect, useState} from "react";
import {MapPopUpProp} from "../Misc/mapPopUp";
import {CategoryFilter} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";

export class ProviderSelectedTicketProp {
    SelectedTickets: TicketStadium[];
    AddTickets: Function;
    DeleteTickets: Function;
    IsTicketSelected: Function;
    AddTicketFromSeats: Function
}

export class ProviderSelectedSubAreaProp {
    SelectedSubArea: SectionDetails;
    SelectSubArea: Function;
    DeSelectSubArea: Function;

}

export class ProviderSelectedSectionProp {
    SelectedSection: Section;
    SelectSection: Function;
    DeselectSection: Function;
}

export class LayoutSeats {
    Id?: number
    Type: RowType
    State: boolean
}

export class LayoutRowSeats {
    RowNumber: number
    LayoutSeats: LayoutSeats[]
}

export class ProviderFiltersPop {
    OrderByFilters: CategoryFilter[]
    AtributesFilters: CategoryFilter[]
    SelectOrderByFilter: Function
    SelectSecundaryFilter: Function
}

export class ProviderVenueAreaProp {
    Area: AreaLayout
    SelectArea: Function
}

export class ProviderDetailsSectionProp {
    DetailSection: LayoutRowSeats[]
    SelectRowInformation: Function
}

export class ProviderNumberWantProp {
    NumberWant: number
    ListNumberWant: number[]
    SelectNumber: Function
}

export class ProviderStateUserProp {
    DateLastMove: Date
    UpdateLastMove: Function
}

export class ProviderPopUpProp {
    IsMapOpen: boolean
    MapPopUp: MapPopUpProp
    CloseMapPopUp: Function
    OpenMapPopUp: Function
}

export class ProviderPopUpTickets {
    IsOpenPopUpTickets: boolean
    Tickets: TicketStadium[]
    OpenPopUpTickets?: Function
    ClosePopUpTickets: Function
}

class ControlFromSeats {
    IdRowSeat: string
    IsSelected: boolean
}

export const LayoutStadiumContext = createContext(null);
export const SelectedSectionContext = createContext(null);
export const SelectedZoneContext = createContext(null);
export const SelectedTicketsContext = createContext(null);
export const StadiumDataContext = createContext(null);
export const PopUpVenueContext = createContext(null);
export const PopUpSelectedTickets = createContext(null);
export const PopUpDeletedTickets = createContext(null);
export const LayoutSubAreaContext = createContext(null);
export const FiltersContext = createContext(null);
export const VenueDataContext = createContext(null)
export const VenueAreaContext = createContext(null)
export const DetailsSectionContext = createContext(null)
export const NumberTicketWant = createContext(null)
export const StateUserContext = createContext(null)

const controlTimeMiliSeg: number = 600000;
const linkToRedirect: string = "http://localhost:3000/VenuePage"
const layoutStadium: AreaLayout = LayoutStadiumData.layout;
const stadiumData: VenueInfo = StadiumDataInfo.data;
const venueDataInformation: Venue = VenueData.venueData
const orderByFilters: CategoryFilter[] = [
    {
        Id: "12345abcde",
        ImagePath: "/images/dollarUp.png",
        Name: "Menor a mayor precio",
        IsSelected: false
    },
    {
        Id: "12345abcdedasdsw",
        ImagePath: "/images/dollarDown.png",
        Name: "Mayor a menor precio",
        IsSelected: false
    },
]
const atributesFilters: CategoryFilter[] = [
    {
        Id: "inOffer",
        ImagePath: GlobalConst.sourceImages.inOfferIcon,
        Name: "En Oferta",
        IsSelected: false
    },
    {
        Id: "vip",
        ImagePath: GlobalConst.sourceImages.crownIcon,
        Name: "Entradas VIP",
        IsSelected: false
    },
    {
        Id: "specialSeats",
        ImagePath: GlobalConst.sourceImages.discIcon,
        Name: "Asientos especiales",
        IsSelected: false
    },
    {
        Id: "goodView",
        ImagePath: GlobalConst.sourceImages.lowVisibility,
        Name: "Buena visibilidad",
        IsSelected: false
    },
    {
        Id: "234ddsaddsad238",
        ImagePath: GlobalConst.sourceImages.toiletIcon,
        Name: "Cercania a baños",
        IsSelected: false
    }

]
let controlFromSeatsDefault: ControlFromSeats = {
    IdRowSeat: "",
    IsSelected: false
}
const listSectionDetails: SectionDetails[] = SectionsDetailData.list

const listNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function StadiumLayutProvider({children}) {

    //region filtersProvider
    let [principalFilters, setPrincipalFilters] = useState(orderByFilters)
    const handleClickPrincipalFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = principalFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return {...item, IsSelected: false}
        })
        setPrincipalFilters(principalFilters = newListFilter)
    }
    let [secundaryFilters, setSecundaryFilters] = useState(atributesFilters)
    const handleSecundaryFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = secundaryFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return item
        })
        setSecundaryFilters(secundaryFilters = newListFilter)
    }
    let providerFilters: ProviderFiltersPop = {
        OrderByFilters: principalFilters,
        AtributesFilters: secundaryFilters,
        SelectOrderByFilter: handleClickPrincipalFilters,
        SelectSecundaryFilter: handleSecundaryFilters
    }
    //endregion

    //region hooks

    let [dateLastMove, setDateLastMove] = useState(new Date())
    const handleMovUser = () => {
        setDateLastMove(dateLastMove = new Date())
    }
    let providerStateUser: ProviderStateUserProp = {
        DateLastMove: dateLastMove,
        UpdateLastMove: handleMovUser
    }
    useEffect(() => {
        function isActive() {
            let actualDate: Date = new Date()
            var timePasses = actualDate.getTime() - dateLastMove.getTime()
            if (timePasses > controlTimeMiliSeg) {
                window.location.href = linkToRedirect
            }

        }

        const timer = setInterval(isActive, 10000)
        return () => clearInterval(timer)
    })

    let [venueAreaSelected, setVenueAreaSelected] = useState(venueDataInformation.FirstArea)
    const handleSelectVenueArea = (id: string) => {
        let newVenueAreaSelected = venueDataInformation.FirstArea
        setVenueAreaSelected(venueAreaSelected = newVenueAreaSelected)
    }
    const providerVenuaArea: ProviderVenueAreaProp = {
        Area: venueAreaSelected,
        SelectArea: handleSelectVenueArea
    }

    let [sectionSelected, setSectionSelected] = useState(null)
    const handleSelectSection = (id: string) => {
        let newSectionSelected = venueAreaSelected.AreasStadium[0]
        setSectionSelected(sectionSelected = newSectionSelected)
    }
    const handleDeselectSection = () => setSectionSelected(sectionSelected = null)
    let providerSectionSelected: ProviderSelectedSectionProp = {
        SelectedSection: sectionSelected,
        SelectSection: handleSelectSection,
        DeselectSection: handleDeselectSection
    }

    let [detailsSection, setDetailsSection] = useState(null)
    const detailSectionLayout: LayoutRowSeats[] = []
    const handleUpdateRowSection = (numberRow: number) => {
        listSectionDetails.forEach((item) => {
            item.RowNumber == numberRow &&
            setSectionSelected(sectionSelected = {...sectionSelected, SectionDetail: item})
        })
    }
    useEffect(() => {
        if (detailsSection != null) {
            getLayoutSection()
            setDetailsSection(detailsSection = detailSectionLayout)
        }
    }, [detailsSection])
    let providetDetailSection: ProviderDetailsSectionProp = {
        DetailSection: detailsSection,
        SelectRowInformation: handleUpdateRowSection
    }

    let [selectedTickets, setSelectedTickets] = useState([])
    let [controlFromSeats, setControlFromSeats] = useState(controlFromSeatsDefault)
    const handleSelectTickets = (ticket: TicketStadium) => {
        let numberTicketsSelected: number = selectedTickets.length
        if (numberTicketsSelected < numberTicketWant) setSelectedTickets(selectedTickets = [...selectedTickets, ticket])
        else {
            let newListTickets = selectedTickets.filter((item, index) => index != 0)
            newListTickets = [...newListTickets, ticket]
            setSelectedTickets(selectedTickets = newListTickets)
        }
    }
    const handleDeleteTickets = (ticket: TicketStadium) => {
        let newListTickets = selectedTickets.filter(item => item.Id != ticket.Id)
        setSelectedTickets(selectedTickets = newListTickets)
    }

    function isTicketSelected(id: string): boolean {
        let control: boolean = false
        selectedTickets.forEach((item: TicketStadium) => {
            if (`${item.Row}${item.Seat}` == id) control = true
        })
        return control
    }

    useEffect(() => {
        handleSelectTickectFromSeats(controlFromSeats.IdRowSeat, controlFromSeats.IsSelected)
    }, [controlFromSeats])
    useEffect(() => {
        if (sectionSelected != null && selectedTickets.length > 0) {
            let numberControl: number = sectionSelected.SectionDetail.RowNumber
            selectedTickets.forEach((item: TicketStadium) => {
                if (item.Row == numberControl) {
                    if (!sectionSelected.SectionDetail.RowTickets.includes(item)) {
                        handleAddTicketsDelete(item)
                        handleDeleteTickets(item)
                    }
                }
            })
        }
    }, [sectionSelected])

    const handleSelectTickectFromSeats = (idRowSeat: string, isSelected: boolean) => {
        if (sectionSelected != null) {
            let control: boolean = false
            let ticket: TicketStadium;
            sectionSelected.SectionDetail.RowTickets.forEach((item) => {
                if (`${item.Row}${item.Seat}` == idRowSeat) {
                    control = true
                    ticket = item
                }
            })
            if (control) {
                if (isSelected) handleDeleteTickets(ticket)
                else handleSelectTickets(ticket)
            } else {
                let newControlFromSeats: ControlFromSeats = {
                    IdRowSeat: idRowSeat,
                    IsSelected: isSelected
                }
                setControlFromSeats(controlFromSeats = newControlFromSeats)
                handleUpdateRowSection(parseInt(idRowSeat[0]))
            }
        }
    }
    const providerTicketSelected: ProviderSelectedTicketProp = {
        SelectedTickets: selectedTickets,
        AddTickets: handleSelectTickets,
        DeleteTickets: handleDeleteTickets,
        IsTicketSelected: isTicketSelected,
        AddTicketFromSeats: handleSelectTickectFromSeats
    }

    let [subAreaSelected, setSubAreaSelected] = useState(null)
    const handleSubAreaSelected = (id) => {
        allAreasStadium.forEach((item) => {
            if (item.SectionDetail.Id == id) {
                setSubAreaSelected(subAreaSelected = item.SectionDetail)
            }
        })
    }
    const handleSubAreaDeSelected = () => setSubAreaSelected(subAreaSelected = null)
    let providerSubareaSelected: ProviderSelectedSubAreaProp = {
        SelectedSubArea: subAreaSelected,
        SelectSubArea: handleSubAreaSelected,
        DeSelectSubArea: handleSubAreaDeSelected
    }

    let layoutRowSeatsSubArea: LayoutRowSeats[] = [];
    let [layoutRowSeats, setLayoutRowSeats] = useState([])
    useEffect(() => {
        if (subAreaSelected != null) {
            getLayoutSection()
            setLayoutRowSeats(layoutRowSeats = layoutRowSeatsSubArea)
        }
    }, [subAreaSelected])
    useEffect(() => {
        function isInsideSelected(idSeatRow: string): boolean {
            let control: boolean = false
            selectedTickets.forEach((item: TicketStadium) => {
                if (idSeatRow == `${item.Row}${item.Seat}`) {
                    control = true
                }
            })
            return control
        }

        let newLayoutRowSeat = layoutRowSeats.map((item) => {
            let newlayoutSeat = item.LayoutSeats.map((subItem) => {
                if (isInsideSelected(`${item.RowNumber}${subItem.Id}`)) {
                    return {...subItem, State: true}
                } else return {...subItem, State: false}
            })
            return {...item, LayoutSeats: newlayoutSeat}
        })
        setLayoutRowSeats(layoutRowSeats = newLayoutRowSeat)
    }, [selectedTickets])

    let [popUpDeleteTicket, setPopUpDeleteTicket] = useState(false)
    const handleOpenPopUpDeleteTickets = () => setPopUpDeleteTicket(popUpDeleteTicket = true)
    const handleClosePopUpDeleteTickets = () => {
        setPopUpDeleteTicket(popUpDeleteTicket = false)
        handleCleanTicketsDelete()
    }

    let [ticketsDeletes, setDeleteTickets] = useState([])
    const handleAddTicketsDelete = (ticket: TicketStadium) => {
        setDeleteTickets(ticketsDeletes = [...ticketsDeletes, ticket])
    }
    const handleCleanTicketsDelete = () => setDeleteTickets(ticketsDeletes = [])
    useEffect(() => {
        ticketsDeletes.length > 0 &&
        handleOpenPopUpDeleteTickets()
    }, [ticketsDeletes])
    let providerDeleteTickets: ProviderPopUpTickets = {
        IsOpenPopUpTickets: popUpDeleteTicket,
        Tickets: ticketsDeletes,
        ClosePopUpTickets: handleClosePopUpDeleteTickets
    }

    const popUp: MapPopUpProp = {
        Name: stadiumData.Name,
        Venue: stadiumData.Venue,
        Capacity: stadiumData.Capacity,
        LinkGoogleMap: stadiumData.GoogleMapLink,
        ImageMap: stadiumData.GoogleMapPath
    }
    let [displayMap, setDisplayMap] = useState(false)
    const handleOpenMap = () => {
        setDisplayMap(displayMap = true)
    }
    const handleCloseMap = () => {
        setDisplayMap(displayMap = false)
    }
    let providerPopUpContext: ProviderPopUpProp = {
        IsMapOpen: displayMap,
        MapPopUp: popUp,
        OpenMapPopUp: handleOpenMap,
        CloseMapPopUp: handleCloseMap
    }

    let [displaySelectedTickets, setDisplaySelectedTickets] = useState(false)
    const handleOpenSelectedTickets = () => {
        setDisplaySelectedTickets(displaySelectedTickets = true)
    }
    const handleCloseSelectedTickets = () => {
        setDisplaySelectedTickets(displaySelectedTickets = false)
    }
    let providerSelectedTickets: ProviderPopUpTickets = {
        IsOpenPopUpTickets: displaySelectedTickets,
        Tickets: selectedTickets,
        OpenPopUpTickets: handleOpenSelectedTickets,
        ClosePopUpTickets: handleCloseSelectedTickets
    }

    let [numberTicketWant, setNumberTicketWant] = useState(0)
    const handleNumberTicketWant = (num: number) => setNumberTicketWant(numberTicketWant = num)
    let providerNumberTicket: ProviderNumberWantProp = {
        NumberWant: numberTicketWant,
        ListNumberWant: listNumbers,
        SelectNumber: handleNumberTicketWant
    }
    useEffect(() => {
        if (selectedTickets.length > numberTicketWant) {
            let dif: number = selectedTickets.length - numberTicketWant
            let newListSelectedTickets = selectedTickets.filter((item, index) => index >= dif)
            setSelectedTickets(selectedTickets = newListSelectedTickets)
        }
    }, [numberTicketWant])

    let [allAreasStadium, setAllAreasStdium] = useState(layoutStadium.AreasStadium)

//endregion

    return (
        <VenueDataContext.Provider value={venueDataInformation}>
            <VenueAreaContext.Provider value={providerVenuaArea}>
                <StadiumDataContext.Provider value={stadiumData}>
                    <LayoutStadiumContext.Provider value={layoutStadium}>
                        <SelectedZoneContext.Provider value={providerSubareaSelected}>
                            <SelectedTicketsContext.Provider value={providerTicketSelected}>
                                <SelectedSectionContext.Provider value={providerSectionSelected}>
                                    <FiltersContext.Provider value={providerFilters}>
                                        <LayoutSubAreaContext.Provider value={layoutRowSeats}>
                                            <DetailsSectionContext.Provider value={providetDetailSection}>
                                                <NumberTicketWant.Provider value={providerNumberTicket}>
                                                    <PopUpVenueContext.Provider value={providerPopUpContext}>
                                                        <PopUpSelectedTickets.Provider value={providerSelectedTickets}>
                                                            <PopUpDeletedTickets.Provider value={providerDeleteTickets}>
                                                                <StateUserContext.Provider value={providerStateUser}>
                                                                    {children}
                                                                </StateUserContext.Provider>
                                                            </PopUpDeletedTickets.Provider>
                                                        </PopUpSelectedTickets.Provider>
                                                    </PopUpVenueContext.Provider>
                                                </NumberTicketWant.Provider>
                                            </DetailsSectionContext.Provider>
                                        </LayoutSubAreaContext.Provider>
                                    </FiltersContext.Provider>
                                </SelectedSectionContext.Provider>
                            </SelectedTicketsContext.Provider>
                        </SelectedZoneContext.Provider>
                    </LayoutStadiumContext.Provider>
                </StadiumDataContext.Provider>
            </VenueAreaContext.Provider>
        </VenueDataContext.Provider>
    )

    function getLayoutSection() {
        let seatControl: number = 1;
        let rowNumberControl = 1;
        let rowControlNumber = 1;
        let layoutSeatTest: LayoutSeats[] = []
        let controlLargeSeats = getLargeFile()

        function getSeatNumber(type: RowType): number {
            if (type != RowType.Empty) {
                let newSeatControl = seatControl
                seatControl += 1
                return newSeatControl
            } else return null
        }

        function createSeat(item: Seats) {
            [...Array(item.SeatsAmount)].forEach(() => {
                layoutSeatTest = [...layoutSeatTest, {
                    Id: getSeatNumber(item.Type),
                    Type: item.Type,
                    State: false
                }]
            })
        }

        function createRowSeat() {
            let newRowSeat: LayoutRowSeats = {
                RowNumber: rowNumberControl,
                LayoutSeats: layoutSeatTest
            }
            layoutRowSeatsSubArea = [...layoutRowSeatsSubArea, newRowSeat]
        }

        function createRowSeatEmpty() {
            let newRowSeat: LayoutRowSeats = {
                RowNumber: 0,
                LayoutSeats: layoutSeatTest
            }
            layoutRowSeatsSubArea = [...layoutRowSeatsSubArea, newRowSeat]
        }

        function resetLayoutSeatTestt() {
            layoutSeatTest = []
        }

        function resetRowNumberControl() {
            rowNumberControl += 1
        }

        function resetControlFile() {
            rowControlNumber += 1
        }

        function getLargeFile(): number {
            let largeSeats = 0
            subAreaSelected.Seats.forEach(item => {
                if (item.RowNumber == 1) {
                    largeSeats += item.SeatsAmount
                }
            })
            return largeSeats
        }

        subAreaSelected.Seats.forEach((item) => {
            if (item.RowNumber == rowControlNumber) createSeat(item)
            else {
                let counterEmpty: number = 0
                layoutSeatTest.forEach(item => {
                    if (item.Type == RowType.Empty) {
                        counterEmpty += 1
                    }
                })

                if (counterEmpty != controlLargeSeats) {
                    createRowSeat()
                    resetRowNumberControl()
                } else {
                    createRowSeatEmpty()

                }
                resetControlFile()
                resetLayoutSeatTestt()
                createSeat(item)
            }
        })

    }
}