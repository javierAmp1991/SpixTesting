import style from "/styles/Desktop/FormManagement/popUpForm.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import {useContext, useState} from "react";
import ButtonCustom, {ButtonProps} from "../Misc/button";
import {GlobalStings} from "../../../public/globalConst";

const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const createTitle: string = "Crear Formulario"
const editTitle: string = "Editar Formulario"

export default function PopUpForm({item, closePopUp}: { item: FormItem, closePopUp: Function }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    let [nameForm, setNameForm] = useState(item == null ? stringEmpty : item.Name)
    let [descriptionForm, setDescriptionForm] = useState(item == null ? stringEmpty : item.Description)
    const handleName = (e) => setNameForm(e.target.value)
    const handleDescription = (e) => setDescriptionForm(e.target.value)
    const handleCreateEdit = () => {
        let id: string = item == null ? "idNuevo" : item.Id
        let newForm: FormItem = {
            Name: nameForm,
            Description: descriptionForm,
            Id: id,
            Index: 999
        }
        steps.HandleCreateEditForm(id, newForm)
        closePopUp()
    }

    const inputNameForm: CustomInputProps = {
        Value: nameForm,
        NameInput: "Nombre",
        PlaceholderInput: "Ingrese el nombre del formulario",
        TypeInput: TypeInput.Input,
        Onchange: handleName,
        IsObligatory: `true`
    }
    const inputDescriptionGroup: CustomInputProps = {
        Value: descriptionForm,
        NameInput: "Descripcion",
        PlaceholderInput: "Describa el formulario",
        TypeInput: TypeInput.TextArea,
        HeightTextArea: 300,
        Onchange: handleDescription,
        IsObligatory: `true`
    }
    const button: ButtonProps = {
        Text: "Aplicar",
        OnClick: handleCreateEdit
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {item == null? createTitle : editTitle}
            </div>
            <CustomInput item={inputNameForm}/>
            <CustomInput item={inputDescriptionGroup}/>
            <ButtonCustom item={button}/>
        </div>
    )
}