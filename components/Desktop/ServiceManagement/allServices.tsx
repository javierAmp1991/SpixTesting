import style from "/styles/Desktop/ServiceManagement/allServices.module.css"
import {GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import {createPortal} from "react-dom";
import PopUpCreateEditProduct from "../ProductManagement/popUpCreateEditProduct";
import {MyServicesContext, ProviderMyServices} from "../../Providers/UserAccount/MyServicesProvider";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import ButtonCreate, {ButtonCreateProps} from "../../Mobile/Misc/buttonCreate";
import InformationBanner from "../Misc/informationBanner";
import ServiceViewUserAccount from "./serviceView";
import ContDropService from "./ContDropService";

const productsTitle: string = "Servicios"
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

            <InformationBanner width={`50%`}>
                <div>
                    Puedes cambiar el orden de tus servicios tomandolos y moviendolos a la posisicon que desees
                </div>
            </InformationBanner>

            <div className={style.gridSearchProducts}>
                <div className={style.contInput}>
                    <CustomInput item={inputSearch}/>
                </div>

                <div className={style.gridProducts}>
                    {
                        myServices.ListServices.map((item, index) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <ContDropService item={item} index={index}/>
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
        </div>
    )
}