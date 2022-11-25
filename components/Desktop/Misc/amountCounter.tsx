import {useState} from "react";
import style from "/styles/Desktop/Misc/amountCounter.module.css"
import {AmountCounterProp} from "../../../Class/Misc/GlobalClass";


export default function AmountCounter({item}: { item: AmountCounterProp }) {
    let [initialAmount, setInitialAmount] = useState(item.InitialAmount)
    const handleAmount = (isUp: boolean) => {
        let newAmount = isUp ?
            initialAmount + 1 > item.MaxAmount ? item.MaxAmount : initialAmount += 1
            :
            initialAmount - 1 < 1 ? 1 : initialAmount -= 1
        setInitialAmount(newAmount)
        item.GetActualAmount(item.IdTarget,newAmount)
    }
    return (
        <div className={style.mainDiv}>
            <button className={style.moreLess} type={"button"} onClick={() => handleAmount(false)}>
                -
            </button>
            <div className={style.amount}>
                {initialAmount}
            </div>
            <button className={style.moreLess} type={"button"} onClick={() => handleAmount(true)}>
                +
            </button>
        </div>
    )
}