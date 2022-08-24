import style from "/styles/Desktop/eventProducts/productSelectedView.module.css"
import {Product, productAmount} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {useState} from "react";
import Image from "next/image";

const deleteButton = "Eliminar"

export default function PayPageProductSelectedView({item, deleteItem, amountPerItem}:
                                                       { item: productAmount, deleteItem: any,
                                                       amountPerItem:any}) {
    return (
        <div>
            <div className={style.grid}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.Product.ImagePath} alt=""/>
                </div>
                <div>
                    <div className={`${utilities.fontPrimaryText} mb-1`}>
                        {item.Product.Name}
                    </div>
                    <div className={`${utilities.fontSubTitle} mb-0.5`}>
                        ${Intl.NumberFormat("ES-CL"
                    ).format(Math.round(item.Product.Price))}
                    </div>
                    <div className={`${utilities.fontSecundaryText} ${utilities.font12}`}>
                        {
                            item.Product.Include != null ?
                                <div>
                                    {item.Product.Include}
                                </div>
                                :
                                <>
                                    <span>Antes </span>
                                    <span className="line-through">
                                                    ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round((item.Product.Price * item.Product.DiscountPercent / 100) + item.Product.Price))}</span>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className={style.gridAmountDelete}>
                <div className={style.AmountSelected}>
                    <button onClick={() => amountPerItem(item, false)}
                         className={`${utilities.fontPrimaryText}
                          ${style.styleMoreLess}
                          ${style.borderRight}`}> -
                    </button>

                    <div className={style.amount}>
                        {item.Amount}
                    </div>

                    <button onClick={() => amountPerItem(item, true)}
                         className={`${utilities.fontPrimaryText} 
                         ${style.styleMoreLess} 
                         ${style.borderLeft}`}> +
                    </button>
                </div>
                <button onClick={() => deleteItem(item.Product)}
                     className={`${utilities.fontSecundaryText} ${style.styleDelete}`}>
                    {deleteButton}
                </button>
            </div>
        </div>
    )
}