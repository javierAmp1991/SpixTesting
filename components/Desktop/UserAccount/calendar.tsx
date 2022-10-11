import style from "/styles/Desktop/UserAccount/calendar.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ProviderCalendarInformation, CalendarContext} from "../../Providers/providerUserAccount";
import {useContext} from "react";

const dayOfWeek: string[] = ["L", "M", "M", "J", "V", "S", "D"]

export default function Calendar() {
    const actualDate: Date = new Date()
    const calendarContext: ProviderCalendarInformation = useContext(CalendarContext)
    return (
        <div className={style.mainDiv}>
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
                        <button key={item.Id}
                                className={item.ThisDate.getMonth() == actualDate.getMonth() ? style.divDate : style.divDateEmpty}>
                            {
                                item.ThisDate.getMonth() == actualDate.getMonth() &&
                                <>
                                    {
                                        <div className={ item.Activities != null ? style.positionNumberWhite : style.positionNumber}>
                                            {item.ThisDate.getDate()}
                                        </div>
                                    }
                                    {
                                        item.Activities != null &&
                                        <>
                                            <span className={style.blackGradient}/>
                                            <div className={style.sizeImage}>
                                                <Image layout={"fill"} objectFit={"cover"}
                                                       src={item.Activities[0].PathImage} alt={""}/>
                                            </div>
                                        </>
                                    }
                                    {
                                        item.Activities != null && item.Activities.length > 1 &&
                                        <>
                                            <div className={style.NumberActivity}>
                                                {item.Activities.length - 1}+
                                            </div>
                                        </>
                                    }
                                </>
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}