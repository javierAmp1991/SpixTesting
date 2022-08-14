import React from "react";
import style from "/styles/Mobile/eventProducts/sectionProduct.module.css"
import {sectionProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import ContainerSelectedItemMobile from "./containerSelectedItemMobile";

export default function SectionProductMobile({item, addItem}:
                                                 { item: sectionProduct, addItem: any }) {
    return (
        <div className={style.paddingContainer}>
            <div id={item.Title} className={`${utilities.fontTitle} ${style.marginBottomTitle}`}>
                {item.Title}
            </div>
            <div className={style.grid}>
                {
                    item.listItems.map((productSelected, index) =>
                        <ContainerSelectedItemMobile addItem={addItem}
                                                     item={productSelected}
                                                     key={index}/>
                    )
                }
            </div>
        </div>
    )
}