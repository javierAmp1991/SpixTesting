import style from "/styles/Mobile/FormManagement/myForms.module.css"
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import {useContext} from "react";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import AlertModalMobile from "../Misc/alertModal";
import PopUpFormMobile from "./popUpForm";
import FormViewShortMobile from "./formViewShort";

const title: string = "Formularios"
const createForm: string = "Crear Formulario"
const idPortal: string = GlobalId.globalIds.idPortal

export default function MyFormsMobile() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookAlert = useDisplayPopUpHook(false)
    const handlePopUpAlert = () => popUpHookAlert.HandleToggle()
    const handleAddForm = () => {
        steps.ListForms.length <= 2 ? popUpHook.HandleToggle() : handlePopUpAlert()
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleAdd}>
                <div className={style.title}>
                    {title}
                </div>
                <button onClick={handleAddForm} className={style.gridAddForm}>
                    <div>{createForm}</div>
                    <div className={style.addIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                    </div>
                </button>
            </div>
            <div className={style.contForms}>
                {
                    steps.ListForms.map(item =>
                        <FormViewShortMobile key={item.Id} item={item}/>
                    )
                }
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull isBackground={true} isButtonVisible={true} closePopUp={handleAddForm}>
                        <PopUpFormMobile closePopUp={handleAddForm} item={null}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookAlert.State &&
                createPortal(
                    <PopUpContainerFull isBackground={true} isButtonVisible={true} closePopUp={handlePopUpAlert}>
                        <AlertModalMobile textButton={"Aceptar"} confirmAction={handlePopUpAlert}>
                            <div>
                                No se pueden tener mas de <b>3 formularios</b> a la vez, elimine uno para crear uno
                                nuevo
                            </div>
                        </AlertModalMobile>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}