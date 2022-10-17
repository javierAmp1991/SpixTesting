import style from "/styles/Mobile/UserAccount/calendar.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ProviderCalendarInformation, CalendarContext} from "../../Providers/providerUserAccount";
import {useContext} from "react";
import CalendarEventView from "../../Desktop/UserAccount/calendarEventView";

const titleZone: string = "Mi Itinerario"
const activitiesText: string = "Actividades"
const subTitlezone: string = "Encuentra y administra tus actividades"
const dayOfWeek: string[] = ["L", "M", "M", "J", "V", "S", "D"]
const allDays: string = "Todos los dias"

export default function CalendarMobile() {
    const actualDate: Date = new Date()
    const calendarContext: ProviderCalendarInformation = useContext(CalendarContext)
    const handleSelecDay = (id: string, state: boolean) => {
        calendarContext.SelectDate(id)
        calendarContext.UpdateState(id, state)
    }
    const daySelected = calendarContext.SelectedItems
    const handleDeselectAll = ()=>{
        calendarContext.DeselectItems()
    }
    return (
        <div className={style.principalGrid}>
            <div className={style.mainDiv}>
                <div className={style.headrTitle}>
                    <div className={style.title}>
                        {titleZone}
                    </div>
                    <div className={style.subTitle}>
                        {subTitlezone}
                    </div>
                </div>
                <div className={style.mainDivMonthGrid}>
                    <div/>
                    <div className={style.divMonthArrow}>
                        <button className={style.sizeArrowMonth}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowTriangle} alt={""}/>
                        </button>
                        <div className={style.mainDivMonth}>
                            Octubre
                        </div>
                        <button className={style.sizeArrowMonth}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrowTriangle} alt={""}/>
                        </button>
                    </div>
                    <div className={style.divEventCircle}>
                        <div className={style.circle}/>
                        <button onClick={handleDeselectAll} className={style.eventsButton}>Eventos</button>
                    </div>
                </div>
                <div className={style.mainDivCalendar}>
                    {
                        dayOfWeek.map(item =>
                            <div key={item} className={style.dayOfWeek}>
                                {item}
                            </div>
                        )
                    }
                    {
                        calendarContext.ListItems.map((item) =>
                            item.Activities != null ?
                                <button onClick={() => handleSelecDay(item.Id, !item.State)} key={item.Id}
                                        className={item.ThisDate.getMonth() == actualDate.getMonth() ?
                                            item.State ? style.divDateSelected : style.divDate : style.divDateEmpty}>
                                    {
                                        item.ThisDate.getMonth() == actualDate.getMonth() &&
                                        <>
                                            <div className={style.positionNumber}>
                                                {item.ThisDate.getDate()}
                                            </div>
                                            {
                                                item.Activities != null && item.Activities.length > 1 &&
                                                <div className={style.gridCircle}>
                                                    {
                                                        item.Activities.map((item, index) =>
                                                            index >= 0 && index < 2 &&
                                                            <div className={style.circle}/>
                                                        )
                                                    }
                                                    {
                                                        item.Activities.length > 2 &&
                                                        <div className={style.plusCircle}>
                                                            <Image layout={"fill"}
                                                                   src={GlobalConst.sourceImages.plusIconBlue}
                                                                   alt={""}/>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </>
                                    }
                                </button>
                                :
                                <div key={item.Id}
                                     className={item.ThisDate.getMonth() == actualDate.getMonth() ? style.divDate : style.divDateEmpty}>
                                    {
                                        item.ThisDate.getMonth() == actualDate.getMonth() &&
                                        <>
                                            <div className={style.positionNumber}>
                                                {item.ThisDate.getDate()}
                                            </div>
                                            {
                                                item.Activities != null && item.Activities.length > 1 &&
                                                <div className={style.gridCircle}>
                                                    {
                                                        item.Activities.map((item, index) =>
                                                            index >= 0 && index <= 2 &&
                                                            <div className={style.circle}/>
                                                        )
                                                    }
                                                    {
                                                        item.Activities.length > 2 &&
                                                        <div className={style.plusCircle}>
                                                            <Image layout={"fill"}
                                                                   src={GlobalConst.sourceImages.plusIconBlue}
                                                                   alt={""}/>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </>
                                    }
                                </div>
                        )
                    }
                </div>
            </div>
            <div className={style.mainDivEvents}>
                <div className={style.gridIconHeader}>
                    <div className={style.sizeImageCalendar}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.calendarSection} alt={""}/>
                    </div>
                    <div className={style.borderHeader}>
                        <div className={style.titleCalendr}>
                            {activitiesText}
                        </div>
                        <div>
                            {
                                daySelected.length > 1 ?
                                    allDays
                                    :
                                    getDate(daySelected[0].ThisDate)

                            }
                        </div>
                    </div>
                </div>
                <div className={style.mainContSec}>
                    {
                        daySelected != null &&
                        daySelected.map((item) =>
                            <div key={item.Id} className={style.mainConteSection}>
                                <div className={style.gridEvents}>
                                    {
                                        item.Activities != null &&
                                        item.Activities.map((subItem) =>
                                            <CalendarEventView key={item.Id} item={subItem}/>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

    function getDate(date: Date): string {
        return `${date.toLocaleString("es-US", {weekday: "long"})} ${date.getDate()} de ${date.toLocaleString("es-US", {month: "short"})}`
    }
}