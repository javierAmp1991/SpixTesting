import style from "/styles/Mobile/Form/createForm.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useRef, useState} from "react";
import {MyFormsContext, ProviderForm, UserFormData} from "../../Providers/providerUserAccount";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import utilities from "/styles/utilities.module.css";

const titleSection: string = "Crear Formulario"
const subtitleSection: string = "Recibe solicitudes de lo que tu quieras"
const myForms: string = "Tus formularios"
const placeholderTextArea: string = "Descripcion del formulario"
const buttonText: string = "Crear"
const motiveTitle: string = "Motivo"
const placeHolderMotive: string = "Describa el motivo"

export default function CreateFormPageMobile() {
    const inputMotiveRef = useRef(null)
    const inputDescriptionRef = useRef(null)
    const listMyForms: ProviderForm = useContext(MyFormsContext)
    let [displayForms, setDisplayForm] = useState(false)
    let [displayPopUp, setDisplayPopUp] = useState(false)
    let [selectedFormAnswer, setSelectedFormAnswer] = useState(null)
    let [selectedSol, setSelectedSol] = useState(null)
    const handleDeleteForm = (id: string) => {
        listMyForms.DeleteForm(id)
    }
    const handleSelectForm = (id: string) => {
        listMyForms.ResumeForm.forEach(item => {
            if (item.Id == id) setSelectedFormAnswer(selectedFormAnswer = item)
        })
        setDisplayForm(displayForms = true)
    }
    const handleSelectSol = (id: string) => {
        selectedFormAnswer.ListForms.forEach((item: UserFormData) => {
            if (item.Id == id) {
                setSelectedSol(selectedSol = item)
                handlePopUp()
            }
        })
    }
    const handlePopUp = () => {
        setDisplayPopUp(displayPopUp = !displayPopUp)
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivTitle}>
                <div className={style.title}>
                    {titleSection}
                </div>
                <div>
                    {subtitleSection}
                </div>
                {/*<button className={style.buttonCreate}>
                        {buttonText}
                    </button>*/}
            </div>
            <div className={style.mainDivInfo}>
                {
                    displayForms ?
                        selectedFormAnswer.ListForms.map((item: UserFormData) =>
                            <div key={item.Id} onClick={() => handleSelectSol(item.Id)}
                                 className={style.mainDivFormUser}>
                                <div className={style.gridImageNameUser}>
                                    <div className={style.sizeProfile}>
                                        <Image layout={"fill"} src={item.ProfilePath} alt={""}/>
                                    </div>
                                    <div className={style.name}>
                                        {item.Name}
                                    </div>
                                </div>
                                <div className={`${utilities.clamp3} ${style.aboutMe}`}>
                                    {item.AboutMe}
                                </div>
                                <div className={style.email}>
                                    {item.Email}
                                </div>
                            </div>
                        )
                        :
                        <>
                            <div className={style.grid}>
                                <div className={style.titleForm}>
                                    {motiveTitle}
                                </div>
                                <input ref={inputMotiveRef} placeholder={placeHolderMotive}
                                       className={style.textInput}
                                       type={"text"}/>
                            </div>
                            <textarea ref={inputDescriptionRef} placeholder={placeholderTextArea}
                                      className={style.textArea}/>
                            <div className={style.title}>
                                {myForms}
                            </div>
                            {
                                listMyForms.ResumeForm.length > 0 ?
                                    <div className={style.gridMyForms}>
                                        {
                                            listMyForms.ResumeForm.map((e) =>
                                                <div className={style.mainDivForm} key={e.Id}>
                                                    <div className={style.gridFormClose}>
                                                        <div onClick={() => handleSelectForm(e.Id)}
                                                             className={style.gridIntForm}>
                                                            <div className={style.titleForm}>
                                                                {e.Reason}
                                                            </div>
                                                            <div className={style.gridIcon}>
                                                                <div className={style.sizeIcon}>
                                                                    <Image layout={"fill"}
                                                                           src={GlobalConst.sourceImages.visibilityICon}
                                                                           alt={""}/>
                                                                </div>
                                                                <div className={style.textIcon}>
                                                                    {e.Views} Vistas
                                                                </div>
                                                            </div>
                                                            <div className={style.gridIcon}>
                                                                <div className={style.sizeIcon}>
                                                                    <Image layout={"fill"}
                                                                           src={GlobalConst.sourceImages.users}
                                                                           alt={""}/>
                                                                </div>
                                                                <div className={style.textIcon}>
                                                                    {e.Answers} Solicitudes
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => handleDeleteForm(e.Id)}
                                                                className={style.bordeClose}>
                                                            <div className={style.sizeDeleteIcon}>
                                                                <Image layout={"fill"}
                                                                       src={GlobalConst.sourceImages.closeLoggin}
                                                                       alt={""}/>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    :
                                    <div>
                                        No tienes formularios activos
                                    </div>
                            }
                        </>
                }
            </div>
            {
                displayPopUp &&
                    <PopUpContainerMob isButtonVisible={true} closePopUp={handlePopUp} isBackground={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.gridPopUp}>
                                <div className={style.sizeProfile}>
                                    <Image layout={"fill"} src={selectedSol.ProfilePath} alt={""}/>
                                </div>
                                <div>
                                    <b>Nombre: </b> {selectedSol.Name}
                                </div>
                                <div className={utilities.clamp3}>
                                    <b>Sobre Mi: </b> {selectedSol.AboutMe}
                                </div>
                                <div>
                                    <b>Email: </b> {selectedSol.Email}
                                </div>
                                <div>
                                    <b>Telefono: </b> {selectedSol.Phone}
                                </div>
                                <div>
                                    <b>Direccion: </b> {selectedSol.Venue}
                                </div>
                            </div>
                        </div>
                    </PopUpContainerMob>
            }
        </div>
    )
}