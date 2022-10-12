import style from "/styles/Desktop/UserAccount/initialPage.module.css"
import Calendar from "./calendar";
import NavMenuUserAccount from "./navMenu";
import MyShopping from "./myShopping";

export default function InitialPageUserAccount() {
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivGrid}>
                <div className={style.mainDivLeftArea}>
                    <NavMenuUserAccount/>
                </div>
                <div className={style.mainDivRightArea}>
                    <Calendar/>
                   {/*<MyShopping/>*/}
                </div>
            </div>
        </div>
    )
}