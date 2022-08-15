import style from "/styles/Mobile/eventProducts/contSelectedProduct.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import {Guest} from "../../../pages/eventProducts";
import ProductSelectedViewDesk from "./productSelectedViewDesk";
import Image from "next/image";

const productTitle = "Productos"
const buttonText = "Comprar"

export default function ContSelectedProduct({methodProps, listGuest, listSelectedProducts, addItem}:
                                                {
                                                    methodProps: any,
                                                    listGuest: Guest[], guestSelected: Guest,
                                                    listSelectedProducts: Product[], addItem: any
                                                }) {

    let [dispay, setDisplay] = useState(false)
    const handleDisplay = () => setDisplay(dispay = !dispay)
    const totalPrice = getTotal()
    let totalProducts: number = listSelectedProducts.length

    return (
        <div className={dispay ? style.contVarNormal : style.contVar}>
            {
                dispay ?
                    <></> : <div className={style.totalButtonContainer}>
                        <div onClick={handleDisplay}
                             className={style.gridCarTitleClose}>
                            <div className={style.styleGridVar}>
                                <div className={style.sizeBuyCAr}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.buyCarNormal} alt=""/>
                                </div>
                                <span className={style.numItemSelected}>{listSelectedProducts.length}</span>
                            </div>

                            <div className={`${utilities.fontSubTitle} ${style.totalConainer}`}>
                                Total: $ {totalPrice}
                            </div>

                            <button onClick={handleDisplay}
                                    className={style.buttonStyle}>{buttonText}</button>
                        </div>
                    </div>
            }

            <div className={style.gridTabs}>
                <div className={` ${style.containerClients}`}>
                    {
                        listGuest.map((item, index) =>
                            <div onClick={() => methodProps.guestSelected(item)}
                                 className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                 key={index}>
                                <span className={`${style.nameElipsis} ${utilities.clamp1}`}>
                                {item.name}
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>

            <div>
                <div className={`${utilities.fontSubTitle} ${style.contTitle}`}>
                    {
                        totalProducts > 0 ?
                            <span>{productTitle} ({listSelectedProducts.length})</span> :
                            <span>No hay productos</span>
                    }
                </div>
                <div className={style.gridSelectedProduct}>
                    {
                        listSelectedProducts.map((item, index) =>
                            <ProductSelectedViewDesk key={index} deleteItem={addItem} item={item}/>
                        )
                    }
                </div>
            </div>

            {
                dispay ?
                    <div className={style.totalButtonContainerOpen}>
                        <div className={style.gridCarTitle}>
                            {/*<div className={style.styleGridVar}>
                                <img className={style.sizeBuyCAr}
                                     src={GlobalConst.sourceImages.buyCarNormal} alt=""/>
                                <span className={style.numItemSelected}>0</span>
                            </div>*/}
                            <div className="h-4 w-4 relative">
                                <Image layout={"fill"}
                                       onClick={handleDisplay}
                                       src={GlobalConst.sourceImages.leftArrowExitBlack} alt=""/>
                            </div>
                            <div className={`${utilities.fontSubTitle} ${style.totalConainer}`}>
                                Total: $ {totalPrice}
                            </div>
                            <button className={style.buttonStyle}>{buttonText}</button>


                        </div>
                        {/*<div className={style.GridButtons}>
                            <button onClick={handleDisplay}
                                className={style.buttonStyle}>{buttonText1}</button>
                            <button className={style.buttonStyle}>{buttonText}</button>
                        </div>*/}
                    </div> : <></>
            }
        </div>

    )

    function getTotal() {
        let total = 0
        if (listSelectedProducts.length > 0) {
            listSelectedProducts.forEach(product => {
                total = total + product.Price
            })
        } else total = 0
        return total
    }

}