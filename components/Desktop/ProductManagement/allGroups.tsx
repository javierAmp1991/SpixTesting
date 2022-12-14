import style from "/styles/Desktop/ProductManagement/allGroupProducts.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import {useContext} from "react";
import ContGroupProducts from "./contGroupProducts";
import {GroupsPGContext, ProviderPGGroups,} from "../../Providers/UserAccount/ProductAndGroupProvider";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpCreateEditGroup, {CreateEditGroupProps} from "./popUpCreateEditGroup";
import ButtonCreate, {ButtonCreateProps} from "../../Mobile/Misc/buttonCreate";
import InformationBanner from "../Misc/informationBanner";
import GroupProductsDesktop from "./groupProducts";

const idPortal: string = GlobalId.globalIds.idPortal
const title: string = "Grupos"
const createGroup: string = "Crear Grupo"


export default function AllGroupsProducts() {
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

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {title}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>
            <InformationBanner width={`max-content`}>
                <div>
                    Puedes cambiar el orden de los grupos, haciendo click en el numero que se encuentra al lado del
                    nombre del grupo
                </div>
            </InformationBanner>

            <div className={style.gridProducts}>
                {
                    groupContext.Groups.map((item) =>
                        <GroupProductsDesktop key={item.Id} item={item}/>
                    )
                }
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <PopUpCreateEditGroup item={popUpCreate}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}