import React from "react";
import style from "/styles/Mobile/eventProducts/sectionProduct.module.css"
import {sectionProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import ContainerSelectedItemMobile from "./containerSelectedItemMobile";

export default function SectionProductMobile({item, addItem, removeItem}:
                                                 {
                                                     item: sectionProduct,
                                                     addItem: any, removeItem: any
                                                 }) {
    return (
        <div id={item.Title} className={style.paddingContainer}>
            <div  className={`${utilities.fontTitle} ${style.marginBottomTitle}`}>
                {item.Title}
            </div>
            <div className={style.grid}>
                {
                    item.listItems.map((productSelected, index) =>
                        <ContainerSelectedItemMobile addItem={addItem} removeItem={removeItem}
                                                     item={productSelected}
                                                     key={index}/>
                    )
                }
            </div>
        </div>
    )
}