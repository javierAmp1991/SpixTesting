import style from "/styles/Desktop/WriteNew/writeNew.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {EventPageEvent} from "../../../dataDemo/data";
import React from "react";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../../Mobile/Misc/principalInfoEventMobile";

export default function SideCardNew() {
    const newItem: PrincipalInfoEventPropMob = {
        Title: "Tributo a PetShop Boys y A ha",
        Subtitle: "Lo mejor del rock ochentero",
        isDarkMode: false,
        Rating: 20
    }
    return (
        <div>
            <div className={style.bannerStyle}>
                <Image layout={"fill"} objectFit={"cover"} src={EventPageEvent.eventPage.BannerPath} alt={""}/>
            </div>
            <div className={style.mainDivPadding}>
                <div className={style.mainContInfo}>
                    <PrincipalInfoEventMobile item={newItem}/>
                </div>

                <div className={style.mainContPrevNew}>
                    <div className={utilities.borderCardDesktopNoHover}>
                        <div className={style.stylePortada}>
                            <Image layout={"fill"} src={"/images/new2.webp"} alt={""}/>
                        </div>
                        <div className={style.gridNew}>
                            <div className={`${style.title} ${utilities.clamp1}`}>
                                Titulo noticia para comprobar el largo
                            </div>
                            <div className={`${style.subtitle} ${utilities.clamp2}`}>
                                Bajada noticia para comprobar el largo con el que se va a ver cuando se ponga cada uno de los
                            </div>
                            <div className={utilities.fontPrimaryText}>
                                Hoy
                            </div>
                            <div className={utilities.styleLink}>
                                Leer noticia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}