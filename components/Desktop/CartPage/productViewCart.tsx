import style from "/styles/Desktop/CartPage/productViewCart.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {ProductItem} from "../../../Class/Misc/GlobalClass";

const deleteItemText: string = "Eliminar"

export default function ProductViewCart({item, deleteItem}: { item: ProductItem, deleteItem: Function }) {

    const handleDeleteProduct = () => deleteItem()
    return (
        <div className={style.mainGrid}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.ImagePath} alt={""}/>
            </div>
            <div className={style.gridInfo}>
                <div className={style.name}>
                    {item.Name}
                </div>
                <div className={`${style.description} ${utilities.clamp2}`}>
                    {item.Description}
                </div>
                <button type={"button"} onClick={handleDeleteProduct} className={style.delete}>
                    {deleteItemText}
                </button>
            </div>
        </div>
    )
}