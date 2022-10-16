import style from "/styles/Mobile/UserAccount/accountSectionOption.module.css"
import {AccountSections, ProviderAccountSections, AccountSectionContext} from "../../Providers/providerGlobal";
import Image from "next/image";
import {useContext} from "react";
import Link from "next/link";

export default function AccountSectionOptionMobile({item}: { item: AccountSections }) {
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleSelectSection = (id: string) => {
        accountSectionContext.SelectSection(id)
    }
    /*let [stateMyBussines, setStateMyBussines] = useState(false)*/
    /*useEffect(() => {
        accountSectionContext.ListAccountSection.forEach(item => {
            if (item.Name == "Mi Negocio") {
                if (item.State) setStateMyBussines(stateMyBussines = true)
                else setStateMyBussines(stateMyBussines = false)
            }
        })
    }, [accountSectionContext.ListAccountSection])*/

    return (
        <Link href={"userAccount"}>
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
    )
}