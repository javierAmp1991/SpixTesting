import style from "/styles/Mobile/FormManagement/formViewShort.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {useContext} from "react";
import AlertModal from "../Misc/alertModal";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import PopUpReorder, {PopUpReorderProps} from "../userAccount/popUpReorder";

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
    const handleChangePosition = (newPosition: number) => {
        steps.HandleDropForm(item.Id, newPosition)
        handlePopUpNewPosition()
    }

    const popUpReorder: PopUpReorderProps = {
        NameInput: `Nueva posicion (minimo 1 / maximo ${steps.ListForms.length})`,
        Placeholder: `Posicion Actual ${item.Index}`,
        MinValue: 1,
        MaxValue: steps.ListForms.length,
        ActualPosition: item.Index,
        HandleAccept: handleChangePosition,
        HandleClose: handlePopUpNewPosition
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
                    <PopUpReorder item={popUpReorder}/>, document.getElementById(idPortal)
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