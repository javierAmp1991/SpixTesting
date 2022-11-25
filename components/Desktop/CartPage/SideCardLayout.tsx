import style from "/styles/Desktop/CartPage/sideCardLayout.module.css"
import ResumeCart from "./resumeCart";
import RecommendedCartPage from "./recommendedCartPage";
import GuestList from "./guestList";
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";

export default function SideCardLayout() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
    const isEmpty: boolean = cartProvider.Products.length == 0
    return (
        <div className={`${isGuest ? style.mainDiv : style.mainDivNoGuest} 
        ${isEmpty ? style.NoProducts : style.mainDivBase}`}>
            {
                !isEmpty &&
                <>
                    <ResumeCart/>
                    {
                        isGuest &&
                        <GuestList/>
                    }
                    {
                        !isEmpty &&
                        <RecommendedCartPage/>
                    }
                </>
            }
        </div>
    )
}