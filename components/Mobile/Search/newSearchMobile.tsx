import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Search/newSearch.module.css"
import {News} from "../../../dataDemo/data";
const writeRNew: string = "Leer noticias"

export default function NewsSearchMobile({item} : {item: News}){
    return(
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage}/>
            </div>
            <div className={style.absCont}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                    {item.SubTitle}
                </div>
                <div className={`${utilities.styleLink} ${style.writeNew}`}>
                    {writeRNew}
                </div>
            </div>
        </div>
    )
}