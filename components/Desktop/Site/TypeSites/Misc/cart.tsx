import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import style from "/styles/Desktop/Site/TypeSite/Misc/cart.module.css"
import {CartProviderProps} from "../../../../../Class/Global/global";
import {useContext} from "react";
import {AddToCartContext} from "../../../../Providers/cartProvider";
import Link from "next/link";

export class CartProps {
    NumberItems: number
    IdToGo: string
    LinkToGo: string
}

export default function Cart({item}: { item: CartProps }) {
    const addToCart: CartProviderProps = useContext(AddToCartContext)
    const handleTagSelected = () => {
        let data = document.getElementById(item.IdToGo).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 40), behavior: "smooth"})
    }

    return (
        addToCart.NumberItems == 0 ?
            <button onClick={handleTagSelected} className={style.mainDiv}>
                <div className={style.positionItem}>
                    {addToCart.NumberItems}
                </div>
                <div className={style.sizeCart}>
                    <Image priority={true} layout={"fill"} src={GlobalConst.sourceImages.cartIcon} alt={""}/>
                </div>
            </button>
            :
            <Link href={item.LinkToGo}>
                <a className={style.mainDiv}>
                    <div className={style.positionItem}>
                        {addToCart.NumberItems}
                    </div>
                    <div className={style.sizeCart}>
                        <Image priority={true} layout={"fill"} src={GlobalConst.sourceImages.cartIcon} alt={""}/>
                    </div>
                </a>
            </Link>
    )
}