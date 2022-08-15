import style from "/styles/Mobile/eventProducts/productSelectedView.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
const deleteTextButton: string = "Eliminar"
import {useState} from "react";
import Image from "next/image";

export default function ProductSelectedViewMobile({item, deleteItem}: { item: Product, deleteItem:any }) {
    let [amountSelected, setAmountSelected] = useState(1)
    const amountUp = () => setAmountSelected(
        amountSelected = amountSelected + 1)
    const amountDown = () => setAmountSelected(
        amountSelected == 1 ?
            amountSelected = 1 : amountSelected = amountSelected - 1)

    return (
        <div>
            <div className={style.grid}>
                <div className={style.sizeImage}>
                <Image layout={"fill"} objectFit={"cover"} src={item.ImagePath} alt=""/>
                </div>
                <div className={style.divInfo}>
                    <div className={`${utilities.fontPrimaryText} mb-1`}>
                        {item.Name}
                    </div>
                    <div className={`${utilities.fontSubTitle} mb-0.5`}>
                        ${item.Price}
                    </div>
                    <div className={`${utilities.fontSecundaryText} ${utilities.font12}`}>
                        {
                            item.Include != null ?
                                <div>
                                    {item.Include}
                                </div>
                                :
                                <>
                                    <span>Antes </span>
                                    <span className="line-through">
                                                    ${(((item.DiscountPercent * item.Price) / 100) + item.Price)}</span>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className={style.gridAmountDelete}>
                <div className={style.AmountSelected}>
                    <div onClick={amountDown}
                         className={`${utilities.fontPrimaryText}
                          ${style.styleMoreLess}
                          ${style.borderRight}`}> -
                    </div>

                    <div className={style.amount}>
                        {amountSelected}
                    </div>

                    <div onClick={amountUp}
                         className={`${utilities.fontPrimaryText} 
                         ${style.styleMoreLess} 
                         ${style.borderLeft}`}> +
                    </div>
                </div>
                <div onClick={() => deleteItem(item, false)}
                    className={`${utilities.fontSecundaryText} ${style.styleDelete}`}>
                    {deleteTextButton}
                </div>
            </div>
        </div>
    )
}