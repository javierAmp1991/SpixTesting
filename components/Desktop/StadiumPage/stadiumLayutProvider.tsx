import {
    LayoutStadium,
    LayoutStadiumData,
    TicketStadium,
    AreaStadium,
    SubAreaStadium,
    StadiumData,
    StadiumDataInfo, RowType, SubAreaSeats,
} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import React, {createContext, useEffect, useState} from "react";
import MapPopUp, {MapPopUpProp} from "../Misc/mapPopUp";
import PopUpContainer from "../Misc/popUpContainer";
import TicketStadiumDesktop from "./ticketStadium";
import styleProvider from "/styles/Desktop/StadiumPage/styleProvider.module.css"
import utilities from "/styles/utilities.module.css";
import {CategoryFilter} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";

export class ProviderSelectedTicketProp {
    SelectedTickets: TicketStadium[];
    AddTickets: Function;
    DeleteTickets: Function;
    IsSelectedTicket: Function;
}

export class ProviderSelectedSubAreaProp {
    SelectedSubArea: SubAreaStadium;
    SelectSubArea: Function;
    DeSelectSubArea: Function;

}

export class ProviderSelectedAreaProp {
    SelectedArea: AreaStadium;
    SelectArea: Function;
    DeselectArea: Function;
}

export class ProviderSelectableTicketProp {
    SelectableTickets: TicketStadium[];
    AddTickets: Function;
    DeleteTickets: Function;
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

const layoutStadium: LayoutStadium = LayoutStadiumData.layout;
const stadiumData: StadiumData = StadiumDataInfo.data;
export const LayoutStadiumContext = createContext(null);
export const SelectedAreaContext = createContext(null);
export const SelectedSubAreaContext = createContext(null);
export const SelectedTicketsContext = createContext(null);
export const StadiumDataContext = createContext(null);
export const SelectableTicketsContext = createContext(null);
export const PopUpStadiumContext = createContext(null);
export const PopUpSelectedTickets = createContext(null);
export const LayoutSubAreaContext = createContext(null);
export const FiltersContext = createContext(null);

const orderByFilters: CategoryFilter[] = [
    {
        Id: "12345abcde",
        ImagePath: "/images/dollarUp.png",
        Name: "Menor a Mayor",
        IsSelected: false
    },
    {
        Id: "12345abcdedasdsw",
        ImagePath: "/images/dollarDown.png",
        Name: "Mayor a Menor",
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
        Name: "VIP",
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

export default function StadiumLayutProvider({children}) {
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
    //region hooks
    let [mainTickets, setMainTickets] = useState(layoutStadium.MainTickets)
    let [allAreasStadium, setAllAreasStdium] = useState(layoutStadium.AreasStadium)

    let [areaStadium, setAreaStadium] = useState(null)
    const handleSelectArea = (id: string) => {
        allAreasStadium.forEach(item => {
            if (item.Id == id) {
                setAreaStadium(areaStadium = item)
            }
        })
    }
    const handleDeselectArea = () => setAreaStadium(areaStadium = null)
    let providerAreaSelected: ProviderSelectedAreaProp = {
        SelectedArea: areaStadium,
        SelectArea: handleSelectArea,
        DeselectArea: handleDeselectArea
    }

    let [selectableTickets, setSelectableTickets] = useState([])
    const handleAddSelectableTickets = (idTicket: string) => {
        /*allTicketsData.forEach(item => {
            if (`${item.Row}${item.Seat}` == idTicket) {
                setSelectableTickets(selectableTickets = [...selectableTickets, item])
            }
        })*/
    }
    const handleDeleteSelectableTickets = (idTicket: string) => {
        let newListSelectionableTickets = selectableTickets.filter(item => `F${item.Row}A${item.Seat}` != idTicket)
        setSelectableTickets(selectableTickets = newListSelectionableTickets)
    }
    let providerSelectableTickets: ProviderSelectableTicketProp = {
        SelectableTickets: selectableTickets,
        AddTickets: handleAddSelectableTickets,
        DeleteTickets: handleDeleteSelectableTickets
    }

    let [selectedTickets, setSelectedTickets] = useState([])
    const handleSelectTickets = (id: string) => {
        selectedTickets.length > 0 ?
            !isSelectedTicket(id) &&
            addTicket(id)
            :
            addTicket(id)
    }

    function isSelectedTicket(id: string): boolean {
        let control: boolean = false
        selectedTickets.forEach((item: TicketStadium) => {
            if (`${item.Row}${item.Seat}` == id) {
                control = true
            }
        })
        return control
    }

    function addTicket(id: string) {
        layoutStadium.AreasStadium.forEach((item) => {
            item.SubAreaStadium.FirstRowTickets.forEach(((subItem) => {
                if (`${subItem.Row}${subItem.Seat}` == id) {
                    setSelectedTickets(selectedTickets = [...selectedTickets, subItem])
                }
            }))
        })
        layoutStadium.MainTickets.forEach((item) => {
            `${item.Row}${item.Seat}` == id &&
            setSelectedTickets(selectedTickets = [...selectedTickets, item])
        })
    }/**/

    const handleDeleteTickets = (id: string) => {
        let newListTickets = selectedTickets.filter(item => `${item.Row}${item.Seat}` != id)
        setSelectedTickets(selectedTickets = newListTickets)
    }
    let providerTicketSelected: ProviderSelectedTicketProp = {
        SelectedTickets: selectedTickets,
        AddTickets: handleSelectTickets,
        DeleteTickets: handleDeleteTickets,
        IsSelectedTicket: isSelectedTicket
    }

    let [subAreaSelected, setSubAreaSelected] = useState(null)
    const handleSubAreaSelected = (id) => {
        layoutStadium.AreasStadium.forEach((item) => {
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
    useEffect(() => {
        if (subAreaSelected != null) {
            getLayoutRowSeats()
            setLayoutRowSeats(layoutRowSeats = layoutRowSeatsSubArea)
        }
    }, [subAreaSelected])
    useEffect(() => {
        let newLayoutRowSeat = layoutRowSeats.map((item) => {
            let newlayoutSeat = item.LayoutSeats.map((subItem) => {
                if (isSelectedTicket(`${subItem.Id}`)) {
                    return {...subItem, State: true}
                } else return subItem
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
    const handleCloseMap = () => {
        setDisplayMap(displayMap = false)
    }

    let [displaySelectedTickets, setDisplaySelectedTickets] = useState(false)
    const handleOpenSelectedTickets = () => {
        setDisplaySelectedTickets(displaySelectedTickets = true)
    }
    const handleCloseSelectedTickets = () => {
        setDisplaySelectedTickets(displaySelectedTickets = false)
    }
    //endregion
    return (
        <StadiumDataContext.Provider value={stadiumData}>
            <LayoutStadiumContext.Provider value={layoutStadium}>
                <SelectedSubAreaContext.Provider value={providerSubareaSelected}>
                    <SelectedTicketsContext.Provider value={providerTicketSelected}>
                        <SelectedAreaContext.Provider value={providerAreaSelected}>
                            <SelectableTicketsContext.Provider value={providerSelectableTickets}>
                                <FiltersContext.Provider value={providerFilters}>
                                    <LayoutSubAreaContext.Provider value={layoutRowSeats}>
                                        <PopUpStadiumContext.Provider value={handleOpenMap}>
                                            <PopUpSelectedTickets.Provider value={handleOpenSelectedTickets}>
                                                {children}
                                                {
                                                    displayMap &&
                                                    <PopUpContainer isButtonVisible={true} isBackground={true}
                                                                    closePopUp={handleCloseMap}>
                                                        <MapPopUp item={popUp}/>
                                                    </PopUpContainer>
                                                }
                                                {
                                                    displaySelectedTickets &&
                                                    <PopUpContainer isButtonVisible={true} isBackground={true}
                                                                    closePopUp={handleCloseSelectedTickets}>
                                                        <div className={styleProvider.mainDiv}>
                                                            <div
                                                                className={`${utilities.fontTitleDesktop} ${styleProvider.title}`}>
                                                                Entradas seleccionadas
                                                            </div>
                                                            {
                                                                selectedTickets.length == 0 ?
                                                                    <div>
                                                                        No hay entradas seleccionadas
                                                                    </div>
                                                                    :
                                                                    <div className={styleProvider.gridTickets}>
                                                                        {
                                                                            selectedTickets.map(item =>
                                                                                <TicketStadiumDesktop styleDiv={false}
                                                                                                      key={item.Id}
                                                                                                      item={item}/>)
                                                                        }
                                                                    </div>
                                                            }

                                                        </div>
                                                    </PopUpContainer>
                                                }
                                            </PopUpSelectedTickets.Provider>
                                        </PopUpStadiumContext.Provider>
                                    </LayoutSubAreaContext.Provider>
                                </FiltersContext.Provider>
                            </SelectableTicketsContext.Provider>
                        </SelectedAreaContext.Provider>
                    </SelectedTicketsContext.Provider>
                </SelectedSubAreaContext.Provider>
            </LayoutStadiumContext.Provider>
        </StadiumDataContext.Provider>
    )

    function getLayoutRowSeats() {
        let seatControl: number = 1;
        let rowNumberControl = 1;
        let layoutSeatTest: LayoutSeats[] = []

        function getSeatNumber(type: RowType): number {
            if (type != RowType.Empty) {
                let newSeatControl = seatControl
                seatControl += 1
                return newSeatControl
            } else return null
        }

        function createSeat(item: SubAreaSeats) {
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

        function resetSeatControlLayoutSeat() {
            rowNumberControl += 1
            layoutSeatTest = []
        }

        subAreaSelected.Seats.forEach((item) => {
            if (item.RowNumber == rowNumberControl) createSeat(item)
            else {
                createRowSeat()
                resetSeatControlLayoutSeat()
                createSeat(item)
            }
        })

    }
}