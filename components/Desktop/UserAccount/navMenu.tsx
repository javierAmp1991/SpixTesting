import style from "/styles/Desktop/UserAccount/navMenu.module.css";
import AccountSectionOption from "./AccountSectionOption";
import {AccountSectionContext, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export default function NavMenuUserAccount() {
    const providerAccountSection: ProviderAccountSections = useContext(AccountSectionContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridUser}>
                <div className={style.paddingGradient}>
                    <div className={style.paddingGradient2}>
                        <div className={style.sizeProfileUser}>
                            <Image layout={"fill"} src={"/images/fotoperfil1.png"}/>
                        </div>
                    </div>
                </div>
                <div className={style.userNick}>
                    @kujojotaro
                </div>
            </div>
            <div className={style.gridSections}>
                {
                    providerAccountSection.ListAccountSection.map((item) =>
                        <AccountSectionOption key={item.Id} item={item}/>
                    )
                }
            </div>
            <div className={style.underDiv}>
                <div className={style.sizeLogoSpix}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.logoSpixHeaderDesk}/>
                </div>
            </div>
        </div>
    )
}