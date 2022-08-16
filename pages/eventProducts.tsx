//region data
import {ListProducts, Menu, Product, productSelected} from "../dataDemo/data";
import React, {useEffect, useState} from "react";
import {ListProducts2} from "../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import styleDesk from "/styles/Desktop/eventProducts/eventProducts.module.css"
import styleMob from "/styles/Mobile/eventProducts/eventProducts.module.css"
//endregion
//region components
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import {useMediaQuery} from "./index";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import ContSelectedProduct from "../components/Mobile/eventProducts/contSelectedProduct";
import NavMenu from "../components/Mobile/Misc/navMenu";
import ContResultProduct from "../components/Mobile/eventProducts/contResultProduct";
import LeftCard from "../components/Desktop/eventProduct/leftCard";
import RightCard from "../components/Desktop/eventProduct/rightCard";
import {sectionProduct} from "../dataDemo/data";
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

const numberMenos: number = 129


export default function EventProducts() {
    //region basic
    let [listProductSelected, setListProductSelected] = useState([])
    const handleSelectedProduct = (product: Product) =>
        setListProductSelected([...listProductSelected, product])
    const handleDeleteProduct = (product: Product) => {
        const newListSelected = listProductSelected.filter((productF) => productF != product)
        setListProductSelected(newListSelected)
    }
    let [isOpenSelectedProduct, setIsOpenSelectedProduct] = useState(false)
    const handleOpenFilter = (number: number) => {
        if (number > 0) {
            setIsOpenSelectedProduct(isOpenSelectedProduct = true)
        } else setIsOpenSelectedProduct(isOpenSelectedProduct = false)
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
    const addItemGuestSelected = (product: Product) => {
        const newList: Product[] = [...guestSelected.listProductSelected, product];
        setGuestSelected({...guestSelected, listProductSelected: newList})
    }
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
    const handleListProductShow1 = () => {
        guestSelected.listProductSelected.forEach(productSelected => {
                const listSupe: sectionProduct[] = listProductShow.map((item) => {
                        const newListProductSelected: productSelected[] = item.listItems.map((prod) => {
                                if (prod.Product == productSelected) {
                                    return {...prod, IsSelected: true}
                                }
                                return {...prod}
                            }
                        )
                        return {...item, listItems: newListProductSelected}
                    }
                )
            }
        )
    }
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

    }

    let [heightDiv, setHeightDiv] = useState(0)
    const handleSetH = (number: number) => {
        setHeightDiv(heightDiv = number)
    }

    useEffect(() => {
        function resiveDiv() {
            const sizeDiv = window.innerHeight
            handleSetH(sizeDiv - numberMenos)
        }

        handleSetH(window.innerHeight - numberMenos)
        window.addEventListener('resize', resiveDiv)
    }, [heightDiv]);

    let methodProps = {
        addGuest: handleGuestAdd,
        removeGuest: handleGuestRemove,
        guestSelected: handleGuestSelected
    }
    //endregion

    return (
        isSmallDown ?
            <div className={styleMob.mainContainerMobile}>
                <HeaderSpixMobile displaySug={null} isDarkMode={isDarkMode}/>
                <MenuSpixMobile listItemMenu={menuList} isDarkMode={isDarkMode}/>
                <div className={styleMob.heightCont}
                     style={{height: heightDiv}}>
                    {
                        isOpenSelectedProduct ?
                            <ContSelectedProduct guestSelected={firstGuest}
                                                 methodProps={methodProps}
                                                 listGuest={listGuests}
                                                 addItem={handListProductShow}
                                                 listSelectedProducts={listProductSelected}/>
                            : <></>
                    }
                    <ContResultProduct isOpen={isOpenSelectedProduct}
                                       methodProps={methodProps}
                                       listGuests={listGuests}
                                       addItem={handListProductShow}
                                       listSectionProduct={listProductShow}/>
                </div>
                <NavMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}
                         isLogged={isLogged} isActiveDarkModeButton={isActiveDarkModeButton}/>
            </div>
            :
            <div>
                <HeaderSpixDesktop isLogged={isLogged} darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={menuList}/>
                <div className={utilities.maxWidthBodyContentSpix}>
                    <div className={styleDesk.grid}>
                        <LeftCard
                            handleAddProduct={handListProductShow}
                            listSectionPro={listProductShow}
                            addItemGuest={addItemGuestSelected}/>

                        <RightCard guestSelected={guestSelected}
                                   listGuest={listGuests}
                                   listSelectedProducts={listProductSelected}
                                   methodProps={methodProps}
                                   listProduct={ListProducts.listProducts}
                                   addItem={handListProductShow}
                                   removetemGuest={addItemGuestSelected}
                        />
                    </div>
                </div>
            </div>
    )
}
