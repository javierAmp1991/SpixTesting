import style from "/styles/Mobile/Misc/alertModal.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {ReactNode} from "react";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";

const defaultValue: string = "Confirmar"

export default function AlertModalMobile({children, confirmAction, textButton}:
                                             { children: ReactNode, confirmAction: Function, textButton?: string }) {
    const handleConfirm = () => confirmAction()
    const buttonProps: ButtonProps = {
        OnClick: handleConfirm,
        Text: textButton == null ? defaultValue : textButton
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.banner}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.alertBanner} alt={""}/>
            </div>
            <div className={style.divInfo}>
                {children}
                <ButtonCustom item={buttonProps}/>
            </div>
        </div>
    )
}