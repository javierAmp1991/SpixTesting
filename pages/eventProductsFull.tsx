//region data
import utilities from "/styles/utilities.module.css";
import {Menu, Product, productSelected} from "../dataDemo/data";
import React, {useState} from "react";
import {ListProducts2} from "../dataDemo/data";
import styleMob from "/styles/Mobile/eventProducts/eventProducts.module.css"
//endregion
//region components
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import {useMediaQuery} from "./index";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import NavMenu from "../components/Mobile/Misc/navMenu";
import {sectionProduct} from "../dataDemo/data";
import LeftCardFull from "../components/Desktop/eventProduct/leftCardFull";
import ContResultProductFull from "../components/Mobile/eventProducts/contResultProductFull";
import SuggHeaderMobile from "../components/Mobile/Misc/suggHeaderMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
//endregion

const isDarkMode = false
const toggleDarkMode = null
const isLogged = false
const isActiveDarkModeButton = false
const mediaQuery = '(max-width: 768px)'
const listProductsPass: sectionProduct[] = ListProducts2.listProducts
const menuList = Menu.listMenu

export class Guest {
    id: string
    name: string
    email: string
    isSelected: boolean
    listProductSelected: Product[]
}

let firstGuest: Guest = {
    id: "12345abcd",
    name: "Javier",
    email: "javier.ampuero.m91@hotmail.com",
    isSelected: true,
    listProductSelected: []
}


export default function EventProducts() {
    //region basic
    let [listProductSelected, setListProductSelected] = useState([])
    const handleSelectedProduct = (product: Product) =>
        setListProductSelected([...listProductSelected, product])
    const handleDeleteProduct = (product: Product) => {
        const newListSelected = listProductSelected.filter((productF) => productF != product)
        setListProductSelected(newListSelected)
    }
    const isSmallDown = useMediaQuery(mediaQuery);
    //endregion

    //region product method
    let [listGuests, setListGuests] = useState([firstGuest])
    const handleGuestAdd = (name, email) => {
        const newGuest: Guest = {
            id: "1234abc",
            isSelected: false,
            name: name,
            email: email,
            listProductSelected: []
        }
        setListGuests([...listGuests, newGuest])
    }
    const handleGuestRemove = (guest: Guest) => {
        const newListGuest = listGuests.filter((guestRemove) => guestRemove != guest)
        setListGuests(newListGuest)
    }

    let [guestSelected, setGuestSelected] = useState(firstGuest)
    const handleGuestSelected = (guest: Guest) => {
        const newListGuest = listGuests.map((oldGuest: Guest) => {
            if (oldGuest != guest) {
                return {
                    ...oldGuest, isSelected: false
                }
            }
            return {
                ...oldGuest, isSelected: true
            }
        })
        setListGuests(listGuests = newListGuest)
        setGuestSelected(guestSelected = guest)
    }

    let [listProductShow, setListProductShow] = useState(listProductsPass)
    const handListProductShow = (getItem: Product, selected: boolean) => {
        const listSupe: sectionProduct[] = listProductShow.map((item) => {
                const newListProductSelected: productSelected[] = item.listItems.map((prod) => {
                        if (prod.Product == getItem) {
                            return {...prod, IsSelected: selected}
                        }
                        return {...prod}
                    }
                )
                return {...item, listItems: newListProductSelected}
            }
        )
        setListProductShow(listProductShow = listSupe)

        if (selected) {
            handleSelectedProduct(getItem)
        } else {
            handleDeleteProduct(getItem)
        }
        /*handleOpenFilter()*/
    }

    let methodProps = {
        addGuest: handleGuestAdd,
        removeGuest: handleGuestRemove,
        guestSelected: handleGuestSelected
    }
    //endregion

    let [isDiplaySug, setIsDisplaySug] = useState(false)
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <div className={styleMob.heightCont}>
                    <ContResultProductFull isOpen={false}
                                           methodProps={methodProps}
                                           addItem={handListProductShow}
                                           listSectionProduct={listProductShow}/>

                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={null}>
                <div className={utilities.maxWidthBodyContentSpix}>
                    <LeftCardFull
                        handleAddProduct={handListProductShow}
                        listSectionPro={listProductShow}/>
                </div>
            </DefaultLayoutDesktop>
    )
}
