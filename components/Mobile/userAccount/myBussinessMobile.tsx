import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MainPageCreateSiteMobile from "./CreateSite/mainPageCreateSiteMobile";
import MainPageProductManagementMobile from "../ProductManagement/mainPageProductManagement";

export default function MyBussinessMobile() {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <>
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.DashBoard &&
                <div>Pagina de inicio</div>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateSite &&
                <MainPageCreateSiteMobile/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.Site &&
                /*<GalleryMobile/>*/
                <MainPageProductManagementMobile/>

            }

            {/*{
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPageMobile/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.MyProducts &&
                <MyProductsMobile/>
            }*/}
        </>
    )
}