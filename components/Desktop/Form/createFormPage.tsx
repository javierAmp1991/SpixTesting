import style from "/styles/Desktop/Form/createForm.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useRef} from "react";
import LayoutSquare, {LayoutSquareProp} from "../Layouts/layoutSquare";
import {MyForm, MyFormsContext} from "../../Providers/providerUserAccount";

const titleSection: string = "Crear Formulario"
const subtitleSection: string = "Anuncia tus ofertas de trabajo"
const myForms: string = "Tus formularios"
const placeholderTextArea: string = "Descripcion del formulario"
const buttonText: string = "Crear"
const motiveTitle: string = "Motivo"
const placeHolderMotive: string = "Describa el motivo"
const layoutProp: LayoutSquareProp = {
    HeightExact: null,
    HeightRelative: `90%`
}
export default function CreateFormPage() {
    const inputMotiveRef = useRef(null)
    const inputDescriptionRef = useRef(null)
    const listMyForms: MyForm[] = useContext(MyFormsContext)

    return (
        <div className={style.mainDiv}>
            <div className={style.overflowDiv}>
                <div className={style.mainDivTitle}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div>
                        {subtitleSection}
                    </div>
                </div>
                {/*<button className={style.buttonCreate}>
                        {buttonText}
                    </button>*/}
                <div className={style.mainDivInfo}>
                <div className={style.grid}>
                    <div>
                        {motiveTitle}
                    </div>
                    <input ref={inputMotiveRef} placeholder={placeHolderMotive} className={style.textInput}
                           type={"text"}/>
                </div>
                <textarea ref={inputDescriptionRef} placeholder={placeholderTextArea} className={style.textArea}/>
                <div className={style.title}>
                    {myForms}
                </div>
                <div className={style.gridMyForms}>
                    {
                        listMyForms.map((e) =>
                            <div className={style.mainDivForm} key={e.Id}>
                                <div>
                                    {e.Reason}
                                </div>
                                <div className={style.gridIcon}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.visibilityICon} alt={""}/>
                                    </div>
                                    <div className={style.textIcon}>
                                        {e.Views} vistas
                                    </div>
                                </div>
                                <div className={style.gridIcon}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.users} alt={""}/>
                                    </div>
                                    <div className={style.textIcon}>
                                        {e.Answers} Respondieron
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                </div>
            </div>
        </div>
    )
}