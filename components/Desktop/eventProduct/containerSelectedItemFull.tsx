import style from "/styles/Desktop/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productSelected} from "../../../dataDemo/data";
import ProductViewDesk from "../Misc/productViewDesk";
import Image from "next/image";

export default function ContainerSelectedItemFull({item, addItem}:
                                                  { item: productSelected, addItem: any }) {
    return (
        <div onClick={() => addItem(item.Product, !item.IsSelected)}
             className={style.containerSelectedItem}>
            <ProductViewDesk isDisplayOffer={true} size={null} item={item.Product}/>
        </div>
    )
}
