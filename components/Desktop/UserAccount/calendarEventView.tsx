import Image from "next/image";
import style from "/styles/Desktop/UserAccount/calendarEventView.module.css"
import {CalendarEventViewProp} from "../../Providers/providerUserAccount";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";


export default function CalendarEventView({item}: { item: CalendarEventViewProp }) {
    return (
        <Link href={item.Link}>
            <a className={style.mainGrid}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                </div>
                <div className={style.mainDivInfo}>
                    <div className={`${style.title} ${utilities.clamp2}`}>
                        {item.Title}
                    </div>
                    {/*<div className={`${style.subTitle} ${utilities.clamp1}`}>
                        {item.Subtitle}
                    </div>*/}
                    <div className={style.date}>
                        {getDate(item.ThisDate)}
                    </div>
                </div>
                <div className={style.gridCircleHour}>
                    <div className={style.circle}/>
                    <div className={style.hours}>
                        {getNumberDateWith0(item.ThisDate.getHours())}:{getNumberDateWith0(item.ThisDate.getMinutes())} hrs.
                    </div>
                </div>
            </a>
        </Link>
    )

    function getDate(date: Date): string {
        return `${date.toLocaleString("es-US", {weekday: "long"})} ${date.getDate()} de ${date.toLocaleString("es-US", {month: "short"})}`
    }

    function getNumberDateWith0(num: number): string {
        if (num <= 9) return `0${num}`
        return `${num}`
    }
}