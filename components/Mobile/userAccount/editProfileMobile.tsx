import style from "/styles/Mobile/UserAccount/editProfile.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import ReactFlagsSelect from "react-flags-select";

const titleSection: string = "Editar perfil"
const subtitleSection: string = "Edita tus datos"
const inputFilteProfile: string = "inputFilteProfile001234"
const placeHolderSelect: string = "Selecciona un pais"

export default function EditProfileMobile() {
    let [otherGender, setOtherGender] = useState(false)
    let [displayOtherGender, setDisplayOtherGender] = useState(false)
    let [gender, setGender] = useState("")
    let [name, setName] = useState("")
    let [nationality, setNationality] = useState("")
    let [date, setDate] = useState("Fecha de nacimiento")
    let [profileImage, setProfileImage] = useState("")
    const [selected, setSelected] = useState("");

    const handleOtherGender = (e) => {
        setOtherGender(otherGender = e.target.value)
    }

    const handleGender = (e) => {
        setGender(gender = e.target.value)
    }

    useEffect(() => {
        setDisplayOtherGender(displayOtherGender = gender == "Otro")
    }, [gender])

    const handleDate = (e) => {
        setDate(date = e.target.value)
    }

    const handleNationality = (e) => {
        setNationality(nationality = e.target.value)
    }

    const handleName = (e) => {
        setName(name = e.target.value)
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
                    <div className={style.gridImageName}>
                        <div className={style.paddingGradient}>
                            <label htmlFor={inputFilteProfile} className={style.sizeProfilePic}>
                                <Image layout={"fill"} objectFit={"cover"} src={"/images/fotoperfil1.png"}/>
                            </label>
                            <label  className={style.editProfilePic}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.editProfilePic}/>
                            </label>
                        </div>
                        <div>
                            <div className={style.user}>
                                @kujojotaro
                            </div>
                            <label htmlFor={inputFilteProfile} className={style.labelPhoto}>
                                cambiar foto de perfil
                            </label>
                            <input className={style.styleInputFile} id={inputFilteProfile} type={"file"}/>
                        </div>
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Nombre
                        </div>
                        <input onChange={handleName} className={style.styleInput} placeholder={"nombre"} type={"text"}/>
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Fecha nacimiento
                        </div>
                        <input onChange={handleDate} className={`${style.styleInput} ${style.datePicker}`}
                               type={"date"}/>
                    </div>
                    <div className={style.divGender}>
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
                            displayOtherGender &&
                            <div className={`${style.gridNameInput} ${style.spaceOtherGender}`}>
                                <div/>
                                <input onChange={handleOtherGender} className={style.styleInput}
                                       placeholder={"especifique si es otro"}
                                       type={"text"}/>
                            </div>
                        }
                    </div>
                    <div className={style.gridNameInput}>
                        <div className={style.titleInputs}>
                            Nacionalidad
                        </div>
                        {/*<select className={style.styleInput}>
                            <option>Chileno</option>
                            <option>Venezolano</option>
                            <option>Colombiano</option>
                        </select>*/}
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            placeholder={placeHolderSelect}
                        selectedSize={14}/>
                    </div>
                    <button className={style.buttonConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}