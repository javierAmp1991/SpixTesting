import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {
    AccountSectionContext,
    AccountSections,
    MenuUserAccount,
    ProviderAccountSections
} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";
import MyBusinessSections from "./MyBusinessSections";

export default function AccountSectionOption({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = () => accountSectionContext.SelectSection(item.Id)
    const cssStyle = getCssStyle()
    return (
        <>
            <button onClick={handleSelectSection} className={cssStyle.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.PathImage} alt={""}/>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                </div>
            </button>
            {
                item.Type == MenuUserAccount.MyBusiness &&
                <MyBusinessSections item={item}/>
            }
        </>
    )
    function getCssStyle() {
        return {
            mainDiv: item.State ? style.mainDivSelected : style.mainDiv
        }
    }
}