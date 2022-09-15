import style from "/styles/Desktop/eventProducts/containerSelectedItem.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {productSelected} from "../../../dataDemo/data";
import ProductViewDesk from "../Misc/productViewDesk";
import Image from "next/image";
import {useState} from "react";

export default function ContainerSelectedItem({item, addItemGuest, deleteItemGuest}:
                                                  {
                                                      item: productSelected,
                                                      addItemGuest: any,
                                                      deleteItemGuest: any
                                                  }) {
    const handleItem = (isSelected: boolean) => {
        if (isSelected) {
            deleteItemGuest(item.Product);

        } else {
            addItemGuest(item.Product);
        }
    }
    const cssStyle = getCssStyle()
    return (
        <div onClick={() => handleItem(item.IsSelected)}
             className={cssStyle.boxShadow}>
            <ProductViewDesk isDisplayOffer={true} size={null} item={item.Product}/>
            {
                item.IsSelected ?
                    <div className={style.sizeChecked}>
                        <Image layout={"fill"}
                               src={GlobalConst.sourceImages.checkIcon} alt=""/>
                    </div>
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
