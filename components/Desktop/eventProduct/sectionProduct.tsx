import style from "/styles/Desktop/eventProducts/sectionProduct.module.css"
import utilities from "/styles/utilities.module.css"
import {sectionProduct} from "../../../dataDemo/data";
import ContainerSelectedItem from "./containerSelectedItem";

export default function SectionProduct({item, addItemGuest, deleteItemGuest}:
                                           {
                                               item: sectionProduct, addItemGuest: any,
                                               deleteItemGuest: any
                                           }) {
    return (
        <div id={`${item.Title}`} className={style.paddingContainer}>
            <div className={`${utilities.fontTitle} ${style.marginBottomTitle} `}>
                {item.Title}
            </div>
            <div className={style.grid}>
                {
                    item.listItems.map((productSelected, index) =>
                        <ContainerSelectedItem
                                               addItemGuest={addItemGuest}
                                               item={productSelected}
                                               key={index}
                                               deleteItemGuest={deleteItemGuest}/>
                    )
                }
            </div>
        </div>
    )
}