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

export default function AccountSectionOptionMobile({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
    }
    const handleSelectMyBussines = (id: string) => {
        accountSectionContext.SelectMyBussinesSection(id)
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
                item.Type == MenuUserAccount.MyBussines &&
                <div className={item.State ? style.gridSubItemsOpen : style.gridSubItemsClose}>
                    {
                        accountSectionContext.ListMyBussiness.map((item2) =>
                            <button key={item2.Id} onClick={() => handleSelectMyBussines(item2.Id)}
                                    className={item2.State ? style.mainDivSelected : style.mainDiv}>
                                <div className={style.sizeImage}>
                                    <Image layout={"fill"} src={item2.PathImage} alt={""}/>
                                </div>
                                <div className={style.infoDiv}>
                                    <div className={style.name}>
                                        {item2.Name}
                                    </div>
                                </div>
                            </button>
                        )
                    }
                </div>
            }
        </>
    )
}