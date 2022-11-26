import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import CreateSite from "./CreateSite/createSite";

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
                <CreateSite/>
            }
            {/*{
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPage/>
            }*/}
           {/* {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.Inventory &&
                <MyProducts/>
            }*/}

            {/*{
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <CreateProductPage/>
            }*/}
            {/*{
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <EditProductPage/>
            }*/}
            {/*{
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateProduct &&
                <CreateGroupProduct/>
            }*/}
        </>
    )
}