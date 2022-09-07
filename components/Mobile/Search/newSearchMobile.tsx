import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Search/newSearch.module.css"
import {News} from "../../../dataDemo/data";

const writeRNew: string = "Leer noticias"
const goToEvent: string = "Ir al Evento"

export default function NewsSearchMobile({item}: { item: News }) {
    return (
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage}/>
            </div>
            <div className={style.absCont}>
                <div>
                    <div className={`${style.fontTitle} ${utilities.clamp2}`}>
                        {item.Title}
                    </div>
                    <div className={`${utilities.fontSecundaryText} mt-1`}>
                        {item.Date}
                    </div>
                </div>
                <div>
                    <div className={`${utilities.clamp2} ${style.SubTitle}`}>
                        {item.SubTitle}
                    </div>
                    <div className={`${utilities.styleLink} ${style.writeNew}`}>
                        {writeRNew}
                    </div>
                </div>
                {
                    item.HasEvent &&
                    <div className={style.gridButton}>
                        <button className={style.styleButton}>
                            {goToEvent}
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}