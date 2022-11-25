import style from "/styles/Desktop/Misc/popUp.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import React, {ReactNode} from "react";
import utilities from "/styles/utilities.module.css";

export default function PopUpContainer({children, closePopUp, isBackground, isButtonVisible}:
                                           {
                                               children: ReactNode, closePopUp: Function,
                                               isBackground: boolean, isButtonVisible: boolean
                                           }) {
    const cssStyle = getCssStyle()
    const handleClose = () => closePopUp()
    return (
        <div className={style.mainDiv}>
            <div onClick={handleClose} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                {
                    isButtonVisible &&
                    <button onClick={handleClose}
                            className={`${style.positionDeleteIcon}  ${cssStyle.opacityButton} `}>
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