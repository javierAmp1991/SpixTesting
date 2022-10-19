import style from "/styles/Desktop/QR/passwordScanPage.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";

const placeholderInput: string = "Ingrese la contraseña"
const confirmButton: string = "Confirmar"
const titlePassword: string = "Ingresa tu contraseña"
const noPasswordText: string = "*Ingrese una contraseña"
const wrongPasswordText: string = "La contraseña es incorrecta"

export default function PasswordScanPage({passwordFunc}: { passwordFunc: Function }) {
    let [password, setPassword] = useState("")
    let [wrongPassword, setWrongPassword] = useState(false)
    let [noPassword, setNoPassword] = useState(false)
    const handlePassword = (e) => {
        e.target.value.length > 0 && setNoPassword(noPassword = false)
        setPassword(password = e.target.value)
    }
    const handleSendPassword = () => {
        password.length == 0 && setNoPassword(noPassword = true)
        passwordFunc()
    }

    return (
        <div className={style.backGroundBlue}>
            <div className={style.mainDiv}>
                <div className={style.divLogo}>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.spixBlue}/>
                    </div>
                </div>
                <div className={style.mainDivInfo}>
                    <div className={style.titlePassword}>
                        {titlePassword}
                    </div>
                    <div className={style.inputPassword}>
                        <input onChange={handlePassword} className={style.input} type={"password"}
                               placeholder={placeholderInput}/>
                    </div>
                    {
                        noPassword &&
                        <div className={style.error}>
                            {noPasswordText}
                        </div>
                    }
                    <button onClick={handleSendPassword} className={style.button}>
                        {confirmButton}
                    </button>
                </div>
            </div>
        </div>
    )
}