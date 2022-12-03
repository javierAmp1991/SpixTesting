import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MainPageCreateSite from "./CreateSite/mainPageCreateSite";
import Gallery from "./CreateSite/Events/Gallery";
import MyProducts from "./myProducts";
import MainPageProductManagement from "../ProductManagement/mainPageProductManagement";

export default function MyBussines() {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <>
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.DashBoard &&
                <div>Pagina de inicio</div>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateSite &&
                <MainPageCreateSite/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.Site &&
                <MainPageProductManagement/>
            }
           {/* {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPage/>
            }
             {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.Inventory &&
                <MyProducts/>
            }

            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <CreateProductPage/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <EditProductPage/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <CreateGroupProduct/>
            }*/}
        </>
    )
}