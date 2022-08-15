import style from "/styles/Mobile/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productSelected} from "../../../dataDemo/data";
import ProductViewMobile from "../Misc/productViewMobile";
import Image from "next/image";

const sizeProductFragment = null


export default function ContainerSelectedItemMobileFull({item, addItem}:
                                                            { item: productSelected, addItem: any }) {
    return (
        <div className={style.containerSelectedItem}>
            <ProductViewMobile size={sizeProductFragment} item={item.Product}/>

        </div>
    )
}
