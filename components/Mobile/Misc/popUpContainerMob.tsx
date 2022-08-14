import style from "/styles/Mobile/Misc/popUpMobile.module.css"
import {GlobalConst} from "../../../public/globalConst";

export default function PopUpContainerMob({children, closePopUp, isBackground}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                <img onClick={closePopUp}
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