import CreateFormPageMobile from "../Form/createFormPage";
import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import MyProductsMobile from "./myProductsMobile";

export default function MyBussinessMobile() {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <>
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPageMobile/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.MyProducts &&
                <MyProductsMobile/>
            }
        </>
    )
}