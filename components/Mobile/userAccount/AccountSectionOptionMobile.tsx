import style from "/styles/Mobile/UserAccount/accountSectionOption.module.css"
import {
    AccountSections,
    ProviderAccountSections,
    AccountSectionContext,
    MenuUserAccount
} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";
import Link from "next/link";
import MyBusinessSectionsMobile from "./MyBusinessSections";

export default function AccountSectionOptionMobile({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
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