import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {
    AccountSections,
    ProviderAccountSections,
    AccountSectionContext,
    MenuUserAccount
} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";

export default function AccountSectionOption({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
    }
    return (
        <>
            <button onClick={() => handleSelectSection(item.Id)}
                    className={item.State ? style.mainDivSelected : style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.PathImage}/>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                </div>
            </button>
        </>
    )
}