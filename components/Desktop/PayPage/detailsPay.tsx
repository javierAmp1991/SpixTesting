import style from "/styles/Desktop/PayPage/detailsPay.module.css"
import utilities from "/styles/utilities.module.css"
import ButtonBlueDesk from "../Misc/buttonBlue";
import CuponInput, {inputCuponValues} from "./cuponInput";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

const goToPay: string = "Ir a pagar"
const cancel: string = "Canceslar"
const propCupon: inputCuponValues = {
    titleCupon: "Ingresa tu cupon",
    placeHolder: "Ingresa tu cupón"
}
const propCuponRipley: inputCuponValues = {
    titleCupon: "Ingresa tu cupon Ripley",
    placeHolder: "Ingresa tu cupón"
}

export default function DetailsPay() {
    return (
        <div className={style.mainContainer}>
            <div className={style.gridFull}>
                <div className={`${utilities.fontTitle} ${style.paddingTitle}`}>
                    Resumen Compra
                </div>

                <div className={style.grid}>
                    <div className={style.paddingSection}>
                        Productos (6)
                    </div>
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
                    <CuponInput cuponProp={propCupon}/>
                    <CuponInput cuponProp={propCuponRipley}/>
                </div>

                <div className={`${utilities.fontTitle} ${style.totalConainer}`}>
                    <div>Total:</div>
                    <div> $199.999</div>
                </div>

                <div className={style.timerContainer}>
                    <Image className="h-4 w-auto" src={GlobalConst.sourceImages.timerRed} alt=""/>
                    <span>09:08:23 para finalizar su compra</span>
                </div>
            </div>

            <div className={style.buttonContainer}>
                    <ButtonBlueDesk text={cancel}/>
                    <ButtonBlueDesk text={goToPay}/>
            </div>
        </div>
    )
}