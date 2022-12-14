import style from "/styles/Mobile/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productAmount, productSelected} from "../../../dataDemo/data";
import ProductViewMobile from "../Misc/productViewMobile";
import Image from "next/image";

const sizeProductFragment = null


export default function ContainerSelectedItemMobile({item, addItem, removeItem}:
                                                        {
                                                            item: productSelected,
                                                            addItem: any,
                                                            removeItem: any
                                                        }) {
    const handleItem = (isSelected: boolean) => {
        if (isSelected) {
            removeItem(item.Product);
        } else {
            addItem(item.Product);
        }
    }

    const cssStyle = getCssStyle()
    return (
        <div onClick={() => handleItem(item.IsSelected)}
             className={cssStyle.boxShadow}>
            <ProductViewMobile isDisplayOffer={true} size={sizeProductFragment} item={item.Product}/>
            {
                item.IsSelected ?
                    <div className={style.sizeChecked}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt=""/>
                    </div>
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
