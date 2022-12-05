import style from "/styles/Mobile/Misc/alertModal.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ReactNode} from "react";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";


export default function AlertModalMobile({children, confirmAction}: { children: ReactNode, confirmAction: Function }) {
    const handleConfirm = () => confirmAction()
    const buttonProps: ButtonProps = {
        OnClick: handleConfirm,
        Text: "Confirmar"
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.banner}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.alertBanner}/>
            </div>
            <div className={style.divInfo}>
                {children}
                <ButtonCustom item={buttonProps}/>
            </div>
        </div>
    )
}