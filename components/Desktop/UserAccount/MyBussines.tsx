import CreateFormPage from "../Form/createFormPage";
import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MyProducts from "./myProducts";

export default function MyBussines() {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <>
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.DashBoard &&
                <div>Pagina de inicio</div>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPage/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.MyProducts &&
                <MyProducts/>
            }
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