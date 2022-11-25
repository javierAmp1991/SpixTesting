import style from "/styles/Mobile/CartPage/mainPage.module.css"
import ResumeCartMobile from "./resumeCartMobile";
import RecommendedCartPageMobile from "./recommendedCartPageMobile";
import ProductsCartMobile from "./ProductsCartMobile";
import utilities from "/styles/utilities.module.css";
import GuestListMobile from "./guestListMobile";
import HeaderCartPageMobile from "./headerCartPageMobile";
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";

export default function MainPageCartPageMob() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length == 0
    return (
        <div className={style.mainDiv}>
            <HeaderCartPageMobile/>
            <ResumeCartMobile/>
            {
                !isGuest &&
                <GuestListMobile/>
            }
            <ProductsCartMobile/>
            <div className={utilities.separationLine}/>
            <RecommendedCartPageMobile/>
        </div>
    )
}