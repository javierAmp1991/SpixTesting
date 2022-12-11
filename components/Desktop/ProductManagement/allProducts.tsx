import style from "/styles/Desktop/ProductManagement/allProducts.module.css"
import {GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import {ProductsPGContext, ProviderPGProducts} from "../../Providers/UserAccount/ProductAndGroupProvider";
import PopUpCreateEditProduct from "./popUpCreateEditProduct";
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import {createPortal} from "react-dom";
import ButtonCreate, {ButtonCreateProps} from "../../Mobile/Misc/buttonCreate";
import InformationBanner from "../Misc/informationBanner";
import ProductViewUserAccount from "./ProductViewUserAccount";

const productsTitle: string = "Productos"
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const idPortal: string = GlobalId.globalIds.idPortal

export default function AllProducts() {
    const myProducts: ProviderPGProducts = useContext(ProductsPGContext)
    let [input, setInput] = useState(stringEmpty)
    const handleInput = (e) => setInput(e.target.value)
    const inputSearch: CustomInputProps = {
        Value: input,
        PlaceholderInput: "Buscar por nombre o SKU del producto",
        TypeInput: TypeInput.Input,
        Onchange: handleInput,
        BorderRadious: `true`
    }
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()
    const buttonProps: ButtonCreateProps = {
        Text: "Crear Producto",
        OnCLick: handlePopUp
    }
    const handleDeleteProduct = (id: string) => myProducts.HandleDeleteProduct(id)

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {productsTitle}
                </div>
                <ButtonCreate item={buttonProps}/>
            </div>

            <InformationBanner width={`33%`}>
                <div>
                    Haz click en las tarjetas para editar los producto
                </div>
            </InformationBanner>

            <div className={style.gridSearchProducts}>
                <div className={style.contInput}>
                    <CustomInput item={inputSearch}/>
                </div>

                <div className={style.gridProducts}>
                    {
                        myProducts.Products.map((item) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <ProductViewUserAccount deleteProduct={handleDeleteProduct} item={item}/>
                        )
                    }
                </div>
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct closePopUp={handlePopUp} handleChange={myProducts.HandleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}