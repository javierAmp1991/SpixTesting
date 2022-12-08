import style from "/styles/Desktop/ServiceManagement/allServices.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import {createPortal} from "react-dom";
import ProductModal, {ProductModalProps} from "../Misc/ProductModal";
import PopUpCreateEditProduct from "../ProductManagement/popUpCreateEditProduct";
import ServiceView from "../Site/TypeSites/Business/Beauty&Health/serviceView";
import {MyServicesContext, ProviderMyServices} from "../../Providers/UserAccount/MyServicesProvider";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import ButtonCreate, {ButtonCreateProps} from "../../Mobile/Misc/buttonCreate";

const productsTitle: string = "Servicios"
const createService: string = "Crear servicio"
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const idPortal: string = GlobalId.globalIds.idPortal

export default function AllServices() {
    const myServices: ProviderMyServices = useContext(MyServicesContext)
    let [input, setInput] = useState(stringEmpty)
    const handleInput = (e) => setInput(e.target.value)
    const inputSearch: CustomInputProps = {
        Value: input,
        PlaceholderInput: "Buscar por nombre o SKU del servicio",
        TypeInput: TypeInput.Input,
        Onchange: handleInput,
        BorderRadious: `true`
    }
    const popUpHook = useDisplayPopUpHook(false)
    const popUpHookEdit = useDisplayPopUpHook(false)
    const popUpHookSee = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const handlePopUpEdit = () => popUpHookEdit.HandleToggle()
    const handlePopUpSee = () => popUpHookSee.HandleToggle()
    let [productEdit, setProductEdit] = useState(null)
    let [productSee, setProductSee] = useState(null)

    const handleProductSee = (product) => {
        setProductSee(product)
        handlePopUpSee()
    }
    const handleDeleteProduct = (id) => myServices.HandleDeleteService(id)
    const handleCreateProduct = (product: ProductItem) => myServices.HandleAddService(product)
    const handleEditProduct = (product: ProductItem) => myServices.HandleEditService(product)

    const handleEdit = (product) => {
        setProductEdit(product)
        handlePopUpEdit()
    }

    const productProps: ProductModalProps = {
        CloseModal: handleProductSee,
        IsQualifying: false,
        IsButtonVisible: false,
        IsScalable: false
    }
    const buttonProps: ButtonCreateProps = {
        Text: "Crear Servicio",
        OnCLick: handlePopUp
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {productsTitle}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>

            <div className={style.gridSearchProducts}>
                <div className={style.contInput}>
                    <CustomInput item={inputSearch}/>
                </div>

                <div className={style.gridProducts}>
                    {
                        myServices.ListServices.map((item) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <div key={item.Name} className={style.mainDivCont}>
                                <button onClick={() => handleDeleteProduct(item.Id)} className={style.sizeIconTrash}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                                </button>

                                <button onClick={() => handleProductSee(item)} className={style.sizeIconVisibility}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.visibilityICon} alt={""}/>
                                </button>
                                <div onClick={() => handleEdit(item)}>
                                    <ServiceView displayFull={null} item={item}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct closePopUp={handlePopUp} handleChange={handleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct item={productEdit} closePopUp={handlePopUpEdit}
                                                handleChange={handleEditProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookSee.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpSee} isBackground={true} isButtonVisible={true}>
                        <ProductModal item={productSee} productProps={productProps}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}