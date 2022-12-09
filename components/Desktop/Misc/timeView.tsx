import style from "/styles/Desktop/Misc/timeView.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
const durationTime: string = "Tiempo de duracion: "

export default function TimeView({item}: { item: string }) {
    return (
        <div className={style.gridChronoText}>
            <div className={style.chronoIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
            </div>
            <div className={style.duration}>
                {durationTime} {item} min
            </div>
        </div>
    )
}