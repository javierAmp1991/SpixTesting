import style from "/styles/Mobile/CartPage/mainPage.module.css"
import ResumeCartMobile from "./resumeCartMobile";
import RecommendedCartPageMobile from "./recommendedCartPageMobile";
import ProductsCartMobile from "./ProductsCartMobile";
import utilities from "/styles/utilities.module.css";
import GuestListMobile from "./guestListMobile";
import HeaderCartPageMobile from "./headerCartPageMobile";

export default function MainPageCartPageMob() {
    return (
        <div className={style.mainDiv}>
            <HeaderCartPageMobile/>
            <ResumeCartMobile/>
            {
                <GuestListMobile/>
            }
            <ProductsCartMobile/>
            <div className={utilities.separationLine}/>
            <RecommendedCartPageMobile/>
        </div>
    )
}