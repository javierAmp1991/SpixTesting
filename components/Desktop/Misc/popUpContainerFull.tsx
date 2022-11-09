import style from "/styles/Desktop/Misc/popUpFull.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React from "react";
import utilities from "/styles/utilities.module.css";

export default function PopUpContainerFull({children, closePopUp, isBackground, isButtonVisible}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                {
                    isButtonVisible &&
                    <button onClick={closePopUp} className={`${style.positionDeleteIcon}  ${cssStyle.opacityButton} `}>
                        <div className={style.sizeDeleteIcon}>
                            <Image layout={"fill"} objectFit={"cover"}
                                   src={GlobalConst.sourceImages.closeX} alt=""/>
                        </div>
                    </button>
                }
                {children}
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            modalBackground: isBackground ? style.renderDiv : style.renderDivTransparent,
            opacityButton: !isBackground && utilities.opacity7
        }
    }
}