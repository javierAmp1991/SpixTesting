import style from "/styles/Mobile/ServiceManagement/allServices.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import ProductModal, {ProductModalProps} from "../Misc/ProductModal";
import PopUpCreateEditProduct from "../ProductManagement/popUpCreateEditProduct";
import {MyServicesContext, ProviderMyServices} from "../../Providers/UserAccount/MyServicesProvider";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ServiceViewMobile from "../Misc/serviceViewMobile";
import ButtonCreate, {ButtonCreateProps} from "../Misc/buttonCreate";
import PopUpCreateEditProductMobile from "../ProductManagement/popUpCreateEditProduct";
import ProductModalMobile from "../Misc/ProductModal";
import InformationBanner from "../../Desktop/Misc/informationBanner";
import MessageReorder, {MessageReorderProps} from "../../Desktop/Misc/messageReorder";

const productsTitle: string = "Servicios"
const createService: string = "Crear servicio"
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const idPortal: string = GlobalId.globalIds.idPortal

export default function AllServicesMobile() {
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

    const reorder: MessageReorderProps = {
        TextBefore: "Puedes cambiar el orden de los servicios, presionando el numero",
        TextAfter: "en la esquina superior drecha"
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {productsTitle}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>

            <InformationBanner>
                <MessageReorder item={reorder}/>
            </InformationBanner>

            <div className={style.gridSearchProducts}>
                <CustomInput item={inputSearch}/>

                <div className={style.gridProducts}>
                    {
                        myServices.ListServices.map((item) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <div key={item.Name} className={style.mainDivCont}>
                                <button onClick={() => handleDeleteProduct(item.Id)} className={style.sizeIconTrash}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                                </button>

                                <button onClick={() => handleProductSee(item)} className={style.seeReview}>
                                    ver Reseñas
                                </button>

                               {/* <button onClick={() => handleProductSee(item)} className={style.sizeIconVisibility}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.visibilityICon} alt={""}/>
                                </button>*/}
                                <div onClick={() => handleEdit(item)}>
                                    <ServiceViewMobile displayFull={false} isBorder={false} item={item}/>
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
                        <PopUpCreateEditProductMobile closePopUp={handlePopUp} handleChange={handleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProductMobile item={productEdit} closePopUp={handlePopUpEdit}
                                                handleChange={handleEditProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookSee.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpSee} isBackground={true} isButtonVisible={true}>
                        <ProductModalMobile item={productSee} productProps={productProps}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}