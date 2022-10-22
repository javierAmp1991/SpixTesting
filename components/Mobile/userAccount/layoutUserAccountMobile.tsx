import style from "/styles/Mobile/UserAccount/layoutUserAccount.module.css"
import {LayoutUserAccountProp} from "../../../Class/UserAccount/userAccount";

export default function LayoutUserAccountMobile({layoutProp, children}:
                                                    { layoutProp: LayoutUserAccountProp, children: JSX.Element }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.contTitle}>
                <div className={style.title}>
                    {layoutProp.Title}
                </div>
                <div className={style.subtitle}>
                    {layoutProp.SubTitle}
                </div>
            </div>
            {children}
        </div>
    )
}