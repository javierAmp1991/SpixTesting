import style from "/styles/Desktop/Misc/popUp.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function PopUpContainer({children, closePopUp, isBackground}) {
    const cssStyle = getCssStyle()
    return (
        <div className={style.mainDiv}>
            <div onClick={closePopUp} className={style.blackScreen}/>
            <div className={cssStyle.modalBackground}>
                <div onClick={closePopUp}
                     className={style.positionDeleteIcon}>
                    <div className={style.sizeDeleteIcon}>
                        <Image layout={"fill"} objectFit={"cover"}
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