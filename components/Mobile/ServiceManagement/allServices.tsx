import style from "/styles/Mobile/ServiceManagement/allServices.module.css"
import {GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {MyServicesContext, ProviderMyServices} from "../../Providers/UserAccount/MyServicesProvider";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ButtonCreate, {ButtonCreateProps} from "../Misc/buttonCreate";
import PopUpCreateEditProductMobile from "../ProductManagement/popUpCreateEditProduct";
import InformationBanner from "../../Desktop/Misc/informationBanner";
import ServiceViewUserAccountMobile from "./serviceView";

const productsTitle: string = "Servicios"
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const idPortal: string = GlobalId.globalIds.idPortal
const textInfo: string = "Puedes cambiar el order de tus servicios presionando el numero que se encuentra en la esquina superior derecha"

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
    const handlePopUp = () => popUpHook.HandleToggle()

    const handleCreateProduct = (product: ProductItem) => myServices.HandleAddService(product)

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

            <InformationBanner>
                <div>
                    {textInfo}
                </div>
            </InformationBanner>

            <div className={style.gridSearchProducts}>
                <CustomInput item={inputSearch}/>
                <div className={style.gridProducts}>
                    {
                        myServices.ListServices.map((item, index) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <ServiceViewUserAccountMobile index={index} item={item}/>
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
        </div>
    )
}