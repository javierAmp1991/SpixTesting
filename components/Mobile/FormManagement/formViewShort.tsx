import style from "/styles/Mobile/FormManagement/formViewShort.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {useContext, useState} from "react";
import AlertModal from "../Misc/alertModal";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";

const idPortal: string = GlobalId.globalIds.idPortal

export default function FormViewShortMobile({item}: { item: FormItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookDelete = useDisplayPopUpHook(false)
    const popUpHookNewPosition = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const handlePopUpDelete = () => popUpHookDelete.HandleToggle()
    const handleDeleteForm = () => steps.HandleForms(item.Id)
    const handlePopUpNewPosition = () => popUpHookNewPosition.HandleToggle()

    let [newPosition, setNewPosition] = useState(item.Index)
    const handleNewPosition = (e) => setNewPosition(e.target.value)

    const handleChangePosition = () => {
        if (newPosition >= 1 && newPosition <= steps.ListForms.length) {
            steps.HandleDropForm(item.Id, (newPosition - 1))
            handlePopUpNewPosition()
        }
    }

    const inputNewId: CustomInputProps = {
        Value: newPosition.toString(),
        NameInput: `Nueva posicion (min. 1 / maxi. ${steps.ListForms.length})`,
        PlaceholderInput: `Ingrese la nueva posicion`,
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