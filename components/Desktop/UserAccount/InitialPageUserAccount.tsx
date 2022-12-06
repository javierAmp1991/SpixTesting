import style from "/styles/Desktop/UserAccount/initialPage.module.css"
import MyShopping from "./myShopping";
import {AccountSectionContext, MenuUserAccount, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import Calendar from "./calendar";
import MyRefunds from "./myRefunds";
import NavMenuUserAccount from "./navMenu";
import EditProfile from "./editProfile";
import AccountAndSecurity from "./accountAndSecurity";
import WishList from "./WishList";
import MyCollection from "./MyCollection";
import Dashboard from "./dashboard";
import MyBussines from "./MyBussines";


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
                        providerSection.SectionSelected == MenuUserAccount.MyShopping &&
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
                    {
                        providerSection.SectionSelected == MenuUserAccount.AccountSecurity &&
                        <AccountAndSecurity/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.WishList &&
                        <WishList/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.MyCollection &&
                        <MyCollection/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.MyBusiness &&
                        <MyBussines/>
                    }
                    {
                        providerSection.SectionSelected == MenuUserAccount.Dashboard &&
                        <Dashboard/>
                    }
                </div>
            </div>
        </div>
    )
}