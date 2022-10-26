import style from "/styles/Desktop/UserAccount/layoutUserAccount.module.css"
import {LayoutUserAccountProp} from "../../../Class/UserAccount/userAccount";

export default function LayoutUserAccount({children, layoutProp}:
                                              { layoutProp: LayoutUserAccountProp, children: JSX.Element }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.overflowDiv}>
                <div className={style.contTitle}>
                    <div className={style.title}>
                        {layoutProp.Title}
                    </div>
                    <div className={style.subtitle}>
                        {layoutProp.SubTitle}
                    </div>
                </div>
                <div className={style.underDiv}>
                {children}
                </div>
            </div>
        </div>
    )
}