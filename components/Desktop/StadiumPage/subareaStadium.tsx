import style from "/styles/Desktop/StadiumPage/subareaStadium.module.css";
import {RowType} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import {
    ProviderSelectedAreaProp,
    ProviderSelectedSubAreaProp,
    ProviderSelectedTicketProp,
    SelectedAreaContext,
    SelectedSubAreaContext,
    SelectedTicketsContext,
    LayoutSubAreaContext, LayoutRowSeats, SelectedTicketFromRowSeatsContext
} from "./stadiumLayutProvider";
import {useContext} from "react";

const listStateSeat: RowType[] = [RowType.Available, RowType.Reserved, RowType.Selected]

export default function SubareaStadiumDesk({closeSubAreaStadium}: { closeSubAreaStadium: Function }) {
    const selectedTicketFromRowSeatContext: Function = useContext(SelectedTicketFromRowSeatsContext)
    const selectedSubAreaContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const selectedTicketContext: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const selectdAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext)
    const numberColums: number = layoutSeatsState[0].LayoutSeats.length + 1;

    const handleClickSeat = (idSeat: string, isSelected: boolean) => {
        selectedTicketFromRowSeatContext(idSeat, isSelected)
    }
    const handleDeleteTicket = (idSeat: string) => {
        selectedTicketContext.DeleteTickets(idSeat)
    }
    const handleCloseSubArea = () => {
        selectdAreaContext.DeselectArea()
        selectedSubAreaContext.DeSelectSubArea()
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
                </div>

                <div className={style.mainContRows}>
                    <div className={style.rowMatriz}>
                        <div className={style.divRows}
                             style={{gridTemplateColumns: cssStyle.grid, gap: cssStyle.gap}}>
                            {
                                layoutSeatsState.map((item, index) =>
                                    <>
                                        {
                                            item.RowNumber != 0 ?
                                                <button className={style.rowContent}>
                                                    F{item.RowNumber}
                                                </button>
                                                :
                                                <div/>
                                        }

                                        {
                                            item.LayoutSeats.map((subItem) =>
                                                subItem.Type == RowType.Empty ?
                                                    <div className={style.emptySeat}/>
                                                    :
                                                    subItem.Type == RowType.Available ?
                                                        <button onClick={()=>handleClickSeat(`${item.RowNumber}${subItem.Id}`, subItem.State)} key={index}
                                                                className={subItem.State ?
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            grid: `repeat(${numberColums}, minmax(30px, 1fr))`,
            gap: "16px",
        }
    }

}