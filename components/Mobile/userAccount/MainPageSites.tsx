import {
    ProviderSubSectionMyBusiness,
    SubSectionSites,
    SubSectionsMyBusinessContext
} from "../../Providers/providerGlobal";
import {useContext} from "react";
import GalleryMobile from "./CreateSite/Events/GalleryMobile";
import MainPageProductManagementMobile from "../ProductManagement/mainPageProductManagement";
import MainPageFormMobile from "../FormManagement/mainPageForm";

export default function MainPageSitesMobile() {
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
                <GalleryMobile/>
            }
            {
                subSection.SubSectionSelected == SubSectionSites.Products &&
                <MainPageProductManagementMobile/>
            }
            {
                subSection.SubSectionSelected == SubSectionSites.Form &&
                <MainPageFormMobile/>
            }
        </>
    )
}