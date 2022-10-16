import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useContext} from "react";
import style from "/styles/Mobile/Misc/sideSettings.module.css"
import {ProviderAccountSections, AccountSectionContext} from "../../Providers/providerUserAccount";
import AccountSectionOptionMobile from "../userAccount/AccountSectionOptionMobile";

export default function SideSetting({closeDesplegable}: { closeDesplegable: Function }) {
    const providerAccountSection: ProviderAccountSections = useContext(AccountSectionContext)
    const handleClose = () => closeDesplegable()
    return (
        <div className={style.mainDiv}>
            <div className={style.gridUser}>
                <div className={style.paddingGradient}>
                    <div className={style.paddingGradient2}>
                        <div onClick={handleClose} className={style.sizeProfileUser}>
                            <Image layout={"fill"} src={"/images/fotoperfil1.png"}/>
                        </div>
                    </div>
                </div>
                <div className={style.userNick}>
                    @kujojotaro
                </div>
            </div>
            {/*<div className={style.gridSections}>
                {
                    providerAccountSection.ListAccountSection.map((item) =>
                        <AccountSectionOptionMobile key={item.Id} item={item}/>
                    )
                }
            </div>*/}
            <div className={style.underDiv}>
                <div className={style.sizeLogoSpix}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.logoSpixHeaderDesk}/>
                </div>
            </div>
        </div>
    )
}