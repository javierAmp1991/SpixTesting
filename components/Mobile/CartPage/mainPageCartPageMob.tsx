import style from "/styles/Mobile/CartPage/mainPage.module.css"
import ResumeCartMobile from "./resumeCartMobile";
import RecommendedCartPageMobile from "./recommendedCartPageMobile";
import GuestListMobile from "./guestListMobile";
import ProductsCartMobile from "./ProductsCartMobile";
import utilities from "/styles/utilities.module.css";

export default function MainPageCartPageMob() {
    return (
        <div className={style.mainDiv}>
            <ResumeCartMobile/>
            {/*<div className={utilities.separationLine}/>*/}
            <ProductsCartMobile/>
            <div className={utilities.separationLine}/>
            <RecommendedCartPageMobile/>
        </div>
    )
}