import style from "/styles/Desktop/Misc/popUp.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function PopUpContainer({children, closePopUp, isBackground}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                <Image onClick={closePopUp}
                     className={style.sizeDeleteIcon}
                     src={GlobalConst.sourceImages.closeX} alt=""/>
                {children}
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            modalBackground: isBackground ? style.renderDiv : style.renderDivTransparent
        }
    }
}