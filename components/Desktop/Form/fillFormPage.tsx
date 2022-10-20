import LayoutSquare, {LayoutSquareProp} from "../Layouts/layoutSquare";
import style from "/styles/Desktop/Form/fillForm.module.css"
import {useRef} from "react";

const layoutProp: LayoutSquareProp = {
    HeightExact: null,
    HeightRelative: `90%`
}

class InputZone {
    Name: string
    PlaceHolder: string
    TypeInput: string
    Ref: any
}


const titleSection: string = "Rellenar Formulario"
const nameText: string = "Nombre"
const emailText: string = "Email"
const phoneText: string = "Telefono"
const directionText: string = "Direccion"
const aboutYouText: string = "Cuentanos Sobre ti"
const aboutYouPlaceholderText: string = "Agrega una descripcion sobre ti"
const buttonText: string = "Enviar"

export default function FillFormPage() {
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputZones: InputZone[] = [
        {
            Name: "Nombre",
            PlaceHolder: "Ingrese su Nombre",
            TypeInput: "text",
            Ref: inputName
        },
        {
            Name: "Email",
            PlaceHolder: "Ingrese su Email",
            TypeInput: "email",
            Ref: inputEmail
        },
        {
            Name: "Telefono",
            PlaceHolder: "Ingrese su Telefono",
            TypeInput: "number",
            Ref: inputEmail
        },
        {
            Name: "Direccion",
            PlaceHolder: "Ingrese su Direccion",
            TypeInput: "text",
            Ref: inputEmail
        },
    ]
    return (
        <LayoutSquare LayoutProp={layoutProp}>
            <div className={style.mainDiv}>
                <div className={style.grid}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div className={style.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid autem doloremque in minus modi nisi recusandae,
                        repellendus sint sit sunt! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores deserunt enim
                        est incidunt laboriosam optio quisquam saepe sequi ullam voluptatem!
                    </div>
                </div>
                {
                    inputZones.map(item =>
                        <div key={item.Name} className={style.grid}>
                            <div>
                                {item.Name}
                            </div>
                            <input ref={item.Ref} placeholder={item.PlaceHolder} className={style.textInput} type={item.TypeInput}/>
                        </div>
                    )
                }
                <div className={style.grid}>
                    <div>
                        {aboutYouText}
                    </div>
                    <textarea className={style.textArea} placeholder={aboutYouPlaceholderText}/>
                </div>

                <button className={style.button}>
                    {buttonText}
                </button>
            </div>
        </LayoutSquare>
    )
}