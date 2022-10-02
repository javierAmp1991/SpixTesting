import style from "/styles/Desktop/StadiumPage/subareaStadium.module.css";
import {LayoutStadium, RowType, SubAreaSeats} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import {
    LayoutStadiumContext,
    ProviderSelectedAreaProp,
    ProviderSelectedSubAreaProp,
    ProviderSelectedTicketProp,
    SelectedAreaContext,
    SelectedSubAreaContext,
    SelectedTicketsContext,
    LayoutSubAreaContext, LayoutSeats, LayoutRowSeats
} from "./stadiumLayutProvider";
import {useContext, useRef, useState} from "react";

/*export class LayoutSeats {
    Id?: number
    Type: RowType
    State: boolean
}

class LayoutRowSeats {
    RowNumber: number
    LayoutSeats: LayoutSeats[]
}*/

const listStateSeat: RowType[] = [RowType.Available, RowType.Reserved, RowType.Selected]

export default function SubareaStadiumDesk({closeSubAreaStadium}: { closeSubAreaStadium: Function }) {

    const selectedSubAreaContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const selectedTicketContext: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const selectdAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext);
    const layoutStadiumContext: LayoutStadium = useContext(LayoutStadiumContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext)
    const numberColums: number = layoutSeatsState[0].LayoutSeats.length + 1;
    /*let layoutRowSeatsSubArea: LayoutRowSeats[] = [];
    getLayoutRowSeats()*/
    const divWheelRef = useRef(null)

    /*const handleOnWheel = (e) => {
        scale += e.deltaY;
        setDeltaY(deltaY = scale)
        /!*scale = Math.min(Math.max(.125, scale), 4);
        divWheelRef.current.style.transform = `scale(${scale})`*!/
    }*/

    let [scaleControl, setScaleControl] = useState(1)
    const scaleAdd: number = 0.5
    const minScale: number = 1
    const maxScale: number = 4

    const handleWheelEvent = (e) => {
        if (e.deltaY < 0) {
            handleClickZoomUp()
        } else {
            handleClickZoomDown()
        }
    }
    const handleClickZoomUp = () => {
        let newScaleControl = scaleControl + scaleAdd
        if (newScaleControl > maxScale) {
            setScaleControl(scaleControl = maxScale)
            divWheelRef.current.style.transform = `scale(${maxScale})`;
        } else {
            setScaleControl(scaleControl = newScaleControl)
            divWheelRef.current.style.transform = `scale(${scaleControl})`;
        }

    }
    const handleClickZoomDown = () => {
        let newScaleControl = scaleControl - scaleAdd
        if (newScaleControl < minScale) {
            setScaleControl(scaleControl = minScale)
            divWheelRef.current.style.transform = `scale(${minScale})`;
        } else {
            setScaleControl(scaleControl = newScaleControl)
            divWheelRef.current.style.transform = `scale(${scaleControl})`;
        }
    }


    /*let [layoutSeatsState, setLayoutSeatsState] = useState(layoutRowSeatsSubArea)*/
    /*const handleClickButton = (seat: LayoutSeats) => {
        updateLayoutSeatsState(seat);
        /!*        let idTicket: string = `F${seat.RowNumber}A${seat.Id}`
                seat.State ? handleDeleteTicket(idTicket) : handleSelectedTicket(idTicket)*!/
    }*/
    /*const updateLayoutSeatsState = (seat: LayoutSeats) => {
        let newArray: LayoutSeats[] = layoutSeatsState.map(item => {
            if (item.Id == seat.Id) {
                return {...item, State: !seat.State}
            } else return {...item}

        })
        setLayoutSeatsState(layoutSeatsState = newArray)
    }*/

    const handleSelectedTicket = (idSeat: string) => {
        selectedTicketContext.AddTickets(idSeat)
    }
    const handleDeleteTicket = (idSeat: string) => {
        selectedTicketContext.DeleteTickets(idSeat)
    }
    const handleCloseSubArea = () => {
        selectdAreaContext.DeselectArea()
        closeSubAreaStadium()
    }
    const cssStyle = getCssStyle()


    return (
        <div className={style.mainSpace}>
            <div className={`${style.mainDiv}`}>
                <div className={style.gridDisponibleReturn}>
                    <button onClick={handleCloseSubArea} className={style.containerArrow}>
                        <div className={style.returnArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowExit} alt={""}/>
                        </div>
                    </button>

                    <div className={style.gridTypeSeatCont}>
                        {
                            listStateSeat.map(item =>
                                item == RowType.Reserved ?
                                    <div className={style.gridTypeSeat}>
                                        <span className={style.noDisponibleSearExa}/> Reservado
                                    </div>
                                    :
                                    item == RowType.Selected ?
                                        <div className={style.gridTypeSeat}>
                                            <span className={style.disponibleSeatClickedExa}/> Seleccionado
                                        </div>
                                        :
                                        <div className={style.gridTypeSeat}>
                                            <span className={style.disponibleSeatExa}/> Disponible
                                        </div>
                            )
                        }
                    </div>

                    {/*<div className={style.divZoom}>
                        <button onClick={handleClickZoomUp} className={style.divLesMore}>
                            +
                        </button>
                        <button onClick={handleClickZoomDown} className={style.divLesMore}>
                            -
                        </button>
                    </div>*/}
                </div>

                <div className={style.mainContRows}>
                    <div className={style.rowMatriz}>
                        <div ref={divWheelRef}  className={style.divRows}
                             style={{gridTemplateColumns: cssStyle.grid, gap: cssStyle.gap}}>
                            {
                                layoutSeatsState.map((item, index) =>
                                    <>
                                        <div className={style.rowContent}>
                                            F{item.RowNumber}
                                        </div>
                                        {
                                            item.LayoutSeats.map((subItem) =>
                                                subItem.Type == RowType.Empty ?
                                                    <div className={style.emptySeat}/>
                                                    :
                                                    subItem.Type == RowType.Available ?
                                                        <button key={index}
                                                                className={selectedTicketContext.IsSelectedTicket(`${item.RowNumber}${subItem.Id}`) ?
                                                                    style.disponibleSeatClicked : style.disponibleSeat}>
                                                            {subItem.Id}
                                                        </button>
                                                        :
                                                        <div className={style.noDisponibleSear}>
                                                            {subItem.Id}
                                                        </div>
                                            )
                                        }
                                    </>
                                )
                                /*layoutSeatsState.map((item, index) =>
                                    item.Type == RowType.Empty ?
                                        <span className={style.emptySeat}/>
                                        :
                                        item.Type == RowType.Available ?
                                            <button onClick={() => handleClickButton(item)} key={index}
                                                    className={item.State ? style.disponibleSeatClicked : style.disponibleSeat}>
                                                {item.Id}
                                            </button>
                                            :
                                            <span className={style.noDisponibleSear}>
                                                {item.Id}
                                            </span>
                                )*/
                                /* selectedSubAreaContext.SelectedSubArea.Seats.map((item, index) =>
                                     [...Array(item.SeatsAmount)].map(() =>
                                         item.Type == RowType.Empty ?
                                             <span
                                                 className={style.emptySeat}>{getNumberSeat(item.Type, item.RowNumber)}</span>
                                             :
                                             <button onClick={() => handleSelectedTicket("F1A1")} key={index}
                                                     className={item.Type == RowType.Available ? style.disponibleSeat : style.noDisponibleSear}>
                                                 {
                                                     getNumberSeat(item.Type, item.RowNumber)
                                                 }
                                             </button>
                                     ))*/
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    /*function getLayoutRowSeats() {
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

        selectedSubAreaContext.SelectedSubArea.Seats.forEach((item) => {
            if (item.RowNumber == rowNumberControl) createSeat(item)
            else {
                createRowSeat()
                resetSeatControlLayoutSeat()
                createSeat(item)
            }
        })

    }*/

    function getCssStyle() {
        return {
            grid: `repeat(${numberColums}, minmax(30px, 1fr))`,
            gap: "16px",
        }
    }

    function getNumberColums(): number {
        let numberColums: number = 1
        selectedSubAreaContext.SelectedSubArea.Seats.forEach((itemSub) => {
            if (itemSub.RowNumber == 1) numberColums = numberColums + itemSub.SeatsAmount
        })
        return numberColums
    }

    /*function getRowFile(num: number): boolean {
        if (rowFileControl == num) {
            rowFileControl += 1
            return true
        } else {
            return false
        }
    }*/

    /*function updateSeatNumber(rowNumber: number): number {
        let newSeatNumber: number
        if (rowNumberControl == rowNumber) {
            newSeatNumber = seatNumberControl
            seatNumberControl += 1
        } else {
            seatNumberControl = 1;
            newSeatNumber = seatNumberControl
            seatNumberControl += 1
            rowNumberControl = rowNumber
        }
        return newSeatNumber
    }*/

    /*function getNumberSeat(rowType: RowType, rowNumber): number {
        if (rowType != RowType.Empty) {
            return updateSeatNumber(rowNumber)
        }
    }*/

    /*function getLayoutSeats() {
    let seatControl: number = 1;
    let rowNumberControl = 1

    function getId(type: RowType): number {
        if (layoutStadiumContext.IsContinuous) {
            if (type != RowType.Empty) {
                let newSeatControl = seatControl
                seatControl += 1
                return newSeatControl
            } else return null
        }
        else{

        }


        /!* if (layoutStadiumContext.IsContinuous) {
             if (type != RowType.Empty) {
                 let newCounter = seatControl
                 seatControl += 1;
                 return newCounter;
             }
             return null
         } else {
             if (type != RowType.Empty) {

                 let newSeatNumber;
                 if (rowNumberControl == rowNumber) {
                     newSeatNumber = seatControl
                     seatControl += 1
                 } else {
                     seatControl = 1;
                     newSeatNumber = seatControl
                     seatControl += 1
                     rowNumberControl += 1
                 }
                 return newSeatNumber
             }
             return null
         }*!/

    }



    selectedSubAreaContext.SelectedSubArea.Seats.forEach((item) => {
        if (item.RowNumber == rowNumberControl) {
            [...Array(item.SeatsAmount)].forEach(() =>
                layoutRowSeatsSubArea = [...layoutRowSeatsSubArea, createSeat(item)])
        } else {

        }
    })
}*/
}