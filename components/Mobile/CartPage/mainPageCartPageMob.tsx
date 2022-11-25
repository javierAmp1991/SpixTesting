import style from "/styles/Mobile/CartPage/mainPage.module.css"
import ResumeCartMobile from "./resumeCartMobile";
import RecommendedCartPageMobile from "./recommendedCartPageMobile";
import GuestListMobile from "./guestListMobile";

export default function MainPageCartPageMob() {
    return (
        <div className={style.mainDiv}>
            <ResumeCartMobile/>
            <GuestListMobile/>
            <RecommendedCartPageMobile/>
        </div>
    )
}