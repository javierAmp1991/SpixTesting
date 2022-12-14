import style from "/styles/Desktop/eventProducts/sectionProductFull.module.css"
import utilities from "/styles/utilities.module.css"
import {sectionProduct} from "../../../dataDemo/data";
import ContainerSelectedItem from "./containerSelectedItem";
import ContainerSelectedItemFull from "./containerSelectedItemFull";

export default function SectionProductFull({item, addItem}:
                                           {item: sectionProduct, addItem: any}) {
    return (
        <div id={`${item.Title}`} className={style.paddingContainer}>
            <div  className={`${utilities.fontTitle} ${style.marginBottomTitle} `}>
                {item.Title}
            </div>
            <div className={style.grid}>
                {
                    item.listItems.map((productSelected, index) =>
                        <ContainerSelectedItemFull addItem={addItem}

                                               item={productSelected}
                                               key={index}/>
                    )
                }
            </div>
        </div>
    )
}