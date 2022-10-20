import CreateFormPage from "../Form/createFormPage";
import {AccountSectionContext, MyBussinesMenu, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import AnswerToForm from "../Form/answerToForm";

export default function MyBussines() {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <>
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.CreateForm &&
                <CreateFormPage/>
            }
            {
                accountSectionContext.SectionMyBussinesSelected == MyBussinesMenu.AsnwerToForm &&
                <AnswerToForm/>
            }
        </>
    )
}