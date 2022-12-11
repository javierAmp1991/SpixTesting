import style from "/styles/Mobile/ProductManagement/allProducts.module.css"
import {GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {ProductsPGContext, ProviderPGProducts} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {createPortal} from "react-dom";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import PopUpCreateEditProductMobile from "./popUpCreateEditProduct";
import ButtonCreate, {ButtonCreateProps} from "../Misc/buttonCreate";
import InformationBanner from "../../Desktop/Misc/informationBanner";
import ProductViewHorUserAccountMobile from "./ProductViewHorUserAccount";

const productsTitle: string = "Productos"
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const idPortal: string = GlobalId.globalIds.idPortal

export default function AllProductsMobile() {
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

            <InformationBanner>
                <div>
                    Haz click en las tarjetas para editar los producto
                </div>
            </InformationBanner>

            <div className={style.gridSearchProducts}>
                <CustomInput item={inputSearch}/>

                <div className={style.gridProducts}>
                    {
                        myProducts.Products.map((item) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <div key={item.Name} className={style.mainDivCont}>
                                <ProductViewHorUserAccountMobile deleteProduct={handleDeleteProduct} item={item}/>
                            </div>
                        )
                    }
                </div>
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProductMobile closePopUp={handlePopUp}
                                                      handleChange={myProducts.HandleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}