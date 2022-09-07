import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/newsSearch.module.css"
import {News} from "../../../dataDemo/data";
import Link from "next/link";

const writeRNew: string = "Leer noticia"
const goToTheEvent: string = "Ir al evento"

export default function NewsSearchDesktop({item, isSubtitle}: { item: News, isSubtitle: boolean }) {
    return (
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage} alt={""}/>
            </div>
            <div className={style.absCont}>
                <div className={`${style.fontTitle} ${utilities.clamp2}`}>
                    {item.Title}
                </div>
                <div className={`${utilities.fontSecundaryText} ${style.eventNew}`}>
                    {item.Date}
                </div>
                {
                    isSubtitle &&
                    <div className={`${utilities.clamp2} ${style.fontSubTitle}`}>
                        {item.SubTitle}
                    </div>
                }
                <Link href={""}>
                    <a className={style.gridReadNew}>
                        <span className={`${utilities.styleLink} ${style.writeNew}`}>
                            {writeRNew}
                        </span>
                    </a>
                </Link>
            </div>

        </div>
    )
}