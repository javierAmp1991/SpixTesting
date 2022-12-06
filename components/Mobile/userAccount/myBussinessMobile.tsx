import {MyBusinessSectionsEnum, MySitesContext, ProviderMySites} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MainPageCreateSiteMobile from "./CreateSite/mainPageCreateSiteMobile";
import MainPageSitesMobile from "./MainPageSites";

export default function MyBussinessMobile() {
    const mySites: ProviderMySites = useContext(MySitesContext)
    return (
        <>
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.DashBoard &&
                <div>Pagina de inicio</div>
            }
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.CreateSite &&
                <MainPageCreateSiteMobile/>
            }
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.Site &&
                <MainPageSitesMobile/>
            }
        </>
    )
}