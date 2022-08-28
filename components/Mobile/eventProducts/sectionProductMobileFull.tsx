import React from "react";
import style from "/styles/Mobile/eventProducts/sectionProduct.module.css"
import {sectionProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import ContainerSelectedItemMobileFull from "./containerSelectedItemMobileFull";

export default function SectionProductMobileFull({item, addItem}:
                                                 { item: sectionProduct, addItem: any }) {
    return (
        <div id={item.Title} className={style.paddingContainer}>
            <div  className={`${utilities.fontTitle} ${style.marginBottomTitle}`}>
                {item.Title}
            </div>
            <div className={style.grid}>
                {
                    item.listItems.map((productSelected, index) =>
                        <ContainerSelectedItemMobileFull addItem={addItem}
                                                     item={productSelected}
                                                     key={index}/>
                    )
                }
            </div>
        </div>
    )
}