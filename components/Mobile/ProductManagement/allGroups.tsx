import style from "/styles/Mobile/ProductManagement/allGroupProducts.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import {useContext} from "react";
import {GroupsPGContext, ProviderPGGroups,} from "../../Providers/UserAccount/ProductAndGroupProvider";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import {CreateEditGroupProps} from "../../Desktop/ProductManagement/popUpCreateEditGroup";
import PopUpCreateEditGroupMobile from "./popUpCreateEditGroup";
import GroupProductsMobile from "./groupProducts";

const idPortal: string = GlobalId.globalIds.idPortal
const title: string = "Grupos"
const createGroup: string = "Crear Grupo"


export default function AllGroupsProductsMobile() {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()

    const popUpCreate: CreateEditGroupProps = {
        ClosePopUp: handlePopUp,
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {title}
                </div>
                <button onClick={handlePopUp} className={style.buttonCreateProduct}>
                    {createGroup}
                    <div className={style.sizeAddIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                    </div>
                </button>
            </div>

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