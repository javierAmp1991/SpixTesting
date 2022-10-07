import style from "/styles/Desktop/Misc/popUpLogo.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";

export default function PopUpContainerLogo({children, closePopUp, isBackground, isButtonVisible}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                {
                    isButtonVisible &&
                    <div onClick={closePopUp} className={style.positionDeleteIcon}>
                        <div className={style.sizeDeleteIcon}>
                            <Image layout={"fill"} objectFit={"cover"}
                                   src={GlobalConst.sourceImages.closeX} alt=""/>
                        </div>
                    </div>
                }
                <div className={style.logoSpix}>
                    <Image layout={"fill"} src={"/images/spixBlue.png"}/>
                </div>

                <div className={style.mainContorno}>
                    {children}
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            modalBackground: isBackground ? style.renderDiv : style.renderDivTransparent
        }
    }
}