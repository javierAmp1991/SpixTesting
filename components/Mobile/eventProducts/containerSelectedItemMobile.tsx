import style from "/styles/Mobile/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productSelected} from "../../../dataDemo/data";
import ProductViewMobile from "../Misc/productViewMobile";
import Image from "next/image";

const sizeProductFragment = null


export default function ContainerSelectedItemMobile({item, addItem}:
                                                        { item: productSelected, addItem: any }) {
    const cssStyle = getCssStyle()
    return (
        <div onClick={() => addItem(item, !item.IsSelected)}
             className={cssStyle.boxShadow}>
            <ProductViewMobile size={sizeProductFragment} item={item.Product}/>
            {
                item.IsSelected ?
                    <Image className={style.sizeChecked} src={GlobalConst.sourceImages.checkIcon} alt=""/>
                    :
                    <></>
            }
        </div>
    )

    function getCssStyle() {
        return {
            boxShadow: item.IsSelected ? style.containerSelectedItemClicked : style.containerSelectedItem
        }
    }
}
