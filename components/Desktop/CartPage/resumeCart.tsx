import style from "/styles/Desktop/CartPage/resumeCart.module.css"
import {ProviderCartPage, TypeSite} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import Link from "next/link";

const title: string = "Resumen de la compra"
const subTotalText: string = "Subtotal: "
const youAndText: string = "Tú y "
const guestMore: string = "Invitados mas"
const goToSite: string = "Volver al sitio"

export default function ResumeCart() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
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
            {
                isGuest &&
                <div className={style.guestNumber}>
                    {youAndText} {cartProvider.ListGuest.length - 1} {guestMore}
                </div>
            }
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