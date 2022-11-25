import style from "/styles/Mobile/CartPage/productViewCart.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import PriceView from "../../Desktop/Misc/priceView";

const deleteItemText: string = "Eliminar"

export default function ProductViewCartMobile({item, deleteItem, price}:
{ item: ProductItem, deleteItem: Function, price: PriceViewProp }) {

    const handleDeleteProduct = () => deleteItem()
    const priceView: PriceViewProp = {
        Price: 9999,
        DiscountPercent: 30,
        SizePrice: 21,
        TypeGrid: true
    }

    return (
        <div className={style.mainGrid}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.ImagePath} alt={""}/>
            </div>
            <div className={style.gridInfo}>
                <div className={style.name}>
                    {item.Name}
                </div>
                <div className={`${style.description} ${utilities.clamp3}`}>
                    {item.Description}
                </div>
                <PriceView item={price}/>
            </div>
        </div>
    )
}