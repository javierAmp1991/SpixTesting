import style from "/styles/Mobile/FormManagement/popUpApplication.module.css"
import {ApplicationItem} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";

const name: string = "Nombre: "
const direction: string = "Direccion: "
const email: string = "Email: "
const number: string = "Numero: "
const aboutMe: string = "Sobre mi: "

export default function PopUpApplicationMobile({item}: { item: ApplicationItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Aplicacion
            </div>
            <div>
                <b>{name}</b> {item.Name}
            </div>
            <div>
                <b> {direction}</b>{item.Direction}
            </div>
            <div>
                <b>{number}</b>{item.Number}
            </div>
            <div>
                <b>{email}</b>{item.Email}
            </div>
            <div>
                <b>{aboutMe}</b>{item.AboutMe}
            </div>
            <div className={style.profile}>
                <Image layout={"fill"} src={"/images/fotoPerfil7.jpg"} alt={""}/>
            </div>
        </div>
    )
}