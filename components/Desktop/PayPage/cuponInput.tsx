import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/PayPage/cuponInput.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";
import Image from "next/image";

export class inputCuponValues {
    placeHolder: string;
    titleCupon: string;
}

const titleButton: string = "Aplicar"

export default function CuponInput({cuponProp}: { cuponProp: inputCuponValues }) {
    let [isDisplayCupon, setDisplayCupon] = useState(false)
    const handleDisplayCupon = () => setDisplayCupon(isDisplayCupon = !isDisplayCupon)
    const cssStyle = getCssStyle()

    return (
        <div className={style.containerCupon}>
            <div className={cssStyle.containerStyle}>
                <div onClick={handleDisplayCupon} className={style.gridTitleCupon}>
                    <div className={utilities.fontPrimaryText}>
                        {cuponProp.titleCupon}
                    </div>
                    <div className={`${style.sizeArrow} ${cssStyle.rotateArrow}`}>
                        <Image layout={"fill"}
                               src={GlobalConst.sourceImages.upArrow} alt=""/>
                    </div>
                </div>
                <div className={style.gridCupon}>
                    <input className={style.inputCupon} type="text" placeholder={cuponProp.titleCupon}/>
                    <div className={`${style.applyContainer} ${utilities.fontSecundaryText}`}>
                        {titleButton}
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            containerStyle: isDisplayCupon ? style.containerCuponOut : style.containerCuponIn,
            rotateArrow: isDisplayCupon ? style.rotateArrow : style.normalArrow,
        }
    }
}