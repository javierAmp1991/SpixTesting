import Image from "next/image";
import style from "/styles/Desktop/Search/newsSearch.module.css"
import utilities from "/styles/utilities.module.css";
import {News} from "../../../dataDemo/data";

export default function NewSearcPrincipalDesktop({item}: { item: News }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.boxShadowCard}>
                <div className={style.gridImageInfo}>
                    <div className={style.sizeImagePrincipal}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                    </div>
                    <div className={style.gridInfo}>
                        <div className={`${utilities.fontTitle}`}>
                            {item.Title}
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            Evento: {item.Event}
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            Fecha: {item.Date}
                        </div>
                        <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                            {item.SubTitle}
                        </div>
                        <div className={`${utilities.styleLink} ${style.writeNewPrincipal}`}>
                            Leer Noticia
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}