import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {AccountSections, MyBusinessSectionsEnum, MySitesContext, ProviderMySites} from "../../Providers/providerGlobal";
import {useContext} from "react";
import SiteMyBusinessNavMobile from "./siteMyBusinessNav";
import CreateSiteMyBusinessNavMobile from "./createSiteMyBusinessNav";

export default function MyBusinessSectionsMobile({item}: { item: AccountSections }) {
    const mySite: ProviderMySites = useContext(MySitesContext)

    return (
        <div className={item.State ? style.gridSubItemsOpen : style.gridSubItemsClose}>
            {
                mySite.ListSites.map(item2 =>
                    item2.Type == MyBusinessSectionsEnum.Site ?
                        <SiteMyBusinessNavMobile key={item2.Id} item={item2}/>
                        :
                        <CreateSiteMyBusinessNavMobile key={item2.Id} item={item2}/>
                )
            }
        </div>
    )
}