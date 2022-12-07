import style from "/styles/Desktop/FormManagement/formViewShort.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {useContext} from "react";
import AlertModal from "../Misc/alertModal";
import PopUpContainerFull from "../Misc/popUpContainerFull";

const idPortal: string = GlobalId.globalIds.idPortal

export default function FormViewShort({item}: { item: FormItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookDelete = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const handlePopUpDelete = () => popUpHookDelete.HandleToggle()
    const handleDeleteForm = () => steps.HandleForms(item.Id)

    return (
        <div className={style.mainDiv}>
            <div onClick={handlePopUp} className={style.info}>
                <div className={style.name}>
                    {item.Name}
                </div>
                <div className={style.description}>
                    {item.Description}
                </div>
            </div>
            {/*<div className={style.formIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.formIconGray}/>
            </div>*/}
            <button onClick={handlePopUpDelete} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
            </button>
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerLogo isBackground={true} isButtonVisible={true} closePopUp={handlePopUp}>
                        <PopUpForm closePopUp={handlePopUp} item={item}/>
                    </PopUpContainerLogo>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookDelete.State &&
                createPortal(
                    <PopUpContainerFull isButtonVisible={true} isBackground={true} closePopUp={handlePopUpDelete}>
                        <AlertModal confirmAction={handleDeleteForm}>
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