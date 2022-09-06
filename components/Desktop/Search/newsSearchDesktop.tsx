import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/newsSearch.module.css"
import {News} from "../../../dataDemo/data";
const writeRNew: string = "Leer noticias"

export default function NewsSearchDesktop({item} : {item: News}){
    return(
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage}/>
            </div>
            <div className={style.absCont}>
                <div className={`${utilities.fontName} ${utilities.clamp2}`}>
                    {item.Title}
                </div>
                <div className={`${utilities.fontPrimaryText} ${style.eventNew}`}>
                    Evento: {item.Event}
                </div>
                <div className={`${utilities.styleLink} ${style.writeNew}`}>
                    {writeRNew}
                </div>
            </div>
        </div>
    )
}