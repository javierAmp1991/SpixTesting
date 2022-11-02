import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {
    AccountSectionContext,
    AccountSections,
    MenuUserAccount,
    MyBussinesMenu,
    ProviderAccountSections
} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";
import {GlobalConst} from "../../../public/globalConst";

export default function AccountSectionOption({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
    }
    const handleSelectMyBussines = (id: string) => {
        accountSectionContext.SelectMyBussinesSection(id)
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
            {
                item.Type == MenuUserAccount.MyBussines &&
                <div className={item.State ? style.gridSubItemsOpen : style.gridSubItemsClose}>
                    {
                        accountSectionContext.ListMyBussiness.map((item2) =>
                            <button key={item2.Id} onClick={() => handleSelectMyBussines(item2.Id)}
                                    className={item2.State ? style.mainDivSelected : style.mainDiv}>
                                {
                                    item2.SubType != MyBussinesMenu.CreateSite &&
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item2.PathImage}/>
                                    </div>
                                }
                                <div className={style.infoDiv}>
                                    <div className={style.name}>
                                        {item2.Name}
                                    </div>
                                </div>
                                {
                                    item2.SubType == MyBussinesMenu.CreateSite &&
                                    <div className={style.sizeImageCreateSite}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIconEmpty}/>
                                    </div>
                                }
                            </button>
                        )
                    }
                </div>
            }
        </>
    )
}