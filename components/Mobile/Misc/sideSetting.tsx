import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import style from "/styles/Mobile/Misc/sideSettings.module.css"

export default function SideSetting({closeDesplegable}) {
    return (
        <div className={style.widthDashBoard}>
            <div className={style.bgHeader}>
                <div className={style.header}>
                    <div className={style.contDesplegable}>
                        <div onClick={closeDesplegable} className={style.sizeCloseDesplegable}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.menuIcon}/>
                        </div>
                    </div>
                    <div className={style.contLogoSpix}>
                        <div className={style.sizeLogoSpix}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.logoSpixHeaderDesk}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.buttonSection}>
               {/* <div className={style.profileProp}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.logginIconNormal}/>
                </div>*/}
                <div className={style.styleSections}>
                    <div className={style.gridMax2}>
                        <div className={style.sizeLogginIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.logginIconNormal}/>
                        </div>
                        <div>
                            Iniciar Sesion
                        </div>
                    </div>
                    <div className={style.arrowRight}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                    </div>
                </div>

                <div className={style.styleSections}>
                    <div className={style.gridMax2}>
                        <div className={style.sizeLogginIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lightModeNavMenu}/>
                        </div>
                        <div>
                            ModoNocturno
                        </div>
                    </div>
                    <div className={style.arrowRight}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                    </div>
                </div>

                <div className={style.styleSections}>
                    <div className={style.gridMax2}>
                        <div className={style.sizeLogginIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.homeNavMenuNormal}/>
                        </div>
                        <div>
                            Home
                        </div>
                    </div>
                    <div className={style.arrowRight}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                    </div>
                </div>
            </div>


        </div>
    )
}