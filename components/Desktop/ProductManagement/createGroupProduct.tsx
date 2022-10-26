import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/ProductManagement/createGroup.module.css"
import {useEffect, useRef, useState} from "react";
import LayoutUserAccount from "../UserAccount/layoutUserAccount.";
import {LayoutUserAccountProp} from "../../../Class/UserAccount/userAccount";
import {Product} from "../../../dataDemo/data";
import ProductViewSquare from "../Misc/productViewSquare";
import SearchBarNew from "../Misc/searchBarNew";
import {SearchBarProps} from "../../../Class/Misc/GlobalClass";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";

const titleSection: string = "Crear grupo"
const subtitleSection: string = "Crea un grupo productos"
const nameText: string = "Nombre"
const addProductText: string = "Agregar Productos"
const namePlaceHolder: string = "Ingrese el nombre del grupo"
const confirmTextPopUp: string = "Confirmar"
const layoutProp: LayoutUserAccountProp = {
    Title: titleSection,
    SubTitle: subtitleSection
}
const confirmButton: string = "Confirmar"
const emptyString: string = ""

const listProductsTest: Product[] = [
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack"
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product6.jpg",
        Tag: "Energetica"
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Tag: "Bebida"
    },
    {
        Name: "Producto 6.6",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Tag: "Energeticas"
    },
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Tag: "Cerveza"
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Tag: "Energetica"
    },
]

const listProductSug: Product[] = [
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack"
    },
]


enum TypeOrder {
    NoSelected,
    Selected
}

class ProductWithState {
    Product: Product
    State: boolean
    OrderBy: TypeOrder
}

const listProductState: ProductWithState[] = getProductWithState(listProductsTest)
const listProductSugState: ProductWithState[] = getProductWithState(listProductSug)

const listProductSelectedSug: Product[] = [
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Tag: "Snack"
    },
]

function getProductWithState(list: Product[]): ProductWithState[] {
    let newListProducts: ProductWithState[] = []
    list.forEach(item => {
        let newProduct: ProductWithState = {
            Product: item, State: false, OrderBy: TypeOrder.NoSelected
        }
        newListProducts = [...newListProducts, newProduct]
    })
    return newListProducts
}

