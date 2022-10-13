import style from "/styles/Desktop/UserAccount/accountAndSecurity.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const titleSection: string = "Cuenta y Seguridad"
const subtitleSection: string = "Manten tu cuenta segura"
export default function AccountAndSecurity() {
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivTitle}>
                <div className={style.title}>
                    {titleSection}
                </div>
                <div className={style.subtitle}>
                    {subtitleSection}
                </div>
            </div>
            <div className={style.mainDivEdit}>
                <div className={style.gridOptions}>
                    {
                        [...Array(6)].map((e, index) =>
                            <div key={index} className={style.gridInput}>
                                <div className={style.titleInputs}>
                                    Nombre
                                </div>
                                <input disabled={true} type={"text"} className={style.styleInput}/>
                                <button className={style.editCont}>
                                    Editar
                                </button>
                            </div>
                        )
                    }
                    <div className={style.gridVerificacion}>
                        <div className={style.titleVer2}>
                            Verificacion Nivel 1:
                        </div>
                        <div className={style.sizeCheckIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon}/>
                        </div>
                    </div>
                    <div className={style.titleVer2}>
                        Verificacion Nivel 2
                    </div>
                    <div className={style.failedVerificacion}>
                        La verificación nivel 2 ha fallado debido a que en el archivo de
                        Carnet frontal no se ve de forma clara el n° de documento.
                        Te pedimos volver a subir la imagen sin sombras ni borrosa (consejo:
                        toma la foto en un lugar con bastante luz para que no se formen sombras).
                    </div>
                    {
                        <div className={style.gridVerLvl2}>
                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Carnet (frontal)
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon}/>
                                    </div>
                                </div>
                                <div className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}/>
                                </div>
                            </div>
                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Carnet(reverso)
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon}/>
                                    </div>
                                </div>
                                <div className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}/>
                                </div>
                            </div>
                            <div>
                                <div className={style.gridTextCamera}>
                                    <div className={style.upImage}>
                                        Selfie
                                    </div>
                                    <div className={style.sizeCamera}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.cameraIcon}/>
                                    </div>
                                </div>
                                <div className={style.contImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}/>
                                </div>
                            </div>
                        </div>
                    }
                    <div className={style.buttonSend}>
                        Enviar
                    </div>
                </div>
            </div>
        </div>
    )
}