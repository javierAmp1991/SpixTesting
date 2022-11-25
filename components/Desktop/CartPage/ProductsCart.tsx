import style from "/styles/Desktop/CartPage/productsCart.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useEffect, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import ProductRow from "./productRow";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import PopUpContainerLogo from "../Misc/popUpContainerLogo";

const title: string = "Mi carrito"
const addInv: string = "Agregar invitados"
const productsText: string = " Productos"
const listSections: string[] = ["Producto", "Cantidad", "Invitados", "Precio total"]
const subTotalText: string = "Subtotal: "
const controlGuest: number = 2
const nameTextPopUp: string = "Ingrese el nombre del invitado/a"
const placeholderNameTextPopUp: string = "Nombre"
const emailTextPopUp: string = "Ingrese el email del invitado/a"
const placeholderEmailTextPopUp: string = "Correo"
const addGuestPopUp: string = "Agregar Invitado"
const titlePopUp: string = "Datos del invitado"
const noProductsCart: string = "No hay productos en tu carrito"
const stringEmpty: string = ""

export default function ProductsCart() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
    const isEmpty: boolean = cartProvider.Products.length == 0
    const popUpGuestHook = useDisplayPopUpHook(false)
    const handlePopUpGuest = () => popUpGuestHook.HandleToggle()
    let [nameGuest, setNameGuest] = useState(stringEmpty)
    let [emailGuest, setEmailGuest] = useState(stringEmpty)
    let [stateAddGuest, setStateAddGuest] = useState(false)
    const handleAddGuest = () => {
        let crypto = require("crypto");
        let id = crypto.randomBytes(20).toString('hex');
        cartProvider.HandleGuest({
            Id: id,
            Name: nameGuest
        }, true)
        setNameGuest(stringEmpty)
        setEmailGuest(stringEmpty)
        handlePopUpGuest()
    }
    const handleSort = (num: number) => {
        if (num == 0) cartProvider.SortByName(true)
        else if (num == 1) cartProvider.SortByAMount(true)
        else if (num == 2) cartProvider.SortByBelongTo(true)
        else cartProvider.SortByPrice(true)
    }
    const handleName = (e) => {
        setNameGuest(e.target.value)
    }
    const handleEmail = (e) => {
        setEmailGuest(e.target.value)
    }

    useEffect(() => {
        setStateAddGuest((nameGuest != stringEmpty && emailGuest != stringEmpty))
    }, [nameGuest, emailGuest])

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleAdd}>
                <div className={style.gridTitle}>
                    <div className={style.title}>{title}</div>
                    {
                        !isEmpty &&
                        <div className={style.amountProduct}>({cartProvider.Products.length}{productsText})</div>
                    }
                </div>
                {
                    !isEmpty &&
                    <button onClick={handlePopUpGuest} type={"button"} className={style.gridAddIcon}>
                        {addInv}
                        <div className={style.sizeAddImage}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt={""}/>
                        </div>
                    </button>
                }
            </div>

            {
                !isEmpty &&
                <div className={`${isGuest ? style.gridSectionGuest : style.gridSection} ${style.lineUnder}`}>
                    {
                        listSections.map((item, index) =>
                            index == controlGuest ?
                                isGuest &&
                                <button onClick={() => handleSort(index)}
                                        className={`${style.columnText} ${style.textCenter}`} key={item}>
                                    {item}
                                    <div className={style.sizeBottomArrow}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                    </div>
                                </button>
                                :
                                <button onClick={() => handleSort(index)} className={`${style.columnText}
                                 ${index == 0 ? style.textLeft : style.textCenter}`} key={item}>
                                    {item}
                                    <div className={style.sizeBottomArrow}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                    </div>
                                </button>
                        )
                    }
                </div>
            }

            {
                isEmpty ?
                    <div className={style.noProducts}>
                        {noProductsCart}
                    </div>
                    :
                    <div className={style.gridProducts}>
                        {cartProvider.Products.map(item => <ProductRow key={item.Id} item={item}/>)}
                    </div>
            }

            {
                !isEmpty &&
                <div className={style.totalText}>
                    {subTotalText}${getMoneyValue(cartProvider.Subtotal)}
                </div>
            }

            {
                popUpGuestHook.State &&
                <PopUpContainerLogo closePopUp={handlePopUpGuest} isBackground={true} isButtonVisible={true}>
                    <div className={style.mainDivPopUp}>
                        <div className={style.titlePopUp}>
                            {titlePopUp}
                        </div>
                        <div>
                            <div className={style.upInput}>
                                {nameTextPopUp}
                            </div>
                            <input className={style.styleInput} onChange={handleName}
                                   placeholder={placeholderNameTextPopUp} type={"text"}/>
                        </div>
                        <div>
                            <div className={style.upInput}>
                                {emailTextPopUp}
                            </div>
                            <input className={style.styleInput} onChange={handleEmail}
                                   placeholder={placeholderEmailTextPopUp} type={"email"}/>
                        </div>
                        <div>
                            *informacion descriptiva Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium consequatur facere, in laboriosam necessitatibus nisi odio
                            perspiciatis quasi similique vitae.
                        </div>
                        <button onClick={handleAddGuest} type={"button"}
                                className={`${style.buttonPopUp} ${stateAddGuest ? style.blue : style.gray}`}>
                            {addGuestPopUp}
                        </button>
                    </div>
                </PopUpContainerLogo>
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}