import Image from "next/image";
import style from "/styles/Desktop/Search/newsSearch.module.css"
import utilities from "/styles/utilities.module.css";
import {News} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";
import Link from "next/link";

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
                            <Link href={""}>
                                <a>
                                    <span>Por: </span>
                                    <span className={utilities.styleLink}> {item.Event}</span>
                                </a>
                            </Link>
                        </div>
                        <div className={`${utilities.fontPrimaryText} ${utilities.clamp4}`}>
                            {item.SubTitle}
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            <button className={style.styleButton}>
                                Ir al Evento
                            </button>
                        </div>
                        <div className={`${utilities.gridMaxContent2} justify-between`}>
                            <div className={`${utilities.styleLink}`}>
                                Leer Noticia
                            </div>
                            <div className={utilities.fontPrimaryText}>
                                {item.Date}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}