import style from "/styles/Mobile/ProductManagement/allGroupProducts.module.css"
import { GlobalId} from "../../../public/globalConst";
import {useContext} from "react";
import {GroupsPGContext, ProviderPGGroups,} from "../../Providers/UserAccount/ProductAndGroupProvider";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import {CreateEditGroupProps} from "../../Desktop/ProductManagement/popUpCreateEditGroup";
import PopUpCreateEditGroupMobile from "./popUpCreateEditGroup";
import GroupProductsMobile from "./groupProducts";
import ButtonCreate, {ButtonCreateProps} from "../Misc/buttonCreate";
import MessageReorder, {MessageReorderProps} from "../../Desktop/Misc/messageReorder";

const idPortal: string = GlobalId.globalIds.idPortal
const title: string = "Grupos"


export default function AllGroupsProductsMobile() {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()

    const popUpCreate: CreateEditGroupProps = {
        ClosePopUp: handlePopUp,
    }
    const buttonProps: ButtonCreateProps = {
        Text: "Crear Grupo",
        OnCLick: handlePopUp
    }
    const reorder: MessageReorderProps = {
        TextBefore: "Cambiar el orden de los grupos de productos, presionando el numero",
        TextAfter: "al lado del nombre"
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {title}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>

            <MessageReorder item={reorder}/>

            <div className={style.gridProducts}>
                {
                    groupContext.Groups.map((item) =>
                        <GroupProductsMobile key={item.Id} item={item}/>
                    )
                }
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <PopUpCreateEditGroupMobile item={popUpCreate}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}