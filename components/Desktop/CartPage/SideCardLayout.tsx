import style from "/styles/Desktop/CartPage/sideCardLayout.module.css"
import ResumeCart from "./resumeCart";
import RecommendedCartPage from "./recommendedCartPage";
import GuestList from "./guestList";

export default function SideCardLayout() {
    return (
        <div className={style.mainDiv}>
            <ResumeCart/>
            <GuestList/>
            <RecommendedCartPage/>
        </div>
    )
}