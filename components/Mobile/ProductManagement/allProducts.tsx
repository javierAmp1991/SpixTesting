import style from "/styles/Mobile/ProductManagement/allProducts.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {ProductsPGContext, ProviderPGProducts} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {createPortal} from "react-dom";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import {ProductModalProps} from "../../Desktop/Misc/ProductModal";
import ProductViewHor from "../../Desktop/Misc/ProductViewHor";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductModalMobile from "../Misc/ProductModal";
import PopUpCreateEditProductMobile from "./popUpCreateEditProduct";

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

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    {productsTitle}
                </div>
                <button onClick={handlePopUp} className={style.buttonCreateProduct}>
                    <div>Crear Producto</div>
                    <div className={style.sizeAddIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                    </div>
                </button>
            </div>

            <div className={style.gridSearchProducts}>
                <CustomInput item={inputSearch}/>

                <div className={style.gridProducts}>
                    {
                        myProducts.Products.map((item) =>
                            (item.Name.includes(input) || item.SKU.toString().includes(input)) &&
                            <div key={item.Name} className={style.mainDivCont}>
                                <button onClick={() => myProducts.HandleDeleteProduct(item.Id)}
                                        className={style.sizeIconTrash}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                                </button>

                                <button onClick={() => handleProductSee(item)} className={style.sizeIconVisibility}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.visibilityICon} alt={""}/>
                                </button>
                                <div onClick={() => handleEdit(item)}>
                                    <ProductViewHor item={item} displayFullProduct={false}/>
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
                        <PopUpCreateEditProductMobile closePopUp={handlePopUp} handleChange={myProducts.HandleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProductMobile item={productEdit} closePopUp={handlePopUpEdit}
                                                handleChange={myProducts.HandleCreateProduct}/>
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