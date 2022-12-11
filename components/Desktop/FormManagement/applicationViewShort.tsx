import style from "/styles/Desktop/FormManagement/applicationViewShort.module.css"
import {ApplicationItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpApplication from "./popUpApplication";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";
import {useContext, useEffect, useState} from "react";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import utilities from "/styles/utilities.module.css";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ApplicationViewShort({item}: { item: ApplicationItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    let [isPinned, setIsPinned] = useState(item.IsPinned)
    const handlePinned = () => setIsPinned(!isPinned)
    const handleDelete = () => steps.HandleDeleteApplication(item.Id)
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    useEffect(() => {
        const isPinnedCall = () => steps.HandlePinnedApplication(item.Id, isPinned)
        setTimeout(isPinnedCall, 500)
    }, [isPinned])
    return (
        <div className={style.mainDiv}>
            <div className={style.gridData} onClick={handlePopUp}>
                <div className={style.gridProfileName}>
                    <div className={style.sizeProfile}>
                        <Image layout={"fill"} src={"/images/fotoPerfil7.jpg"} alt={""}/>
                    </div>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                </div>
                <div className={`${utilities.clamp5}`} onClick={handlePopUp}>
                    <b>Sobre mi: </b>{item.AboutMe}
                </div>
                <div className={utilities.separationLine}/>
                <div>
                    <b>Email: </b>{item.Email}
                </div>
                <div>
                    <b>Telefono: </b>{item.Number}
                </div>
            </div>
            <button onClick={handleDelete} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
            </button>
            <button onClick={handlePinned}
                    className={`${style.pinned} ${isPinned ? style.pinnedA : style.noPinned}`}>
                <Image layout={"fill"} alt={""}
                       src={isPinned ? GlobalConst.sourceImages.pinnedBlue : GlobalConst.sourceImages.pinnedGray}/>
            </button>
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull isButtonVisible={true} isBackground={true} closePopUp={handlePopUp}>
                        <PopUpApplication item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )

            }
        </div>
    )
}