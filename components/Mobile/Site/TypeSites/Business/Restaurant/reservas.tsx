import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/reservas2.module.css"
import LayoutTitleMobile from "./layoutTitleMobile";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useContext} from "react";
import {ScheduleContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {PrincipalFeaturedSearch} from "../../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const grayColor: string = "rgba(0,0,0,.4)"
const title: string = "Reservas"
const disponibleTagText = "Disponibles"
const noDisponibleTagText = "Agotadas"
const closeLocalText: string = "Cerrado"
const scheduleText: string = "Reservar para: "

export default function ReservasMobile() {
    const newSchedule: Schedule[] = useContext(ScheduleContext)

    return (
        <div className={style.mainCont}>
            <div className={style.mainDiv}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.gridSelectDate}>
                    <div>
                        {scheduleText}
                    </div>
                    <div className={style.contDate}>
                        Hoy
                    </div>
                    <button className={style.sizeCalendar}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                    </button>
                </div>
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
                <div className={style.lineCircle}/>
                <div className={style.gridHoursLapse}>
                    {
                        newSchedule.map((item, index) =>

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
            </div>
          {/*  <button className={style.styleButton}>
                Reservar tu Mesa
            </button>*/}
        </div>
    )

    function getColor(isDisponible: boolean): string {
        return isDisponible == null ? grayColor : isDisponible ? greenColor : redColor
    }
}