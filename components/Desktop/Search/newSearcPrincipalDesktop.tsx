import Image from "next/image";
import style from "/styles/Desktop/Search/newsSearch.module.css"
import utilities from "/styles/utilities.module.css";
import {News} from "../../../dataDemo/data";

export default function NewSearcPrincipalDesktop({item}: { item: News }) {
    return (
        <div className={style.boxShadowCard}>
            <div className={style.gridImageInfo}>
                <div className={style.sizeImagePrincipal}>
                    <Image layout={"fill"} src={item.PathImage} alt={""}/>
                </div>
                <div className={style.gridInfo}>
                    <div className={`${utilities.fontTitle}`}>
                        {item.Title}
                    </div>
                    <div className={utilities.fontPrimaryText}>
                        {item.Event}
                    </div>
                    <div className={utilities.fontPrimaryText}>
                        {item.Date}
                    </div>
                </div>
            </div>
            <div className={style.contInfo}>
                <div className={utilities.fontPrimaryText}>
                    {item.SubTitle}
                </div>
                <div className={`${utilities.styleLink} ${style.writeNew}`}>
                    Leer Noticia
                </div>
            </div>
        </div>
    )
}