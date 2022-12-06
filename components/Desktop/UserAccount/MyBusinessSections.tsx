import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {AccountSections, MyBusinessSectionsEnum, MySitesContext, ProviderMySites} from "../../Providers/providerGlobal";
import {useContext} from "react";
import SiteMyBusinessNav from "./siteMyBusinessNav";
import CreateSiteMyBusinessNav from "./createSiteMyBusinessNav";

export default function MyBusinessSections({item}: { item: AccountSections }) {
    const mySite: ProviderMySites = useContext(MySitesContext)

    return (
        <div className={item.State ? style.gridSubItemsOpen : style.gridSubItemsClose}>
            {
                mySite.ListSites.map(item2 =>
                    item2.Type == MyBusinessSectionsEnum.Site ?
                        <SiteMyBusinessNav key={item2.Id} item={item2}/>
                        :
                        <CreateSiteMyBusinessNav key={item2.Id} item={item2}/>
                )
            }
        </div>
    )
}