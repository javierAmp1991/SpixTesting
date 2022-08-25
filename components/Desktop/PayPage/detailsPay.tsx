import style from "/styles/Desktop/PayPage/detailsPay.module.css"
import utilities from "/styles/utilities.module.css"
import CuponInput, {inputCuponValues} from "./cuponInput";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import Timer from "../Misc/timer";
import {useState} from "react";

const goToPay: string = "Pagar"
const cancel: string = "Cancelar"
const finishText: string = "para finalizar su compra"
export class resumeBuy {
    TotalProducts: number
    TotalPrice: number
}


export default function DetailsPay({resumeBuy}: { resumeBuy: resumeBuy }) {
    let [stateFirstCupon, setStateFirstCupon] = useState(false)
    let [stateSecondtCupon, setStateSecondCupon] = useState(false)
    let [amountDiscount1, setAmountDiscount1] = useState(0)
    let [amountDiscount2, setAmountDiscount2] = useState(0)
    const handleFirstCupon = (cupon: string) => {
        if(cupon == "first"){
            setAmountDiscount1(amountDiscount1 = 9990)
            setStateFirstCupon(stateFirstCupon = true)
        }
        else{
            setAmountDiscount1(amountDiscount1 = 0)
            setStateFirstCupon(stateFirstCupon = false)
        }
    }
    const handleSecondCupon = (cupon: string) => {
        if(cupon == "second"){
            setAmountDiscount2(amountDiscount2 = 19990)
            setStateSecondCupon(stateSecondtCupon = true)
        }
        else{
            setAmountDiscount2(amountDiscount2 = 0)
            setStateSecondCupon(stateSecondtCupon = false)
        }
    }
    const propCupon: inputCuponValues = {
        titleCupon: "Ingresa tu cupon",
        placeHolder: "Ingresa tu cupón",
        GetInputvalue: handleFirstCupon
    }
    const propCuponRipley: inputCuponValues = {
        titleCupon: "Ingresa tu cupon Ripley",
        placeHolder: "Ingresa tu cupón",
        GetInputvalue: handleSecondCupon
    }
    const newTotal = getTotalDiscount(resumeBuy.TotalPrice)
    function getTotalDiscount(oldTotal: number):number{
        let newTotal: number = oldTotal
        if(stateFirstCupon) {
            newTotal -= amountDiscount1
        }
        if(stateSecondtCupon){
            newTotal -= amountDiscount2
        }
        return newTotal
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.gridFull}>
                <div className={`${utilities.fontTitle} ${style.paddingTitle}`}>
                    Resumen Compra
                </div>

                <div className={style.grid}>
                    <div className={style.paddingSection}>
                        Productos ({resumeBuy.TotalProducts})
                    </div>
                    <div className={style.gridItems}>
                        <div className={utilities.fontPrimaryText}>Bruto</div>
                        <div className={utilities.fontPriceInclude}>${Intl.NumberFormat("ES-CL"
                        ).format(Math.round(resumeBuy.TotalPrice * 0.81))}</div>
                    </div>
                    <div className={style.gridItems}>
                        <div className={utilities.fontPrimaryText}>Iva</div>
                        <div className={utilities.fontPriceInclude}>+ ${Intl.NumberFormat("ES-CL"
                        ).format(Math.round(resumeBuy.TotalPrice * 0.19))}</div>
                    </div>
                    {
                        stateFirstCupon &&
                        <div className={style.gridItems}>
                            <div className={utilities.fontPrimaryText}>Descuento1</div>
                            <div className={utilities.fontPriceInclude}>- ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(amountDiscount1))}</div>
                        </div>
                    }
                    {
                        stateSecondtCupon &&
                        <div className={style.gridItems}>
                            <div className={utilities.fontPrimaryText}>Descuento2</div>
                            <div className={utilities.fontPriceInclude}>- ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round(amountDiscount2))}</div>
                        </div>
                    }
                </div>

                <div className={style.gridCupons}>
                    <CuponInput cuponProp={propCupon}/>
                    <CuponInput cuponProp={propCuponRipley}/>
                </div>

                <div className={`${utilities.fontTitle} ${style.totalConainer}`}>
                    <div>Total:</div>
                    <div> ${Intl.NumberFormat("ES-CL"
                    ).format(Math.round(newTotal))}</div>
                </div>

                <div className={style.timerContainer}>
                    <div className={style.sizeIconTimer}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.timerRed} alt=""/>
                    </div>
                    <Timer isDays={false}/>
                    <div>
                        {finishText}
                    </div>
                </div>
            </div>

            <div className={style.buttonContainer}>
                <button className={style.styleButton}>{cancel} </button>
                <button className={style.styleButton}>{goToPay} </button>
            </div>
        </div>
    )
}