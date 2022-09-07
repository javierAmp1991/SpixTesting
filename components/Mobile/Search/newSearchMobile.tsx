import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Search/newSearch.module.css"
import {News} from "../../../dataDemo/data";
import Link from "next/link";

const writeRNew: string = "Leer noticias"
const goToEvent: string = "Ir al Evento"

export default function NewsSearchMobile({item}: { item: News }) {
    return (
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage}/>
            </div>
            <div className={style.absCont}>
                    <div className={`${style.fontTitle} ${utilities.clamp2}`}>
                        {item.Title}
                    </div>
                    <div className={`${utilities.fontSecundaryText}`}>
                        {item.Date}
                    </div>
                    <Link href={""}>
                        <a className={`${utilities.styleLink} ${style.writeNew}`}>
                            <span>{writeRNew}</span>
                        </a>
                    </Link>
                {/* <div className={`${utilities.clamp2} ${style.fontSubTitle}`}>
                        {item.SubTitle}
                    </div>*/}
            </div>
        </div>
    )
}