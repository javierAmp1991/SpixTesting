import style from "/styles/Mobile/ProductManagement/groupProducts.module.css"
import {GroupProducts} from "../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {useContext, useState} from "react";
import {GroupsPGContext, ProviderPGGroups,} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {createPortal} from "react-dom";
import {CreateEditGroupProps} from "../../Desktop/ProductManagement/popUpCreateEditGroup";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductsGridMobile from "./productsGrid";
import PopUpCreateEditGroupMobile from "./popUpCreateEditGroup";
import AlertModalMobile from "../Misc/alertModal";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";

const idPortal: string = GlobalId.globalIds.idPortal

export default function GroupProductsMobile({item}: { item: GroupProducts }) {
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)
    const hookEditGroup = useDisplayPopUpHook(false)
    const hookConfirmDeleteGroup = useDisplayPopUpHook(false)
    const handlePopUpEditGroup = () => hookEditGroup.HandleToggle()
    const handlePopUpConfirm = () => hookConfirmDeleteGroup.HandleToggle()
    let [newId, setNewId] = useState(item.Id)
    const handleNewId = (e) => setNewId(e.target.value)

    const handleChangePosition = () => {
        if (parseInt(newId) > 0 && parseInt(newId) <= 4) {
            myGroups.HandleDropItemMobile(item.Name, parseInt(newId))
            handlePopUpNewPosition()
        }
    }

    const popUpNewPosition = useDisplayPopUpHook(false)
    const handlePopUpNewPosition = () => popUpNewPosition.HandleToggle()

    const handleDeleteGroup = () => {
        myGroups.HandleDeleteGroup(item.Name)
        handlePopUpConfirm()
    }
    const editGroupProp: CreateEditGroupProps = {
        ClosePopUp: handlePopUpEditGroup,
        NameGroup: item.Name,
        ProductsGroup: item.Products
    }

    const inputNewId: CustomInputProps = {
        Value: newId,
        NameInput: `Nueva posicion (minimo 0 / maximo ${myGroups.Groups.length})`,
        PlaceholderInput: `Ingrese la nueva posicion`,
        TypeInput: TypeInput.Input,
        TypeTextInput: `number`,
        Onchange: handleNewId,
    }
    const buttonProps: ButtonProps = {
        Text: "Aplicar",
        OnClick: handleChangePosition
    }

    return (
        <div className={style.contDrag}>
            <div className={style.gridTitle}>
                <div className={style.titleGroup}>
                    <div onClick={handlePopUpNewPosition} className={style.position}>{item.Id}</div>
                    <span>{item.Name}</span>
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
                popUpNewPosition.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpNewPosition} isButtonVisible={true} isBackground={true}>
                        <div className={style.mainDivNewPosition}>
                            <CustomInput item={inputNewId}/>
                            <ButtonCustom item={buttonProps}/>
                        </div>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
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