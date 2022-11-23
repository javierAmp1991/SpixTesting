import style from "/styles/Desktop/CartPage/mainPage.module.css"
import SideCardLayout from "./SideCardLayout";
import ProductsCart from "./ProductsCart";

export default function InitialCartPage() {
    return (
        <div className={style.mainGrid}>
            <ProductsCart/>
            <SideCardLayout/>
        </div>
    )
}