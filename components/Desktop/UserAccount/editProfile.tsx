import style from "/styles/Desktop/UserAccount/editProfile.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";

const titleSection: string = "Editar perfil"
const subtitleSection: string = "edita tus datos"

export default function EditProfile() {
    let [otherGender, setOtherGender] = useState(false)
    const handleGender = (e) => {
        setOtherGender(otherGender = e.target.value == "Otro" ? true : false)
    }
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
                    <div className={style.line}>
                        <div className={style.sizeLogo}>
                            <Image layout={"fill"} src={"/images/spixBlue.png"}/>
                        </div>
                    </div>
                    <div className={style.gridImageName}>
                        <div className={style.paddingGradient}>
                            <div className={style.sizeProfilePic}>
                                <Image layout={"fill"} objectFit={"cover"} src={"/images/fotoperfil1.png"}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                @kujojotaro
                            </div>
                            <div className={style.labelPhoto}>
                                cambiar foto
                            </div>
                        </div>
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Nombre
                        </div>
                        <input className={style.styleInput} placeholder={"nombre"} type={"text"}/>
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Fecha nacimiento
                        </div>
                        <input className={style.styleInput} placeholder={"selecciona una fecha"} type={"date"}/>
                    </div>
                    <div>
                        <div className={style.gridNameInput}>
                            <div className={style.titleInputs}>
                                Genero
                            </div>
                            <select onChange={handleGender} className={style.styleInput}>
                                <option>
                                    Hombre
                                </option>
                                <option>
                                    Mujer
                                </option>
                                <option>
                                    Otro
                                </option>
                            </select>

                        </div>
                        {
                            otherGender &&
                            <div className={`${style.gridNameInput} ${style.spaceOtherGender}`}>
                                <div/>
                                <div className={style.styleInput}>
                                    <input width={"100%"} placeholder={"especifique si es otro"} type={"text"}/>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Nacionalidad
                        </div>
                        <select className={style.styleInput}>
                            <option>Chileno</option>
                            <option>Venezolano</option>
                            <option>Colombiano</option>
                        </select>
                    </div>
                    <div className={style.buttonConfirm}>
                        Confirmar
                    </div>
                </div>
            </div>
        </div>
    )
}