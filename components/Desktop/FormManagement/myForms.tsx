import style from "/styles/Desktop/FormManagement/myForms.module.css"
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import {useContext} from "react";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import AlertModal from "../Misc/alertModal";
import ContFormView from "./contFormView";
import ButtonCreate, {ButtonCreateProps} from "../../Mobile/Misc/buttonCreate";

const title: string = "Formularios"
const createForm: string = "Crear Formulario"
const idPortal: string = GlobalId.globalIds.idPortal

export default function MyForms() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookAlert = useDisplayPopUpHook(false)
    const handlePopUpAlert = () => popUpHookAlert.HandleToggle()
    const handleAddForm = () => {
        steps.ListForms.length <= 2 ? popUpHook.HandleToggle() : handlePopUpAlert()
    }
    const buttonProps: ButtonCreateProps = {
        Text: "Crear Formulario",
        OnCLick: handleAddForm
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleAdd}>
                <div className={style.title}>
                    {title}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>
            <div>
                <span className={style.ast}>* </span>
                <span>Puedes cambiar el orden de tus forularios, tomando y arrastrandolo a la posicion que deseas</span>
            </div>
            <div className={style.contForms}>
                {
                    steps.ListForms.map((item, index) =>
                        <ContFormView key={item.Id} item={item}/>
                    )
                }
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull isBackground={true} isButtonVisible={true} closePopUp={handleAddForm}>
                        <PopUpForm closePopUp={handleAddForm} item={null}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookAlert.State &&
                createPortal(
                    <PopUpContainerFull isBackground={true} isButtonVisible={true} closePopUp={handlePopUpAlert}>
                        <AlertModal confirmAction={handlePopUpAlert} textButton={"Aceptar"}>
                            <div>
                                No se pueden tener mas de <b>3 formularios</b> a la vez, elimine uno para crear uno
                                nuevo
                            </div>
                        </AlertModal>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}