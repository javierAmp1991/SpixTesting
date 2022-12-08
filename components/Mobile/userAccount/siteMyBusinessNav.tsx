import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {
    MyBusinessOptions, MySitesContext,
    ProviderMySites, ProviderSubSectionMyBusiness, SubSectionsMyBusinessContext
} from "../../Providers/providerGlobal";
import {useContext} from "react";
import {SettingContextForNavMenu} from "../defaultLayoutMobile";

export default function SiteMyBusinessNavMobile({item}: { item: MyBusinessOptions }) {
    const handleClose = useContext(SettingContextForNavMenu)
    const mySite: ProviderMySites = useContext(MySitesContext)
    const subSection: ProviderSubSectionMyBusiness = useContext(SubSectionsMyBusinessContext)
    const handleClick = () => {
        mySite.HandleMyBusiness(item.Id)
        mySite.HandleSites(item.Id, !item.State)
    }
    const handleSubSection = (id: string) => {
        subSection.HandleSubSection(id)
        handleClose()
    }

    return (
        <>
            <button onClick={handleClick} className={`${style.gridNameIcon} ${item.State && style.White}`}>
                <div className={style.infoDiv}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                </div>
                <div className={`${style.sizeArrow} ${item.State && style.arrowTransform}`}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrowWhite} alt={""}/>
                </div>
            </button>
            {
                item.State &&
                <div className={style.gridSubSite}>
                    {
                        subSection.ListSubsection.map(item3 =>
                            <button onClick={() => handleSubSection(item3.Id)} key={item3.Id}
                                    className={`${style.gridNameIcon2} ${item3.State && style.White}`}>
                                <div key={item3.Name} className={style.optionSite}>
                                    {item3.Name}
                                </div>
                                <div className={style.sizeIconSubSection}>
                                    <Image layout={"fill"} src={item3.PathImage} alt={""}/>
                                </div>
                            </button>
                        )
                    }
                </div>
            }
        </>
    )
}