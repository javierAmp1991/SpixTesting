import style from "/styles/Mobile/UserAccount/initialPage.module.css"
import {AccountSectionContext, MenuUserAccount, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import CalendarMobile from "./calendarMobile";
import EditProfileMobile from "./editProfileMobile";
import AccountAndSecurityMobile from "./accountAndSecurityMobile";
import WishListMobile from "./WishListMobile";
import MyCollectionMobile from "./MyCollectionMobile";
import MyShoppingMobile from "./myShoppingMobile";
import MyRefundsMobile from "./myRefundsMobile";
import Dashboard from "../../Desktop/UserAccount/dashboard";
import DashboardMobile from "./dashboardMobile";

export default function InitialPageUserAccountMobile() {
    const providerSection: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivRightArea}>
                {
                    providerSection.SectionSelected == MenuUserAccount.Calendar &&
                    <CalendarMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.EditProfile &&
                    <EditProfileMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.AccountSecurity &&
                    <AccountAndSecurityMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.WishList &&
                    <WishListMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.MyCollection &&
                    <MyCollectionMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.MyShoppings &&
                    <MyShoppingMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.Refund &&
                    <MyRefundsMobile/>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.MyBussines &&
                    <div>
                        En construccion
                    </div>
                }
                {
                    providerSection.SectionSelected == MenuUserAccount.Dashboard &&
                    <DashboardMobile/>
                }
            </div>
        </div>
    )
}