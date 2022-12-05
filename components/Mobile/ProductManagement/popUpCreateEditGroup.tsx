import style from "/styles/Mobile/ProductManagement/allGroupProducts.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst, GlobalStings} from "../../../public/globalConst";
import {GroupProductsItem} from "../../../Class/UserAccount/userAccount";
import {useContext, useState} from "react";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import {
    GroupsPGContext,
    ProductsPGContext,
    ProviderPGGroups,
    ProviderPGProducts
} from "../../Providers/UserAccount/ProductAndGroupProvider";
import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import ProductSquare, {ProductSquareProps} from "../../Desktop/Misc/ProductSquare";
import LayoutCarrouselMobile from "../Layouts/layoutCarrousel.Mobile";

export class ProductState {
    Product: ProductItem
    State: boolean
}

export class CreateEditGroupProps {
    ClosePopUp: Function
    NameGroup?: string
    ProductsGroup?: ProductItem[]
}

const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const titleCreate: string = " Crear Grupo"
const titleEdit: string = "Editar grupo"
const buttonCreate: string = "Crear grupo"
const buttonEdit: string = "Aplicar cambios"
const productsSelected: string = "Productos seleccionados"

export default function PopUpCreateEditGroupMobile({item}: { item: CreateEditGroupProps }) {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const myProducts: ProviderPGProducts = useContext(ProductsPGContext)

    let [products, setProducts] = useState(createProductState())
    let [inputGroup, setInputGroup] = useState(item.NameGroup == null ? stringEmpty : item.NameGroup)
    let [input, setInput] = useState(stringEmpty)

    const handleCreateGroup = (isCreate: boolean) => {
        let newListProducts: string[] = []
        products.forEach(item => {
            if (item.State) newListProducts = [...newListProducts, item.Product.Id]
        })
        let newGroup: GroupProductsItem = {
            Name: inputGroup,
            Products: newListProducts
        }
        isCreate ? groupContext.HandleCreateGroup(newGroup) : groupContext.HandleEditGroup(newGroup)
        setInputGroup(stringEmpty)
        setInput(stringEmpty)
        item.ClosePopUp()
    }
    const handleSelectItem = (id: string, newState: boolean) => {
        let newList = products.map(item => {
            if (item.Product.Id == id) return {...item, State: newState}
            else return {...item}
        })
        setProducts(newList)
    }
    const handleInputGroup = (e) => setInputGroup(e.target.value)
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
    const propsProducts: ProductSquareProps = {
        Size: 220,
        DisplayStars: false,
        HasBorder: false,
        DisplayFullProduct: false,
    }

    return (
        <div className={style.mainDivPopUp}>
            <div className={style.gridPopUp}>
                <div className={style.titlePopUp}>
                    {item.NameGroup == null ? titleCreate : titleEdit}
                </div>

                <CustomInput item={inputNameGroup}/>

                <CustomInput item={inputSearch}/>

                    <LayoutCarrouselMobile gapLayout={16}>
                    {
                        products.map((item) =>
                            (item.Product.Name.includes(input) || item.Product.SKU.toString().includes(input)) &&
                            <div onClick={() => handleSelectItem(item.Product.Id, !item.State)}
                                 key={item.Product.Id} className={style.contProduct}>
                                <ProductSquare item={item.Product} props={propsProducts}/>
                                {
                                    item.State &&
                                    <div className={style.checkIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                    </div>
                                }
                            </div>
                        )
                    }
                    </LayoutCarrouselMobile>


                <div className={utilities.fontPrimaryText}>
                    {getTotalProductSelected()} {productsSelected}
                </div>

                {
                    item.NameGroup == null ?
                        <button onClick={() => handleCreateGroup(true)} className={style.button}>
                            {buttonCreate}
                        </button>
                        :
                        <button onClick={() => handleCreateGroup(false)} className={style.button}>
                            {buttonEdit}
                        </button>
                }
            </div>
        </div>
    )

    function createProductState(): ProductState[] {
        let newList: ProductState[] = []
        myProducts.Products.forEach(item2 => {
            let newItem: ProductState = {
                Product: item2,
                State: item.ProductsGroup == null ? false : item.ProductsGroup.includes(item2)
            }
            newList = [...newList, newItem]
        })
        return newList
    }

    function getTotalProductSelected() {
        let control: number = 0
        products.forEach(item => {
            if (item.State) control += 1
        })
        return control
    }
}