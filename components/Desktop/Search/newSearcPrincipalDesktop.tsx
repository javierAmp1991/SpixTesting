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
                        <div className={style.grid1}>
                            <div className={style.styleTitle}>
                                {item.Title}
                            </div>
                            <div className={utilities.fontSecundaryText}>
                                {item.Date}
                            </div>
                        </div>
                        <div>
                            <div className={`${style.fontSubTitle} ${utilities.clamp4}`}>
                                {item.SubTitle}
                            </div>
                            <div className={`${utilities.styleLink} mt-2`}>
                                Leer Noticia
                            </div>
                        </div>
                        {
                            item.HasEvent &&
                            <div className={`${utilities.fontPrimaryText} ${style.gridButton}`}>
                                <button className={style.styleButton}>
                                    Ir al Evento
                                </button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}