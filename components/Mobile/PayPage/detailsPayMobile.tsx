import style from "/styles/Mobile/PayPage/detailsPay.module.css"
import utilities from "/styles/utilities.module.css"
import ButtonBlueDesk from "../Misc/buttonBlue";
import {GlobalConst} from "../../../public/globalConst";
import CuponInputMobile from "./cuponInputMobile";
import {inputCuponValues} from "../../Desktop/PayPage/cuponInput";
import Image from "next/image";
import Timer from "../../Desktop/Misc/timer";

const goToPay: string = "Pagar"
const cancel: string = "Cancelar"
const finishText: string = "para finalizar su compra"
const propCupon: inputCuponValues = {
    titleCupon: "Ingresa tu cupon",
    placeHolder: "Ingresa tu cupón"
}
const propCuponRipley: inputCuponValues = {
    titleCupon: "Ingresa tu cupon Ripley",
    placeHolder: "Ingresa tu cupón"
}


export default function DetailsPayMobile({displaySelectedItem}) {
    return (
        <div className={style.mainContainer}>
            <div className={style.gridTitleCar}>
                <div className={`${utilities.fontTitle}`}>
                    Resumen Compra
                </div>
                <button onClick={displaySelectedItem} className="relative">
                    <div className={style.sizeBuyCar}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.buyCarNormal} alt=""/>
                    </div>
                    <span className={style.positionNumberCar}>6</span>
                </button>
            </div>
            <div className={style.grid}>
                <div className={style.gridItems}>
                    <div className={utilities.fontPrimaryText}>Bruto</div>
                    <div className={utilities.fontPriceInclude}>$ 99.999</div>
                </div>
                <div className={style.gridItems}>
                    <div className={utilities.fontPrimaryText}>Bruto</div>
                    <div className={utilities.fontPriceInclude}>$ 99.999</div>
                </div>
                <div className={style.gridItems}>
                    <div className={utilities.fontPrimaryText}>Bruto</div>
                    <div className={utilities.fontPriceInclude}>$ 99.999</div>
                </div>
            </div>
            <div className={style.gridCupons}>
                <CuponInputMobile cuponProp={propCupon}/>
                <CuponInputMobile cuponProp={propCuponRipley}/>
            </div>
            <div className={`${utilities.fontTitle} ${style.gridItems} ${style.totalConainer}`}>
                <div> Total</div>
                <div> $199.999</div>
            </div>
            <div className={style.timerContainer}>
                <div className={style.sizeIconTimer}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.timerRed} alt=""/>
                </div>
                <div>
                    <Timer isDays={false}/>
                </div>
                <div>
                    {finishText}
                </div>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.maxWidthButton}>
                    {cancel}
                </button>
                <button className={style.maxWidthButton}>
                    {goToPay}
                </button>
            </div>
        </div>
    )
}