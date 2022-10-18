import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {AccountSections, ProviderAccountSections, AccountSectionContext} from "../../Providers/providerGlobal";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useEffect, useState} from "react";

export default function AccountSectionOption({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
    }
    let [stateMyBussines, setStateMyBussines] = useState(false)
    useEffect(() => {
        accountSectionContext.ListAccountSection.forEach(item => {
            if (item.Name == "Mi Negocio") {
                if (item.State) setStateMyBussines(stateMyBussines = true)
                else setStateMyBussines(stateMyBussines = false)
            }
        })
    }, [accountSectionContext.ListAccountSection])
    return (
        item.Name == "Mi Negocio" ?
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
                   /* stateMyBussines &&
                    <div className={style.gridSubItemsOpen}>
                        <button className={style.subItemGrid}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.wishListIcon}/>
                            </div>
                            <div className={style.subItemName}>
                                SubItem 5
                            </div>
                        </button>
                        <button className={style.subItemGrid}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.myBuys}/>
                            </div>
                            <div className={style.subItemName}>
                                SubItem 4
                            </div>
                        </button>
                        <button className={style.subItemGrid}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon}/>
                            </div>
                            <div className={style.subItemName}>
                                SubItem 3
                            </div>
                        </button>
                    </div>*/
                }

            </>
            :
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
    )
}