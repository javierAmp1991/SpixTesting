import {useDrag} from "react-dnd";
import style from "/styles/Mobile/ProductManagement/groupProducts.module.css"
import {GroupProducts} from "../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {useContext} from "react";
import {GroupsPGContext, ProviderPGGroups,} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {createPortal} from "react-dom";
import {CreateEditGroupProps} from "../../Desktop/ProductManagement/popUpCreateEditGroup";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductsGridMobile from "./productsGrid";
import PopUpCreateEditGroupMobile from "./popUpCreateEditGroup";
import AlertModalMobile from "../Misc/alertModal";

const idPortal: string = GlobalId.globalIds.idPortal

export default function GroupProductsMobile({item}: { item: GroupProducts }) {
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)
    const [{isDragging}, drag] = useDrag(() => ({
        type: "groupProducts",
        item: {Number: item.Number, Name: item.Name},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

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
        <div className={style.contDrag} ref={drag}>
            <div className={style.gridTitle}>
                <div className={style.titleGroup}>
                    <span className={style.circleNumber}>{item.Id}</span> {item.Name}
                </div>
                <button onClick={handlePopUpEditGroup} className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.editProfileGray} alt={""}/>
                </button>
                <button onClick={handlePopUpConfirm} className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                </button>
            </div>

            <div className={style.mainDivCont}>
                <ProductsGridMobile item={item.Products} nameGroup={item.Name}/>
            </div>
            {
                hookConfirmDeleteGroup.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpConfirm} isBackground={true} isButtonVisible={true}>
                        <AlertModalMobile confirmAction={handleDeleteGroup}>
                            <div className={style.confirm}>
                                ¿Esta seguro que desea eliminar el grupo <b>{item.Name}</b> de su lista?
                            </div>
                        </AlertModalMobile>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }

            {
                hookEditGroup.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEditGroup} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditGroupMobile item={editGroupProp}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}