export default function CreateGroupProduct() {
    const nameRef = useRef(null)

    let [allProducts, setAllProducts] = useState(listProductState)
    let [productSuggestion, setProductSuggestion] = useState([])
    let [valueInputPopUp, setValueInputPopUp] = useState(emptyString)
    let [listSuggestionPopUp, setListSuggestionPopUp] = useState([])

    const handleClickProductPopUp = (product: ProductWithState) => {
        let newList: ProductWithState[] = allProducts.map((item) => {
            if (item == product) return {
                ...item,
                State: !item.State,
                OrderBy: item.OrderBy == TypeOrder.Selected ? TypeOrder.NoSelected : TypeOrder.Selected
            }
            else return {...item}
        })
        let newListSort: ProductWithState[] = newList.sort((a, b) => {
            if (a.OrderBy < b.OrderBy) return 1
            else if (a.OrderBy > b.OrderBy) return -1
            else return 0
        })
        setAllProducts(allProducts = newListSort)
    }
    const handleClickSearchPopUp = () => {
        if (valueInputPopUp.length >= 3) setProductSuggestion(productSuggestion = listProductSugState)
    }
    const handleConfirmPopUp = () => {
        let newList: Product[] = []
        allProducts.forEach((item: ProductWithState) => {
            if (item.State) newList = [...newList, item.Product]
        })
        setProductsSelected(productsSelected = newList)
        handlePopUp()
    }
    const handleClosePopUp = () => {
        setListSuggestionPopUp(listSuggestionPopUp = [])
        setValueInputPopUp(valueInputPopUp = emptyString)
        handlePopUp()
    }
    const handleCleanSuggestions = () => {
        setValueInputPopUp(valueInputPopUp = emptyString)
        setListSuggestionPopUp(listSuggestionPopUp = [])
        setProductSuggestion(productSuggestion = [])
    }
    const handleInputValuePopUp = (e: string) => setValueInputPopUp(valueInputPopUp = e)
    useEffect(() => {
        if (valueInputPopUp.length >= 3) setListSuggestionPopUp(listSuggestionPopUp = ["Sug1", "Sug2", "Sug3"])
    }, [valueInputPopUp])
    const searchBarPropsPopUp: SearchBarProps = {
        Value: valueInputPopUp,
        Placeholder: "Buscar producto",
        OnChangeInput: handleInputValuePopUp,
        OnClick: handleClickSearchPopUp,
        Suggestions: listSuggestionPopUp,
        CleanSuggestions: handleCleanSuggestions
    }


    let [productsSelected, setProductsSelected] = useState([])
    let [productSelectedSug, setProductSelectedSug] = useState([])
    let [valueInput, setValueInput] = useState(emptyString)
    let [listSelectedSuggestion, setListSelectedSuggestion] = useState([])
    const handleDeleteProductSelected = (name: string) => {
        setProductsSelected(productsSelected = productsSelected.filter((item: Product) => item.Name != name))
        let newlist = allProducts.map((item) => {
            if (item.Product.Name == name) return {...item, State: false, OrderBy: TypeOrder.NoSelected}
            else return {...item}
        })
        setAllProducts(allProducts = newlist)
    }
    const handleClickSearch = () => {
        if (valueInput.length >= 3) setProductSelectedSug(productSelectedSug = listProductSelectedSug)
    }
    const handleCleanSuggestion = () => {
        setValueInput(valueInputPopUp = emptyString)
        setListSelectedSuggestion(listSelectedSuggestion = [])
        setProductSelectedSug(productSelectedSug = [])
    }
    const handleInputValue = (e: string) => setValueInput(valueInput = e)
    useEffect(() => {
        if (valueInput.length >= 3) setListSelectedSuggestion(listSelectedSuggestion = ["Sug4", "Sug5", "Sug6"])
    }, [valueInput])
    const searchBarProps: SearchBarProps = {
        Value: valueInput,
        Placeholder: "Buscar producto",
        OnChangeInput: handleInputValue,
        OnClick: handleClickSearch,
        Suggestions: listSelectedSuggestion,
        CleanSuggestions: handleCleanSuggestion
    }

    let [displayPopUp, setDisplayPopUp] = useState(false)
    const handlePopUp = () => setDisplayPopUp(!displayPopUp)


    return (
        <LayoutUserAccount layoutProp={layoutProp}>
            <div className={style.mainDiv}>
                <div className={style.grid}>
                    <div className={style.upInput}>
                        {nameText}
                    </div>
                    <input ref={nameRef} placeholder={namePlaceHolder} className={style.inputStyle} type={"text"}/>
                </div>

                <div className={style.mainDivCreate}>
                    <div className={style.contHeader}>
                        <div className={style.gridAdd}>
                            <div className={style.upInputAdd}>
                                {addProductText}
                            </div>
                            <button onClick={handlePopUp} className={style.sizeIconAdd}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.addIconBlue} alt={""}/>
                            </button>
                        </div>
                        <SearchBarNew item={searchBarProps}/>
                    </div>

                    {
                        productsSelected.length > 0 &&
                        <div className={style.gridProductSelected}>
                            {
                                productsSelected.map((item: Product) =>
                                    getBoolProduct(item) &&
                                    <div key={item.Name}
                                         className={style.containerProduct}>
                                        <div onClick={() => handleDeleteProductSelected(item.Name)}
                                             className={style.sizeTrashIcon}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                                        </div>
                                        <ProductViewSquare key={item.Name} item={item} size={null}
                                                           isDisplayOffer={true}/>
                                    </div>
                                )
                            }
                        </div>
                    }
                    {
                        productsSelected.length > 0 &&
                        <button className={style.buttonConfirm}>
                            {confirmButton}
                        </button>
                    }
                </div>

                {
                    displayPopUp &&
                    <PopUpContainerLogo closePopUp={handleClosePopUp} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            <SearchBarNew item={searchBarPropsPopUp}/>
                            <div className={style.contPopUpProducts}>
                                <div className={style.gridPopUpProducts}>
                                    {
                                        allProducts.map((item: ProductWithState) =>
                                            getBool(item) &&
                                            <div onClick={() => handleClickProductPopUp(item)} key={item.Product.Name}
                                                 className={style.containerProduct}>
                                                {
                                                    item.State &&
                                                    <div className={style.sizeCheckIcon}>
                                                        <Image layout={"fill"}
                                                               src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                                    </div>
                                                }
                                                <ProductViewSquare item={item.Product} size={null}
                                                                   isDisplayOffer={true}/>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <button onClick={handleConfirmPopUp} className={style.buttonConfirm}>
                                {confirmTextPopUp}
                            </button>
                        </div>
                    </PopUpContainerLogo>
                }
            </div>
        </LayoutUserAccount>
    )

    function getBoolProduct(item1: Product): boolean {
        if (productSelectedSug.length == 0) return true
        let newValue: boolean = productSelectedSug.some((item: Product) => {
                if (item.Name == item1.Name) return true;
                else return false;
            }
        )
        return newValue;
    }

    function getBool(item1: ProductWithState): boolean {
        if (productSuggestion.length == 0) return true
        let newValue: boolean = productSuggestion.some((item: ProductWithState) => {
                if (item.Product.Name == item1.Product.Name) return true;
                else return false;
            }
        )
        return newValue;
    }
}