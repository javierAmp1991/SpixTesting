import style from "/styles/Desktop/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productSelected} from "../../../dataDemo/data";
import ProductViewDesk from "../Misc/productViewDesk";
import Image from "next/image";

export default function ContainerSelectedItem({item, addItem}:
                                                  { item: productSelected, addItem: any }) {
    const cssStyle = getCssStyle()
    return (
        <div onClick={() => addItem(item, item.IsSelected ? false : true)}
             className={cssStyle.boxShadow}>
            <ProductViewDesk size={null} item={item.Product}/>
            {
                item.IsSelected?
                    <Image className={style.sizeChecked}
                         src={GlobalConst.sourceImages.checkIcon} alt=""/>
                    :
                    <></>
            }
        </div>
    )

    function getCssStyle() {
        return {
            boxShadow: item.IsSelected ?
                style.containerSelectedItemClicked : style.containerSelectedItem
        }
    }
}
