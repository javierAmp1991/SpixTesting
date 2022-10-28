import style from "/styles/Mobile/Misc/popUpMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";

export default function PopUpContainerMob({children, closePopUp, isBackground, isButtonVisible}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                {
                    isButtonVisible &&
                    <div className={`${style.positionDeleteIcon} ${cssStyle.opacityButton} `}>
                        <div onClick={closePopUp}
                             className={`${style.sizeDeleteIcon} `}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.closeX} alt=""/>
                        </div>
                    </div>
                }
                {children}
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            modalBackground: isBackground ? style.renderDiv : style.renderDivTransparent,
            opacityButton: !isBackground &&  utilities.opacity7
        }
    }
}