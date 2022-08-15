import style from "/styles/Mobile/Misc/popUpMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function PopUpContainerMob({children, closePopUp, isBackground}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                <div className={style.positionDeleteIcon}>
                    <div onClick={closePopUp}
                         className={style.sizeDeleteIcon}>
                        <Image layout={"fill"}
                               src={GlobalConst.sourceImages.closeX} alt=""/>
                    </div>
                </div>
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