import style from "/styles/Mobile/CartPage/resumeCart.module.css"
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import Link from "next/link";

const subTotalText: string = "Subtotal: "
const goToSite: string = "Volver al sitio"

export default function ResumeCartMobile() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isEmpty: boolean = cartProvider.Products.length == 0

    return (
        <div className={style.stickyDiv}>
            <div className={style.gridSubtotalReturn}>
                <div className={style.subtotal}>
                    <span>{subTotalText} </span>
                    <span>${getMoneyValue(cartProvider.Subtotal)}</span>
                </div>
                <Link href={cartProvider.LinkSite}>
                    <a className={style.return}>
                        {goToSite}
                    </a>
                </Link>
            </div>
            <button className={`${isEmpty ? style.buttonEmpty : style.button} ${style.buttonBase}`}>
                {cartProvider.TextButton}
            </button>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}