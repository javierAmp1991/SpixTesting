import style from "/styles/Desktop/UserAccount/initialPage.module.css"
import MyShopping from "./myShopping";
import {AccountSectionContext, MenuUserAccount, ProviderAccountSections} from "../../Providers/providerUserAccount";
import {useContext} from "react";
import Calendar from "./calendar";
import MyRefunds from "./myRefunds";
import NavMenuUserAccount from "./navMenu";
import EditProfile from "./editProfile";


export default function InitialPageUserAccount() {
    const providerSection: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivGrid}>
                <div className={style.mainDivLeftArea}>
                    <NavMenuUserAccount/>
                </div>
                <div className={style.mainDivRightArea}>
                    {
                        providerSection.SectionSelected == MenuUserAccount.Calendar &&
                        <Calendar/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.MyShoppings &&
                        <MyShopping/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.Refund &&
                        <MyRefunds/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.EditProfile &&
                        <EditProfile/>
                    }
                </div>
            </div>
        </div>
    )
}