import style from "/styles/Desktop/UserAccount/accountAndSecurity.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import Link from "next/link";
import {AccountSecurityContext, ProviderAcctounSecurityEdit} from "../../Providers/providerUserAccount";
import {useContext} from "react";

class UploadImageCarnet {
    FileImage: File
    Id: string
    ProvisoryUrl: string
}

const titleSection: string = "Cuenta y Seguridad"
const subtitleSection: string = "Manten tu cuenta segura"
const editText: string = "Editar"
const activeTxt: string = "Activar"
const idFronView: string = "idFrontView001"
const idBackView: string = "idBackView001"
const idSelfieView: string = "idSelfieView001"
const verificationLevel1: string = "Verificacion Nivel 1:"
const verificationLevel2: string = "Verificacion Nivel 2:"
const verification2Step: string = "Verificacion de 2 pasos:"
const failedText: string = "La verificación nivel 2 ha fallado debido a que en el archivo de\n" +
    "Carnet frontal no se ve de forma clara el n° de documento.\n" +
    "Te pedimos volver a subir la imagen sin sombras ni borrosa (consejo:\n" +
    "toma la foto en un lugar con bastante luz para que no se formen sombras)."

export default function AccountAndSecurity() {
    const accountSecurityContext: ProviderAcctounSecurityEdit = useContext(AccountSecurityContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.overflowScroll}>
                <div className={style.mainDivTitle}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div className={style.subtitle}>
                        {subtitleSection}
                    </div>
                </div>
                <div className={style.gridOptions}>
                    {
                        accountSecurityContext.ListEditItems.map(item =>
                            <div key={item.Id} className={style.gridInput}>
                                <div className={style.titleInputs}>
                                    {item.Name}
                                </div>
                                <input disabled={true} type={"text"} className={style.styleInput}/>
                                <Link href={item.Link}>
                                    <a className={style.editCont}>
                                        {editText}
                                    </a>
                                </Link>
                            </div>
                        )
                    }
                    {
                        accountSecurityContext.ListVerificacionItems.map(item =>
                            <div key={item.Id} className={style.gridVerificacion}>
                                <div className={style.titleVer2}>
                                    {item.Name}
                                </div>
                                <div className={style.sizeCheckIcon}>
                                    {
                                        item.State == true &&
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                    }
                                </div>
                                <div>
                                    {
                                        item.State != true &&
                                        <Link href={item.Link}>
                                            <a className={style.editCont}>
                                                {activeTxt}
                                            </a>
                                        </Link>
                                    }
                                </div>
                            </div>
                        )
                    }

                    {/*<div className={style.failedVerificacion}>
                        {failedText}
                    </div>
                    {
                        <div className={style.gridVerLvl2}>
                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Carnet (frontal)
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon} alt={""}/>
                                    </div>
                                </div>
                                <label htmlFor={idFronView} className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.carnetIcon}
                                           alt={""}/>
                                </label>
                                <input className={style.InputImage} id={idFronView} type={"file"}/>
                            </div>

                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Carnet(reverso)
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon} alt={""}/>
                                    </div>
                                </div>
                                <label htmlFor={idBackView} className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.carnetIcon}
                                           alt={""}/>
                                </label>
                                <input className={style.InputImage} id={idBackView} type={"file"}/>
                            </div>

                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Selfie
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon} alt={""}/>
                                    </div>
                                </div>
                                <label htmlFor={idSelfieView} className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.carnetIcon}
                                           alt={""}/>
                                </label>
                                <input className={style.InputImage} id={idSelfieView} type={"file"}/>
                            </div>
                        </div>
                    }*/}
                    <button className={style.buttonSend}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}