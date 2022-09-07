import Image from "next/image";
import style from "/styles/Mobile/Search/newSearch.module.css"
import utilities from "/styles/utilities.module.css";
import {News} from "../../../dataDemo/data";
const goTotheEvent: string = "Ir al Evento"
export default function NewSearcPrincipalMobile({item}: { item: News }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.boxShadowCard}>
                <div className={style.gridImageInfo}>
                    <div className={style.sizeImagePrincipal}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                    </div>
                    <div className={style.gridInfo}>
                        <div className={style.grid1}>
                            <div className={`${style.styleTitle} ${utilities.clamp2}`}>
                                {item.Title}
                            </div>
                            <div className={utilities.fontSecundaryText}>
                                {item.Date}
                            </div>
                        </div>
                        <div>
                            <div className={`${style.fontSubTitle} ${utilities.clamp3}`}>
                                {item.SubTitle}
                            </div>
                            <div className={`${utilities.styleLink} ${style.writeNewPrincipal}`}>
                                Leer Noticia
                            </div>
                        </div>
                        <div className={style.gridButton}>
                            <button className={`${style.styleButtonNo} ${utilities.fontPrimaryText}`}>
                                {goTotheEvent}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}