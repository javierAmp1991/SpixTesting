import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext, useEffect, useState} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import style from "/styles/Mobile/CartPage/productsCart.module.css";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import PopUpContainerLogoMobile from "../Misc/popUpContainerLogoMobile";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";

const addInv: string = "Agregar invitados"
const title: string = "Mi carrito"
const productsText: string = " Productos"
const stringEmpty: string = ""
const nameTextPopUp: string = "Ingrese el nombre del invitado/a"
const placeholderNameTextPopUp: string = "Nombre"
const emailTextPopUp: string = "Ingrese el email del invitado/a"
const placeholderEmailTextPopUp: string = "Correo"
const addGuestPopUp: string = "Agregar Invitado"
const titlePopUp: string = "Datos del invitado"
const idPortal: string = GlobalId.globalIds.idPortal

export default function HeaderCartPageMobile() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isEmpty: boolean = cartProvider.Products.length == 0
    const popUpGuestHook = useDisplayPopUpHook(false)
    const handlePopUpGuest = () => popUpGuestHook.HandleToggle()
    let [nameGuest, setNameGuest] = useState(stringEmpty)
    let [emailGuest, setEmailGuest] = useState(stringEmpty)
    let [stateAddGuest, setStateAddGuest] = useState(false)
    const handleName = (e) => {
        setNameGuest(e.target.value)
    }
    const handleEmail = (e) => {
        setEmailGuest(e.target.value)
    }
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

    useEffect(() => {
        setStateAddGuest((nameGuest != stringEmpty && emailGuest != stringEmpty))
    }, [nameGuest, emailGuest])

    return (
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
            {
                popUpGuestHook.State &&
                createPortal(
                    <PopUpContainerLogoMobile closePopUp={handlePopUpGuest} isBackground={true} isButtonVisible={true}>
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
                    </PopUpContainerLogoMobile>, document.getElementById(idPortal)
                )

            }
        </div>
    )
}