import style from "/styles/Desktop/ProductManagement/allGroupProducts.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId, GlobalStings} from "../../../public/globalConst";
import {useContext, useState} from "react";
import ContGroupProducts from "./contGroupProducts";
import {
    GroupsPGContext,
    ProductsPGContext, ProviderPGGroups,
    ProviderPGProducts
} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {GroupProductsItem} from "../../../Class/UserAccount/userAccount";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import NewProductViewSquare from "../Misc/newProductViewSquare";
import utilities from "/styles/utilities.module.css";
import ProductSquare, {ProductSquareProps} from "../Misc/ProductSquare";

const idPortal: string = GlobalId.globalIds.idPortal
const stringEmpty: string = GlobalStings.globalStrings.stringEmpty

class ProductState {
    Product: ProductItem
    State: boolean
}

export default function AllGroupsProducts() {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const myProducts: ProviderPGProducts = useContext(ProductsPGContext)
    let [productsPopUp, setProductsPopUp] = useState(createProductState())
    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => popUpHook.HandleToggle()

    const handleSelectItem = (id: string, newState: boolean) => {
        let newList = productsPopUp.map(item => {
            if (item.Product.Id == id) return {...item, State: newState}
            else return {...item}
        })
        setProductsPopUp(newList)
    }

    let [inputGroup, setInputGroup] = useState("")
    const handleInputGroup = (e) => setInputGroup(e.target.value)

    let [input, setInput] = useState("")
    const handleInput = (e) => setInput(e.target.value)

    const inputNameGroup: CustomInputProps = {
        Value: inputGroup,
        NameInput: "Nombre",
        PlaceholderInput: "Ingrese el nombre del grupo",
        TypeInput: TypeInput.Input,
        Onchange: handleInputGroup,
        IsObligatory: `true`
    }
    const inputSearch: CustomInputProps = {
        Value: input,
        NameInput: "Agregar Productos",
        PlaceholderInput: "Buscar por nombre o SKU del producto",
        TypeInput: TypeInput.Input,
        Onchange: handleInput,
        BorderRadious: `true`
    }

    const handleCreateGroup = () => {
        let newListProducts: string[] = []
        productsPopUp.forEach(item => {
            if (item.State) newListProducts = [...newListProducts, item.Product.Id]
        })
        let newGroup: GroupProductsItem = {
            Name: inputGroup,
            Products: newListProducts
        }
        groupContext.HandleCreateGroup(newGroup)
        setInputGroup(stringEmpty)
        setInput(stringEmpty)
        setProductsPopUp(createProductState())
        handlePopUp()
    }

    const propsProducts: ProductSquareProps = {
        Size: null,
        DisplayStars: false,
        HasBorder: false,
        DisplayFullProduct: false

    }


    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleButton}>
                <div className={style.title}>
                    Grupos
                </div>
                <button onClick={handlePopUp} className={style.buttonCreateProduct}>
                    <div>Crear Grupo</div>
                    <div className={style.sizeAddIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                    </div>
                </button>
            </div>
            <div className={style.gridProducts}>
                {
                    groupContext.Groups.map((item) =>
                        <ContGroupProducts key={item.Id} item={item}/>
                    )
                }
            </div>

            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.gridPopUp}>
                                <div className={style.titlePopUp}>
                                    Crear Grupo
                                </div>

                                <CustomInput item={inputNameGroup}/>

                                <CustomInput item={inputSearch}/>

                                <div className={style.contScroll}>
                                    <div className={style.gridProductSelection}>
                                        {
                                            productsPopUp.length == 0 ?
                                                <div>
                                                    No se han encontrado productos
                                                </div>
                                                :
                                                <>
                                                    {
                                                        productsPopUp.map((item, index) =>
                                                            (item.Product.Name.includes(input) || item.Product.SKU.toString().includes(input)) &&
                                                            <div
                                                                onClick={() => handleSelectItem(item.Product.Id, !item.State)}
                                                                key={item.Product.Id} className={style.contProduct}>
                                                                <ProductSquare item={item.Product} props={propsProducts} />
                                                                {
                                                                    item.State &&
                                                                    <div className={style.checkIcon}>
                                                                        <Image layout={"fill"}
                                                                               src={GlobalConst.sourceImages.checkIcon}/>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </>
                                        }
                                    </div>
                                </div>

                                <div className={utilities.fontPrimaryText}>
                                    {getTotalProductSelected()} productos seleccionados
                                </div>

                                <button onClick={handleCreateGroup} className={style.button}>
                                    Crear
                                </button>
                            </div>
                        </div>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function createProductState(): ProductState[] {
        let newList: ProductState[] = []
        myProducts.Products.forEach(item => {
            let newItem: ProductState = {
                Product: item,
                State: false
            }
            newList = [...newList, newItem]
        })
        return newList
    }

    function getTotalProductSelected() {
        let control: number = 0
        productsPopUp.forEach(item => {
            if (item.State) control += 1
        })
        return control
    }
}