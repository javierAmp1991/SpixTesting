import {
    ProviderSubSectionMyBusiness,
    SubSectionSites,
    SubSectionsMyBusinessContext
} from "../../Providers/providerGlobal";
import {useContext} from "react";
import GalleryMobile from "./CreateSite/Events/GalleryMobile";
import MainPageProductManagementMobile from "../ProductManagement/mainPageProductManagement";

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
                <div>
                    prueba de que es form
                </div>
            }
        </>
    )
}