import style from "/styles/Desktop/FormManagement/applicationViewShort.module.css"
import {ApplicationItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpApplication from "./popUpApplication";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";
import {useContext} from "react";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ApplicationViewShort({item}: { item: ApplicationItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const handlePinned = () => steps.HandlePinnedApplication(item.Id, !item.IsPinned)
    const handleDelete = () => steps.HandleDeleteApplication(item.Id)
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    return (
        <div className={style.mainDiv}>
            <div onClick={handlePopUp} className={style.gridProfileName}>
                <div className={style.sizeProfile}>
                    <Image layout={"fill"} src={"/images/fotoPerfil7.jpg"} alt={""}/>
                </div>
                <div className={style.name}>
                    {item.Name}
                </div>
            </div>
            <div className={style.aboutMe} onClick={handlePopUp}>
                {item.AboutMe}
            </div>
            <div className={style.gridIcon}>
                <button onClick={handleDelete} className={style.deleteIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                </button>
                <button onClick={handlePinned} className={`${style.pinned} ${item.IsPinned? style.pinnedA : style.noPinned}`}>
                    <Image layout={"fill"} alt={""}
                           src={item.IsPinned? GlobalConst.sourceImages.pinnedBlue : GlobalConst.sourceImages.pinnedGray}/>
                </button>
            </div>
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerLogo isButtonVisible={true} isBackground={true} closePopUp={handlePopUp}>
                        <PopUpApplication item={item}/>
                    </PopUpContainerLogo>, document.getElementById(idPortal)
                )

            }
        </div>
    )
}