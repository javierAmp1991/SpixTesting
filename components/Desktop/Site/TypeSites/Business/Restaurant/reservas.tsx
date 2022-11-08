import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/reservas2.module.css"
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useContext} from "react";
import {ScheduleContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const grayColor: string = "rgba(0,0,0,.2)"
const title: string = "Reservas"
const horarioText: string = "Horario:"
const disponibleTagText = "Reservas Disponibles"
const noDisponibleTagText = "Reservas agotadas"
const closeLocalText: string = "Local cerrado"
const reserveTable: string = " Reservar tu Mesa"

export default function Reservas() {
    const schedule: Schedule[] = useContext(ScheduleContext)
    return (
        <div className={style.mainCont}>
            <div className={style.mainDiv}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.hour}>
                    {horarioText} de 08:00 a 20:00
                </div>
                <div className={style.gridInfo}>
                    <div className={style.gridTags}>
                        <div className={style.tagDisponible1}>
                            {disponibleTagText}
                        </div>
                        <div className={style.tagReservado1}>
                            {noDisponibleTagText}
                        </div>
                        <div className={style.tagNoAtention1}>
                            {closeLocalText}
                        </div>
                        <div className={style.tagDisponible2}/>
                        <div className={style.tagReservado2}/>
                        <div className={style.tagNoAtention2}/>
                    </div>
                    <div className={style.gridTimeLapse}>
                        <div className={style.gridHoursLapse}>
                            {
                                schedule.map((item, index) =>
                                    index <= 7 &&
                                    <div key={item.Id}
                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                         className={`${style.baseTag}`}>
                                        <div>{item.Hour} hrs.</div>
                                        <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                              className={style.baseCircle}/>
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.gridHoursLapse}>
                            {
                                schedule.map((item, index) =>
                                    index > 7 && index <= 15 &&
                                    <div key={item.Id}
                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                         className={`${style.baseTag}`}>
                                        <div>{item.Hour} hrs.</div>
                                        <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                              className={style.baseCircle}/>
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.gridHoursLapse}>
                            {
                                schedule.map((item, index) =>
                                    index > 15 && index <= 23 &&
                                    <div key={item.Id}
                                         style={{borderBottom: `2px solid ${getColor(item.IsDisponible)}`}}
                                         className={`${style.baseTag}`}>
                                        <div>{item.Hour} hrs.</div>
                                        <span style={{border: `2px solid ${getColor(item.IsDisponible)}`}}
                                              className={style.baseCircle}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <button className={style.styleButton}>
                        {reserveTable}
                    </button>
                </div>
            </div>
        </div>
    )

    function getColor(isDisponible: boolean): string {
        return isDisponible == null ? grayColor : isDisponible ? greenColor : redColor
    }
}