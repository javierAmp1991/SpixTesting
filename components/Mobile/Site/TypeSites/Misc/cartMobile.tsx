import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import style from "/styles/Mobile/Site/TypeSite/Misc/cart.module.css"
import {CartProviderProps} from "../../../../../Class/Global/global";
import {useContext} from "react";
import {AddToCartContext} from "../../../../Providers/cartProvider";

export class CartProps {
    NumberItems: number
    IdToGo: string
}
export default function CartMobile({item}: { item: CartProps }) {
    const addToCart: CartProviderProps = useContext(AddToCartContext)
    const handleTagSelected = () => {
        if (addToCart.NumberItems == 0) {
            let data = document.getElementById(item.IdToGo).getBoundingClientRect()
            window.scrollTo({top: (data.top + window.scrollY - 40), behavior: "smooth"})
        }
    }

    return (
        <button onClick={handleTagSelected} className={style.mainDiv}>
            <div className={style.positionItem}>
                {addToCart.NumberItems}
            </div>
            <div className={style.sizeCart}>
                <Image priority={true} layout={"fill"} src={GlobalConst.sourceImages.cartIcon} alt={""}/>
            </div>
        </button>
    )
}