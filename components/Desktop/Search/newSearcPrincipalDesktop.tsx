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
                            <div className={`${utilities.fontTitle}`}>
                                {item.Title}
                            </div>
                            <Link href={"/eventPage"}>
                                <a>
                                    <span>Por: </span>
                                    <span className={utilities.styleLink}>{item.Event}</span>
                                </a>
                            </Link>
                            <div className={utilities.fontPrimaryText}>
                                Fecha: {item.Date}
                            </div>
                        </div>
                        <div className={`${utilities.fontPrimaryText} ${utilities.clamp4}`}>
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