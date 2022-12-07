import {
    ProviderSubSectionMyBusiness,
    SubSectionSites,
    SubSectionsMyBusinessContext
} from "../../Providers/providerGlobal";
import {useContext} from "react";
import Gallery from "./CreateSite/Events/Gallery";
import MainPageProductManagement from "../ProductManagement/mainPageProductManagement";
import CreateForm from "../../../pages/fillForm";
import AnswerToForm from "../Form/answerToForm";
import FillFormDefault from "../../Globals/fillFormDefault";
import MainPageForm from "../FormManagement/mainPageForm";

export default function MainPageSites() {
    const subSection: ProviderSubSectionMyBusiness = useContext(SubSectionsMyBusinessContext)
    return (
        <>
            {
                subSection.SubSectionSelected == SubSectionSites.Dashboard &&
                <div>
                    Dashboard
                </div>
            }
            {
                subSection.SubSectionSelected == SubSectionSites.Gallery &&
                <Gallery/>
            }
            {
                subSection.SubSectionSelected == SubSectionSites.Products &&
                <MainPageProductManagement/>
            }
            {
                subSection.SubSectionSelected == SubSectionSites.Form &&
                <MainPageForm/>
            }
        </>
    )
}