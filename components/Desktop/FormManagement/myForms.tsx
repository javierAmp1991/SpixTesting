import style from "/styles/Desktop/FormManagement/myForms.module.css"
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import {useContext} from "react";
import FormViewShort from "./formViewShort";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";

const title: string = "Mis Formularios"
const createForm: string = "Crear Formulario"
const idPortal: string = GlobalId.globalIds.idPortal

export default function MyForms() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => {
        steps.ListForms.length <= 2 && popUpHook.HandleToggle()
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleAdd}>
                <div className={style.title}>
                    {title}
                </div>
                <button onClick={handlePopUp} className={style.gridAddForm}>
                    <div>{createForm}</div>
                    <div className={style.addIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                    </div>
                </button>
            </div>
            <div className={style.contForms}>
                {
                    steps.ListForms.map(item =>
                        <FormViewShort key={item.Id} item={item}/>
                    )
                }
            </div>
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerLogo isBackground={true} isButtonVisible={true} closePopUp={handlePopUp}>
                        <PopUpForm closePopUp={handlePopUp} item={null}/>
                    </PopUpContainerLogo>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}