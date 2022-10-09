import style from "/styles/Mobile/StadiumPage/subareaStadium.module.css";
import {RowType} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import {ProviderSelectedAreaProp, SelectedAreaContext, SelectedSubAreaContext,} from "./stadiumLayoutProviderMobile";
import {useContext} from "react";

import {
    ProviderSelectedSectionProp, ProviderSelectedSubAreaProp, SelectedSectionContext,
    SelectedZoneContext, LayoutSubAreaContext, LayoutRowSeats,
    DetailsSectionContext, ProviderDetailsSectionProp, SelectedTicketsContext, ProviderSelectedTicketProp
} from "../../Desktop/StadiumPage/stadiumLayutProvider";

const listStateSeat: RowType[] = [RowType.Available, RowType.Reserved, RowType.Selected]

export default function SubareaStadiumMobile({closeSubAreaStadium}: { closeSubAreaStadium: Function }) {

    const selectedTicketContext: ProviderSelectedTicketProp = useContext(SelectedTicketsContext)
    const selectedSubAreaContext: ProviderSelectedSubAreaProp = useContext(SelectedZoneContext);
    const selectdSectionContext: ProviderSelectedSectionProp = useContext(SelectedSectionContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext);
    const selectedSectionContext: ProviderSelectedSectionProp = useContext(SelectedSectionContext)
    const detailSectionContext: ProviderDetailsSectionProp = useContext(DetailsSectionContext)
    const numberColums: number = layoutSeatsState[0].LayoutSeats.length + 1;

    const handleClickSeat = (idSeat: string, isSelected: boolean) => {
        selectedTicketContext.AddTicketFromSeats(idSeat, isSelected)
    }
    const handleCloseSubArea = () => {
        selectdSectionContext.DeselectSection()
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
                                                <button onClick={() => detailSectionContext.SelectRowInformation(item.RowNumber)}
                                                        className={selectedSectionContext.SelectedSection.SectionDetail.RowNumber == item.RowNumber ?
                                                            style.rowContentSelected : style.rowContent}>
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
                                                        <button onClick={() => handleClickSeat(`${item.RowNumber}${subItem.Id}`, subItem.State)}
                                                            key={index}
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
            gap: "12px",
        }
    }

}