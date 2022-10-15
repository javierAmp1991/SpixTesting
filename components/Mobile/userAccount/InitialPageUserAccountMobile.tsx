import style from "/styles/Mobile/UserAccount/initialPage.module.css"
import {AccountSectionContext, MenuUserAccount, ProviderAccountSections} from "../../Providers/providerUserAccount";
import {useContext} from "react";
import CalendarMobile from "./calendarMobile";
/*import MyShopping from "./myShopping";
import MyRefunds from "./myRefunds";
import NavMenuUserAccount from "./navMenu";
import EditProfile from "./editProfile";
import AccountAndSecurity from "./accountAndSecurity";
import WishList from "./WishList";
import MyCollection from "./MyCollection";*/


export default function InitialPageUserAccountMobile() {
    const providerSection: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivRightArea}>
                {
                    providerSection.SectionSelected == MenuUserAccount.Calendar &&
                    <CalendarMobile/>
                }
               {/* {
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
                }*/}
            </div>
        </div>
    )
}