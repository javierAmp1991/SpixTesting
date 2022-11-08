import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/reservas2.module.css"
import LayoutTitleMobile from "./layoutTitleMobile";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useContext} from "react";
import {ScheduleContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {PrincipalFeaturedSearch} from "../../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const title: string = "Reservas"
const horarioText: string = "Horario:"
const disponibleTagText = "Reservas Disponibles"
const noDisponibleTagText = "Reservas agotadas"

export default function ReservasMobile() {
    const schedule: Schedule[] = useContext(ScheduleContext)
    const newSchedule: Schedule[] = getSchedule()

    function getSchedule(): Schedule[] {
        return schedule.filter(item => item.IsDisponible != null)
    }

    return (
        <div className={style.mainCont}>
            <div className={style.mainDiv}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.hour}>
                    {horarioText} de 08:00 a 20:00
                </div>
                <div className={style.gridTags}>
                    <div className={style.tagDisponible1}>
                        {disponibleTagText}
                    </div>
                    <div className={style.tagReservado1}>
                        {noDisponibleTagText}
                    </div>
                    <div className={style.tagDisponible2}/>
                    <div className={style.tagReservado2}/>
                </div>
                <div className={style.lineCircle}/>
                <div className={style.gridHoursLapse}>
                    {
                        newSchedule.map((item, index) =>

                            <div key={item.Id}
                                 style={{borderBottom: `2px solid ${item.IsDisponible ? greenColor : redColor}`}}
                                 className={`${style.baseTag} 
                                     ${(index + 1) % 2 == 0 ? style.leftSide : style.rightSide}`}>
                                <div>{item.Hour} hrs.</div>
                                <span style={{
                                    border: `2px solid ${item.IsDisponible ? greenColor : redColor}`,
                                    left: (index + 1) % 2 == 0 ? "calc(100% + 10px)" : "-22px"
                                }}
                                      className={style.baseCircle}/>
                            </div>
                        )
                    }
                </div>
                <div className={style.lineCircle}/>
            </div>
            <button className={style.styleButton}>
                Reservar tu Mesa
            </button>
        </div>
    )
}