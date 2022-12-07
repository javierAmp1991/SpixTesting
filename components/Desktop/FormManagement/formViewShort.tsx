import style from "/styles/Desktop/FormManagement/formViewShort.module.css"
import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpForm from "./popUpForm";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {useContext} from "react";
import AlertModal from "../Misc/alertModal";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import {useDrag} from "react-dnd";

const idPortal: string = GlobalId.globalIds.idPortal

export default function FormViewShort({item}: { item: FormItem }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "formItem",
        item: {Id: item.Id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookDelete = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const handlePopUpDelete = () => popUpHookDelete.HandleToggle()
    const handleDeleteForm = () => steps.HandleForms(item.Id)

    return (
        <div ref={drag} className={style.mainDiv}>
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