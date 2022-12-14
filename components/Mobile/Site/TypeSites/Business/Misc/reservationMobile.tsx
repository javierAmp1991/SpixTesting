import style from "/styles/Mobile/Site/TypeSite/Bussines/Misc/reservas2.module.css"
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useState} from "react";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {DatePicker} from "@material-ui/pickers";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import LayoutTitleCustomMobile from "./layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";

const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const grayColor: string = "rgba(0,0,0,.4)"
const title: string = "Reservas"
const disponibleTagText = "Disponibles"
const noDisponibleTagText = "Agotadas"
const closeLocalText: string = "Cerrado"
const scheduleText: string = "Reservar para: "

export default function ReservationMobile({item, buttonText}: { item: Schedule[], buttonText: string }) {
    let [dateSelected, setDateSelected] = useState(new Date)
    let [oficialDate, setOficialDate] = useState(new Date)
    let [displayDate, setDisplayDate] = useState(false)
    const handleDisplayDate = () => setDisplayDate(displayDate = !displayDate)
    const handleConfirmDate = () => {
        setOficialDate(oficialDate = dateSelected)
        handleDisplayDate()
    }
    const handleDateChange = (e) => {
        setDateSelected(dateSelected = e)
    }
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        PaddingUnderHeader: 0
    }

    return (
        <LayoutTitleCustomMobile item={propLayoutTitle}>
            <div className={style.mainCont}>
                <div className={style.gridSelectDate}>
                    <div>
                        {scheduleText}
                    </div>
                    <button onClick={handleDisplayDate} className={style.contDateButton}>
                        <div>
                            {oficialDate.toLocaleDateString()}
                        </div>
                        <div className={style.sizeCalendar}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                        </div>
                    </button>
                </div>
                <div className={style.gridTags}>
                    <div className={style.gridSquareTag}>
                        <span className={`${style.disp} ${style.baseSquare}`}/>{disponibleTagText}
                    </div>
                    <div className={style.gridSquareTag}>
                        <span className={`${style.res} ${style.baseSquare}`}/>{noDisponibleTagText}
                    </div>
                    <div className={style.gridSquareTag}>
                        <span className={`${style.close} ${style.baseSquare}`}/>{closeLocalText}
                    </div>
                </div>
                <div className={style.lineCircle}/>
                <div className={style.gridHoursLapse}>
                    {
                        item.map((item, index) =>
                            <div key={item.Id}
                                 style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                 className={`${style.baseTag} 
                                     ${(index + 1) % 2 == 0 ? style.leftSide : style.rightSide}`}>
                                <div>{item.Hour} hrs.</div>
                                <span style={{
                                    border: `2px solid ${getColor(item.IsDisponible)}`,
                                    left: (index + 1) % 2 == 0 ? "calc(100% + 10px)" : "-22px"
                                }}
                                      className={style.baseCircle}/>
                            </div>
                        )
                    }
                </div>
                <div className={style.lineCircle}/>
                <button className={style.styleButton}>
                    {buttonText}
                </button>
                {
                    displayDate &&
                    <PopUpContainerMob closePopUp={handleDisplayDate} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.titlePopUp}>
                                Seleccionar Fecha
                            </div>
                            <div className={style.borderDataPicker}>
                                <DatePicker variant={"static"}
                                            value={dateSelected}
                                            className={style.dataPicker}
                                            onChange={handleDateChange}/>
                            </div>
                            <div className={style.gridButtonPopUp}>
                                <button onClick={handleDisplayDate} className={style.styleButtonPopUp}>
                                    Cancelar
                                </button>
                                <button onClick={handleConfirmDate} className={style.styleButtonPopUp}>
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </PopUpContainerMob>
                }
            </div>
        </LayoutTitleCustomMobile>

    )

    function getColor(isDisponible: boolean): string {
        return isDisponible == null ? grayColor : isDisponible ? greenColor : redColor
    }
}