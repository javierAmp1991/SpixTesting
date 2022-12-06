import {MyBusinessSectionsEnum, MySitesContext, ProviderMySites} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MainPageCreateSite from "./CreateSite/mainPageCreateSite";
import MainPageSites from "./MainPageSites";

export default function MyBussines() {
    const mySites: ProviderMySites = useContext(MySitesContext)
    return (
        <>
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.DashBoard &&
                <div>Pagina de inicio</div>
            }
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.CreateSite &&
                <MainPageCreateSite/>
            }
            {
                mySites.SectionSelected == MyBusinessSectionsEnum.Site &&
                <MainPageSites/>
            }
        </>
    )
}