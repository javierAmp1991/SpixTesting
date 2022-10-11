import {AccountSectionContext, ProviderAccountSections} from "../../Providers/providerUserAccount";
import {useContext} from "react";
import style from "/styles/Desktop/UserAccount/initialPage.module.css"
import AccountSectionOption from "./AccountSectionOption";
import Calendar from "./calendar";

export default function InitialPageUserAccount() {
    const providerAccountSection: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.divTitle}>
                Mi Itinerario
            </div>
            <div className={style.mainDivGrid}>
                <div className={style.gridSections}>
                    {
                        providerAccountSection.ListAccountSection.map((item) =>
                            <AccountSectionOption key={item.Id} item={item}/>
                        )
                    }
                </div>

                <Calendar/>
            </div>
        </div>
    )
}