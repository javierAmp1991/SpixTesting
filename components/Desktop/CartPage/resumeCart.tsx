import style from "/styles/Desktop/CartPage/resumeCart.module.css"
import {ProviderCartPage, TypeSite} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import Link from "next/link";

const title: string = "Resumen de la compra"
const subTotalText: string = "Subtotal: "
const youAndText: string = "Tú y "
const guestMore: string = "Invitados mas"
const reserveTable: string = "Reserva tu mesa"
const reserveHour: string = "Reserva tu hora"
const buyTicket: string = "Comprar entrada"
const restaurantSite: string = "/RestaurantSite"
const servicetSite: string = "/ServiceSite"
const eventSite: string = "/EventSite"
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
                {getButtonText()}
            </button>
            <Link href={getLinkSite()}>
                <a className={style.return}>
                    {goToSite}
                </a>
            </Link>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getButtonText() {
        if (cartProvider.TypeSite == TypeSite.Service) return reserveTable
        else if (cartProvider.TypeSite == TypeSite.Restaurant) return reserveHour
        if (cartProvider.TypeSite == TypeSite.Event) return buyTicket
    }

    function getLinkSite() {
        if (cartProvider.TypeSite == TypeSite.Service) return servicetSite
        else if (cartProvider.TypeSite == TypeSite.Restaurant) return restaurantSite
        if (cartProvider.TypeSite == TypeSite.Event) return eventSite
    }
}