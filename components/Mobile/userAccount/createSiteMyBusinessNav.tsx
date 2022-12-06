import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {MyBusinessOptions, MySitesContext, ProviderMySites} from "../../Providers/providerGlobal";
import {useContext} from "react";

export default function CreateSiteMyBusinessNavMobile({item}: { item: MyBusinessOptions }) {
    const mySite: ProviderMySites = useContext(MySitesContext)
    const handleClick = () => {
        mySite.HandleSites(item.Id, !item.State)
        mySite.HandleMyBusiness(item.Id)
    }
    return (
        <button onClick={handleClick} className={`${style.gridNameIcon} ${item.State && style.White}`}>
            <div className={style.infoDiv}>
                <div className={style.name}>
                    {item.Name}
                </div>
            </div>
            <div className={style.sizeImageCreateSite}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
            </div>
        </button>
    )
}