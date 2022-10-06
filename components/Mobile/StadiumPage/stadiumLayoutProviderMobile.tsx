import {
    Section,
    AreaLayout,
    LayoutStadiumData,
    RowType,
    VenueInfo,
    StadiumDataInfo,
    Seats,
    SectionDetails,
    TicketStadium, Venue, VenueData, Zone, ListZones,
} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import React, {createContext, useEffect, useState} from "react";
import {MapPopUpProp} from "../Misc/mapPopUp";
import {CategoryFilter} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";
import PopUpContainerMob from "../../Mobile/Misc/popUpContainerMob";
import MapPopUpMobile from "../../Mobile/Misc/mapPopUp";
import SelectedTicketsMobile from "../../Mobile/StadiumPage/selectedTicketsMobile";

export class ProviderSelectedTicketProp {
    SelectedTickets: TicketStadium[];
    AddTickets: Function;
    DeleteTickets: Function;
    IsSelectedTicket: Function;
}

export class ProviderSelectedSubAreaProp {
    SelectedSubArea: SectionDetails;
    SelectSubArea: Function;
    DeSelectSubArea: Function;

}

export class ProviderSelectedAreaProp {
    SelectedArea: Section;
    SelectArea: Function;
    DeselectArea: Function;
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

export class ProviderTicketStateContextProp {
    MainTickets: TicketStadium[]
    AllAreasStadium: Section[]
}

export class ProviderPopUpSelectedTicketsProp {
    IsOpen: boolean
    OpenSelectedTickets: Function
    CloseSelectedTickets: Function
}

const layoutStadium: AreaLayout = LayoutStadiumData.layout;
const stadiumData: VenueInfo = StadiumDataInfo.data;
export const LayoutStadiumContext = createContext(null);
export const SelectedAreaContext = createContext(null);
export const SelectedSubAreaContext = createContext(null);
export const SelectedTicketsContext = createContext(null);
export const StadiumDataContext = createContext(null);
export const PopUpStadiumContext = createContext(null);
export const PopUpStadiumContextMobile = createContext(null)
export const LayoutSubAreaContext = createContext(null);
export const FiltersContext = createContext(null);
export const TicketsStateContext = createContext(null)
export const SelectedTicketsMobileContext = createContext(null)
export const VenueDataContextMobile = createContext(null)
export const ListZonesContext = createContext(null)


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

export default function StadiumLayoutProviderMobile({children}) {
    const venueDataInformation: Venue = VenueData.venueData
    const listZones: Zone[] = ListZones.list
    //region hooks
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

    let layoutRowSeatsSubArea: LayoutRowSeats[] = [];

    let [mainTickets, setMainTickets] = useState(layoutStadium.MainTickets)
    let [allAreasStadium, setAllAreasStdium] = useState(layoutStadium.AreasStadium)

    let ticketStateContext: ProviderTicketStateContextProp = {
        MainTickets: mainTickets,
        AllAreasStadium: allAreasStadium
    }

    let [areaStadiumSelected, setAreaStadiumSelected] = useState(null)
    const handleSelectArea = (id: string) => {
        allAreasStadium.forEach(item => {
            if (item.Id == id) {
                setAreaStadiumSelected(areaStadiumSelected = item)
            }
        })
    }
    const handleDeselectArea = () => setAreaStadiumSelected(areaStadiumSelected = null)
    let providerAreaSelected: ProviderSelectedAreaProp = {
        SelectedArea: areaStadiumSelected,
        SelectArea: handleSelectArea,
        DeselectArea: handleDeselectArea
    }

    let [selectedTickets, setSelectedTickets] = useState([])
    const handleSelectTickets = (ticket: TicketStadium) => {
        setSelectedTickets(selectedTickets = [...selectedTickets, {...ticket, State: true}])
        updateTicket(ticket, true)
    }
    const handleDeleteTickets = (ticket: TicketStadium) => {
        let newListTickets = selectedTickets.filter(item => item.Id != ticket.Id)
        setSelectedTickets(selectedTickets = newListTickets)
        updateTicket(ticket, false)
    }

    function updateTicket(ticket: TicketStadium, isSelected: boolean) {
        if (subAreaSelected == null) {
            let newMainTickets = mainTickets.map(item => {
                if (item.Id == ticket.Id) return {...item, State: isSelected}
                else return item
            })
            setMainTickets(mainTickets = newMainTickets)
        } else {
            let newAreasStadium = allAreasStadium.map((item) => {
                if (item.Name == areaStadiumSelected.Name) {
                    let newRowTickets = item.SubAreaStadium.RowTickets.map((subItem) => {
                        if (subItem.Id == ticket.Id) {
                            return {...subItem, State: isSelected}
                        } else return subItem
                    })
                    let newSubAreaStadium = {...item.SubAreaStadium, FirstRowTickets: newRowTickets}
                    return {...item, SubAreaStadium: newSubAreaStadium}
                } else return item
            })
            setAllAreasStdium(allAreasStadium = newAreasStadium)
        }
    }

    function isSelectedTicket(ticket: TicketStadium): boolean {
        let control: boolean = false
        selectedTickets.forEach((item: TicketStadium) => {
            if (item.Id == ticket.Id) {
                control = true
            }
        })
        return control
    }

    let providerTicketSelected: ProviderSelectedTicketProp = {
        SelectedTickets: selectedTickets,
        AddTickets: handleSelectTickets,
        DeleteTickets: handleDeleteTickets,
        IsSelectedTicket: isSelectedTicket
    }

    let [subAreaSelected, setSubAreaSelected] = useState(null)
    const handleSubAreaSelected = (id) => {
        allAreasStadium.forEach((item) => {
            if (item.SubAreaStadium.Id == id) {
                setSubAreaSelected(subAreaSelected = item.SubAreaStadium)
            }
        })
    }
    const handleSubAreaDeSelected = () => setSubAreaSelected(subAreaSelected = null)
    let providerSubareaSelected: ProviderSelectedSubAreaProp = {
        SelectedSubArea: subAreaSelected,
        SelectSubArea: handleSubAreaSelected,
        DeSelectSubArea: handleSubAreaDeSelected
    }

    let [layoutRowSeats, setLayoutRowSeats] = useState([])

    function isInsideSelected(idSeatRow: string): boolean {
        let control: boolean = false
        selectedTickets.forEach((item: TicketStadium) => {
            if (idSeatRow == `${item.Row}${item.Seat}`) {
                control = true
            }
        })
        return control
    }

    const handleUpdateLayout = () => {
        let newLayoutRowSeat = layoutRowSeats.map((item) => {
            let newlayoutSeat = item.LayoutSeats.map((subItem) => {
                if (isInsideSelected(`${item.RowNumber}${subItem.Id}`)) {
                    return {...subItem, State: true}
                } else return subItem
            })
            return {...item, LayoutSeats: newlayoutSeat}
        })
        setLayoutRowSeats(layoutRowSeats = newLayoutRowSeat)
    }

    useEffect(() => {
        if (subAreaSelected != null) {
            getLayoutRowSeats()
            setLayoutRowSeats(layoutRowSeats = layoutRowSeatsSubArea)
        }
    }, [subAreaSelected])

    useEffect(() => {
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

    let [displayMapMobile, setDisplayMapMobile] = useState(false)
    const handleOpenMapMobile = () => {
        setDisplayMapMobile(displayMap = true)
    }
    const handleCloseMapMobile = () => {
        setDisplayMapMobile(displayMapMobile = false)
    }


    let [displaySelectedTicketsMobile, setDisplaySelectedTicketsMobile] = useState(false)
    const handleOpenSelectedTicketsMobile = () => {
        setDisplaySelectedTicketsMobile(displaySelectedTicketsMobile = true)
    }
    const handleCloseSelectedTicketsMobile = () => {
        setDisplaySelectedTicketsMobile(displaySelectedTicketsMobile = false)
    }
    let selectedTicketsMobileContext: ProviderPopUpSelectedTicketsProp = {
        IsOpen: displaySelectedTicketsMobile,
        OpenSelectedTickets: handleOpenSelectedTicketsMobile,
        CloseSelectedTickets: handleCloseSelectedTicketsMobile
    }


    //endregion
    return (
        <VenueDataContextMobile.Provider value={venueDataInformation}>
            <StadiumDataContext.Provider value={stadiumData}>
                <LayoutStadiumContext.Provider value={layoutStadium}>
                    <SelectedSubAreaContext.Provider value={providerSubareaSelected}>
                        <SelectedTicketsContext.Provider value={providerTicketSelected}>
                            <SelectedAreaContext.Provider value={providerAreaSelected}>
                                <FiltersContext.Provider value={providerFilters}>
                                    <TicketsStateContext.Provider value={ticketStateContext}>
                                        <LayoutSubAreaContext.Provider value={layoutRowSeats}>
                                            <SelectedTicketsMobileContext.Provider value={selectedTicketsMobileContext}>
                                                <PopUpStadiumContext.Provider value={handleOpenMap}>
                                                    <PopUpStadiumContextMobile.Provider value={handleOpenMapMobile}>
                                                        <ListZonesContext.Provider value={listZones}>
                                                            {children}
                                                            {
                                                                displayMapMobile &&
                                                                <PopUpContainerMob isButtonVisible={true}
                                                                                   isBackground={true}
                                                                                   closePopUp={handleCloseMapMobile}>
                                                                    <MapPopUpMobile item={popUp}/>
                                                                </PopUpContainerMob>
                                                            }
                                                        </ListZonesContext.Provider>
                                                    </PopUpStadiumContextMobile.Provider>
                                                </PopUpStadiumContext.Provider>
                                            </SelectedTicketsMobileContext.Provider>
                                        </LayoutSubAreaContext.Provider>
                                    </TicketsStateContext.Provider>
                                </FiltersContext.Provider>
                            </SelectedAreaContext.Provider>
                        </SelectedTicketsContext.Provider>
                    </SelectedSubAreaContext.Provider>
                </LayoutStadiumContext.Provider>
            </StadiumDataContext.Provider>
        </VenueDataContextMobile.Provider>
    )

    function getLayoutRowSeats() {
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