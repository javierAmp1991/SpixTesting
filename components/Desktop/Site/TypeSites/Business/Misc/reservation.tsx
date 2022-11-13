import style from "/styles/Desktop/Site/TypeSite/Bussines/Misc/reservastion.module.css"
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useState} from "react";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {DatePicker} from "@material-ui/pickers";
import PopUpContainer from "../../../../Misc/popUpContainer";
import LayoutTitleCustom from "./layoutTitleCustom";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";

const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const grayColor: string = "rgba(0,0,0,.4)"
const title: string = "Reservas"
const disponibleTagText = "Disponibles"
const noDisponibleTagText = "Reservadas"
const closeLocalText: string = "Cerrado"
const scheduleText: string = "Reservar para: "

export default function Reservation({item}: { item: Schedule[] }) {
    const schedule: Schedule[] = item
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
        PaddingUnderHeader: 0,
        PaddingBottom: 32
    }
    return (
        <LayoutTitleCustom item={propLayoutTitle}>
            <div className={style.mainCont}>
                <div className={style.mainDiv}>
                    <div className={style.gridSelectDate}>
                        <div>
                            {scheduleText}
                        </div>
                        <button onClick={handleDisplayDate} className={style.contDateButton}>
                            <div>
                                {oficialDate.toLocaleDateString()}
                            </div>
                            <div className={style.sizeCalendar}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                            </div>
                        </button>
                    </div>
                    <div className={style.gridInfo}>
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
                        <div className={style.gridTimeLapse}>
                            <div className={style.gridHoursLapse}>
                                {
                                    schedule.map((item, index) =>
                                        index <= 7 ?
                                            item.IsDisponible ?
                                                <button className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTag}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </button>
                                                :
                                                <div className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTagNoHover}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </div>
                                            :
                                            <></>
                                    )
                                }
                            </div>
                            <div className={style.gridHoursLapse}>
                                {
                                    schedule.map((item, index) =>
                                        index > 7 && index <= 15 ?
                                            item.IsDisponible ?
                                                <button className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTag}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </button>
                                                :
                                                <div className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTagNoHover}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </div>
                                            :
                                            <></>
                                    )
                                }
                            </div>
                            <div className={style.gridHoursLapse}>
                                {
                                    schedule.map((item, index) =>
                                        index > 15 && index <= 23 ?
                                            item.IsDisponible ?
                                                <button className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTag}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </button>
                                                :
                                                <div className={style.contH}>
                                                    <div key={item.Id}
                                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                                         className={`${style.baseTagNoHover}`}>
                                                        <div>{item.Hour} hrs.</div>
                                                    </div>
                                                    <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                                          className={style.baseCircle}/>
                                                </div>
                                            :
                                            <></>
                                    )
                                }
                            </div>
                        </div>
                        {/*  <button className={style.styleButton}>
                        {reserveTable}
                    </button>*/}
                    </div>
                </div>
                {
                    displayDate &&
                    <PopUpContainer closePopUp={handleDisplayDate} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.titlePopUp}>
                                Seleccionar Fecha
                            </div>
                            <div className={style.borderDataPicker}>
                                <DatePicker variant={"static"}
                                            orientation={"landscape"}
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
                    </PopUpContainer>
                }
            </div>
        </LayoutTitleCustom>
    )

    function getColor(isDisponible: boolean): string {
        return isDisponible == null ? grayColor : isDisponible ? greenColor : redColor
    }
}