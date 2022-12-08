import style from "/styles/Mobile/FormManagement/formViewShort.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId, GlobalStings} from "../../../public/globalConst";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {useContext, useEffect, useState} from "react";
import AlertModal from "../Misc/alertModal";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";

const idPortal: string = GlobalId.globalIds.idPortal
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty

export default function FormViewShortMobile({item}: { item: FormItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookDelete = useDisplayPopUpHook(false)
    const popUpHookNewPosition = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const handlePopUpDelete = () => popUpHookDelete.HandleToggle()
    const handleDeleteForm = () => steps.HandleForms(item.Id)
    const handlePopUpNewPosition = () => popUpHookNewPosition.HandleToggle()

    let [newPosition, setNewPosition] = useState(stringEmpty)
    let [samePosition, setSamePosition] = useState(false)
    let [invalidNumber, setInvalidNumber] = useState(false)
    const handleNewPosition = (e) => {
        setNewPosition(e.target.value)
    }
    const handleChangePosition = () => {
        let pos: number = parseInt(newPosition)
        if (!samePosition && !invalidNumber) {
            steps.HandleDropForm(item.Id, (pos - 1))
            setSamePosition(false)
            setInvalidNumber(false)
            setNewPosition(stringEmpty)
            handlePopUpNewPosition()
        }
    }

    useEffect(() => {
        let pos: number = parseInt(newPosition)
        setSamePosition(pos == item.Index + 1)
        setInvalidNumber(pos < 1 || pos > steps.ListForms.length)
    },[newPosition])

    const inputNewId: CustomInputProps = {
        Value: newPosition,
        NameInput: `Ingrese nueva posicion (min. 1 / maxi. ${steps.ListForms.length})`,
        PlaceholderInput: `Posicion actual ${item.Index + 1}`,
        TypeInput: TypeInput.Input,
        TypeTextInput: `number`,
        Onchange: handleNewPosition,
    }
    const buttonProps: ButtonProps = {
        Text: "Aplicar",
        OnClick: handleChangePosition
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.info}>
                <div className={style.gridPositionName}>
                    <button onClick={handlePopUpNewPosition} className={style.position}>
                        {item.Index + 1}
                    </button>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                </div>
                <div onClick={handlePopUp} className={style.description}>
                    {item.Description}
                </div>
            </div>
            <button onClick={handlePopUpDelete} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
            </button>
            {
                popUpHookNewPosition.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpNewPosition} isButtonVisible={true} isBackground={true}>
                        <div className={style.mainDivNewPosition}>
                            <CustomInput item={inputNewId}/>
                            {
                                samePosition &&
                                <div className={style.samePosition}>
                                    * Esta moviendo el formulario a la misma posicion
                                </div>
                            }
                            {
                                invalidNumber &&
                                <div className={style.samePosition}>
                                    * Numero invalido
                                </div>
                            }
                            <ButtonCustom item={buttonProps}/>
                        </div>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull isBackground={true} isButtonVisible={true} closePopUp={handlePopUp}>
                        <PopUpForm closePopUp={handlePopUp} item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookDelete.State &&
                createPortal(
                    <PopUpContainerFull isButtonVisible={true} isBackground={true} closePopUp={handlePopUpDelete}>
                        <AlertModal textButton={null} confirmAction={handleDeleteForm}>
                            <div>
                                Seguro que desea eliminar <b>{item.Name}</b> de su lista de formularios?
                            </div>
                        </AlertModal>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}