import {useDrag} from "react-dnd";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import {GroupProducts} from "../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {useContext} from "react";
import {
    GroupsPGContext,
    ProviderPGGroups,
} from "../../Providers/UserAccount/ProductAndGroupProvider";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import {createPortal} from "react-dom";
import PopUpCreateEditGroup, {CreateEditGroupProps} from "./popUpCreateEditGroup";
import AlertModal from "../Misc/alertModal";
import ProductsGrid from "./productsGrid";

const idPortal: string = GlobalId.globalIds.idPortal

export default function GroupProductsDesktop({item}: { item: GroupProducts }) {
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)

    const hookEditGroup = useDisplayPopUpHook(false)
    const hookConfirmDeleteGroup = useDisplayPopUpHook(false)
    const handlePopUpEditGroup = () => hookEditGroup.HandleToggle()
    const handlePopUpConfirm = () => hookConfirmDeleteGroup.HandleToggle()

    const handleDeleteGroup = () => {
        myGroups.HandleDeleteGroup(item.Name)
        handlePopUpConfirm()
    }
    const editGroupProp: CreateEditGroupProps = {
        ClosePopUp: handlePopUpEditGroup,
        NameGroup: item.Name,
        ProductsGroup: item.Products
    }

    return (
        <div className={style.contDrag}>
            <div className={style.gridTitle}>
                <div className={style.titleGroup}>
                    {item.Name}
                </div>
                <button onClick={handlePopUpEditGroup} className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.editProfileGray} alt={""}/>
                </button>
                <button onClick={handlePopUpConfirm} className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                </button>
            </div>

            <div className={style.mainDivCont}>
                <ProductsGrid item={item.Products} nameGroup={item.Name}/>
            </div>
            {
                hookConfirmDeleteGroup.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpConfirm} isBackground={true} isButtonVisible={true}>
                        <AlertModal confirmAction={handleDeleteGroup}>
                            <div className={style.confirm}>
                                ¿Esta seguro que desea eliminar el grupo <b>{item.Name}</b> de su lista?
                            </div>
                        </AlertModal>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }

            {
                hookEditGroup.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEditGroup} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditGroup item={editGroupProp}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}