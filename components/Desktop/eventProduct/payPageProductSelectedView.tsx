import style from "/styles/Desktop/eventProducts/productSelectedView.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {useState} from "react";
import Image from "next/image";

const deleteButton = "Eliminar"

export default function PayPageProductSelectedView({item, deleteItem}:
                                                       { item: Product, deleteItem: any }) {
    let [amountSelected, setAmountSelected] = useState(0)
    return (
        <div>
            <div className={style.grid}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
                <div>
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
                    <div onClick={() => setAmountSelected(
                        amountSelected == 0 ?
                            amountSelected = 0 : amountSelected = amountSelected - 1
                    )}
                         className={`${utilities.fontPrimaryText}
                          ${style.styleMoreLess}
                          ${style.borderRight}`}> -
                    </div>

                    <div className={style.amount}>
                        {amountSelected}
                    </div>

                    <div onClick={() => setAmountSelected(
                        amountSelected = amountSelected + 1
                    )}
                         className={`${utilities.fontPrimaryText} 
                         ${style.styleMoreLess} 
                         ${style.borderLeft}`}> +
                    </div>
                </div>
                <div onClick={() => deleteItem(item)}
                     className={`${utilities.fontSecundaryText} ${style.styleDelete}`}>
                    {deleteButton}
                </div>
            </div>
        </div>
    )
}