import style from "/styles/Desktop/CartPage/resumeCart.module.css"
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import Link from "next/link";

const title: string = "Resumen de la compra"
const subTotalText: string = "Subtotal: "
const goToSite: string = "Volver al sitio"

export default function ResumeCart() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isEmpty: boolean = cartProvider.Products.length == 0

    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.subtotal}>
                <span>{subTotalText} </span>
                <span>${getMoneyValue(cartProvider.Subtotal)}</span>
            </div>
            <button className={`${isEmpty ? style.buttonEmpty : style.button} ${style.buttonBase}`}>
                {cartProvider.TextButton}
            </button>
            <Link href={cartProvider.LinkSite}>
                <a className={style.return}>
                    {goToSite}
                </a>
            </Link>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}