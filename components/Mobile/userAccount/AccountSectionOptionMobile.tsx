import style from "/styles/Mobile/UserAccount/accountSectionOption.module.css"
import {
    AccountSectionContext,
    AccountSections,
    MenuUserAccount,
    ProviderAccountSections
} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";
import Link from "next/link";
import MyBusinessSectionsMobile from "./MyBusinessSections";
import {SettingContextForNavMenu} from "../defaultLayoutMobile";

export default function AccountSectionOptionMobile({item}: { item: AccountSections }) {
    const handleClose = useContext(SettingContextForNavMenu)
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
        accountSectionContext.ListAccountSection.forEach(item => {
                if (item.Id == id) {
                    item.Type != MenuUserAccount.MyBusiness && handleClose()
                }
            }
        )
    }

    return (
        <>
            <Link href={"/userAccount"}>
                <button onClick={() => handleSelectSection(item.Id)}
                        className={item.State ? style.mainDivSelected : style.mainDiv}>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={item.PathImage} alt={""}/>
                    </div>
                    <div className={style.infoDiv}>
                        <div className={style.name}>
                            {item.Name}
                        </div>
                    </div>
                </button>
            </Link>
            {
                item.Type == MenuUserAccount.MyBusiness &&
                <MyBusinessSectionsMobile item={item}/>
            }
        </>
    )
}