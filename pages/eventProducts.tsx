//region data
import {ListProducts, Menu, Product, productSelected} from "../dataDemo/data";
import React, {useEffect, useState} from "react";
import {ListProducts2} from "../dataDemo/data";
import {productAmount} from "../dataDemo/data";
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
import SuggHeaderMobile from "../components/Mobile/Misc/suggHeaderMobile";
//endregion

const isDarkMode = false
const toggleDarkMode = null
const isLogged = false
const isActiveDarkModeButton = false
const mediaQuery = '(max-width: 1281px)'
const listProductsPass: sectionProduct[] = ListProducts2.listProducts
const menuList = Menu.listMenu

export class Guest {
    id: string
    name: string
    email: string
    isSelected: boolean
    listProductAmount: productAmount[]
}

const firstGuest: Guest = {
    id: "12345abcd",
    name: "Javier",
    email: "javier.ampuero.m91@hotmail.com",
    isSelected: true,
    listProductAmount: []
};
const numberMenos: number = 129;

export default function EventProducts() {
    //region basic
    let [listProductSelected, setListProductSelected] = useState([]);
    const handleSelectedProduct = (product: Product) => {
        const newProductAmount: productAmount = {
            Product: product,
            Amount: 1
        };
        setListProductSelected([...listProductSelected, newProductAmount])
    }
    const handleDeleteProduct = (product: Product) => {
        const newListSelected = listProductSelected.filter((productF) => productF.Product != product)
        setListProductSelected(newListSelected)
    }

    let [isOpenSelectedProduct, setIsOpenSelectedProduct] = useState(false)
    /*const handleOpenFilter = () => {
        let totalProducts: number = 0
        listGuests.forEach(guest => {
            totalProducts = totalProducts + guest.listProductAmount.length;
        })
        if (totalProducts > 0) {
            setIsOpenSelectedProduct(isOpenSelectedProduct = true);
        } else {
            setIsOpenSelectedProduct(isOpenSelectedProduct = false);
        }
    }*/
    const isSmallDown = useMediaQuery(mediaQuery);
    //endregion

    //region product method
    let [listGuests, setListGuests] = useState([firstGuest])
    const updateList = () => {
        const newGuest: Guest[] = listGuests.map(item => {
            if (item.id == guestSelected.id) {
                return guestSelected
            } else {
                return item
            }
        })
        setListGuests(listGuests = newGuest)
    }

    let [guestSelected, setGuestSelected] = useState(listGuests[0])
    const addItemGuestSelected = (product: Product) => {
        const newProductAmount: productAmount = {
            Product: product,
            Amount: 1
        };
        const newList: productAmount[] = [...guestSelected.listProductAmount, newProductAmount];
        setGuestSelected({...guestSelected, listProductAmount: newList})
    }
    const removeItemGuestSelected = (product: Product) => {
        const newListGuest: productAmount[] =
            guestSelected.listProductAmount.filter((productRemove) => productRemove.Product != product)
        setGuestSelected({...guestSelected, listProductAmount: newListGuest})
    }
    const amountPerItems = (product: productAmount, isIncrease: boolean) => {
        const newList: productAmount[] = guestSelected.listProductAmount.map(item => {
            if (item == product) {
                if (isIncrease) {
                    const newAmount = item.Amount + 1;
                    return {...item, Amount: newAmount};
                } else {
                    const newAmount = item.Amount == 1 ? 1 : item.Amount - 1;
                    return {...item, Amount: newAmount}
                }
            } else {
                return {...item}
            }
        })
        setGuestSelected({...guestSelected, listProductAmount: newList})
    }

    function getBool(productSelected: Product): boolean {
        let newValue: boolean = guestSelected.listProductAmount.some((item: productAmount) => {
                if (item.Product == productSelected) {
                    return true;
                } else {
                    return false;
                }
            }
        )
        return newValue;
    }

    const handleGuestSelected = (guest: Guest) => {
        setGuestSelected(guestSelected = guest)
    }

    const updateGuestSelected = () => {
        const newListGuest = listGuests.map((oldGuest: Guest) => {
            if (oldGuest.id != guestSelected.id) {
                return {
                    ...oldGuest, isSelected: false
                }
            }
            return {
                ...guestSelected, isSelected: true
            }
        })
        setListGuests(listGuests = newListGuest)
    }

    let [listProductShow, setListProductShow] = useState(listProductsPass)
    const handleListProductShow1 = () => {
        const listSupe: sectionProduct[] = listProductShow.map((item) => {
                const newListProductSelected: productSelected[] = item.listItems.map((prod) => {
                        if (getBool(prod.Product)) {
                            return {...prod, IsSelected: true};
                        } else {
                            return {...prod, IsSelected: false};
                        }
                    }
                )
                return {...item, listItems: newListProductSelected};
            }
        )
        setListProductShow(listProductShow = listSupe);
    }

    const handleGuestAdd = (newGuest: Guest) => {
        setListGuests([...listGuests, newGuest])
    }
    const handleGuestRemove = (oldGuest: Guest) => {
        const newListGuest = listGuests.filter((guest) => guest != oldGuest)
        setListGuests(listGuests = newListGuest)
    }

    let [heightDiv, setHeightDiv] = useState(0)
    /*const handleSetH = (number: number) => {
        setHeightDiv(heightDiv = number)
    }*/

    useEffect(() => {
        updateList()
        updateGuestSelected()
        handleListProductShow1()
    }, [guestSelected])

    useEffect(() => {
        let totalProducts: number = 0
        listGuests.forEach(guest => {
            totalProducts = totalProducts + guest.listProductAmount.length;
        })
        if (totalProducts > 0) {
            setIsOpenSelectedProduct(isOpenSelectedProduct = true);
        } else {
            setIsOpenSelectedProduct(isOpenSelectedProduct = false);
        }
    }, [guestSelected])

    useEffect(() => {
        const handleSetH = (number: number) => {
            setHeightDiv(heightDiv = number)
        }

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

    let [isDiplaySug, setIsDisplaySug] = useState(false)
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)

    return (
        isSmallDown ?
            <div className={styleMob.mainContainerMobile}>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <div className="h-full">
                            <HeaderSpixMobile displaySug={handleIsDisplaySug} isDarkMode={isDarkMode}/>
                            <MenuSpixMobile listItemMenu={menuList} isDarkMode={isDarkMode}/>
                            <div className={styleMob.maxWidthCont}>
                                <div className={styleMob.heightCont}
                                     style={{height: heightDiv}}>
                                    <ContSelectedProduct isOpen={isOpenSelectedProduct}
                                                         guestSelected={guestSelected}
                                                         methodProps={methodProps}
                                                         listGuest={listGuests}
                                                         amountPerItem={amountPerItems}
                                                         removeItem={removeItemGuestSelected}/>
                                    <ContResultProduct isOpen={isOpenSelectedProduct}
                                                       methodProps={methodProps}
                                                       listGuests={listGuests}
                                                       listSectionProduct={listProductShow}
                                                       addItem={addItemGuestSelected}
                                                       removeItem={removeItemGuestSelected}/>
                                </div>
                            </div>
                            <NavMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}
                                     isLogged={isLogged} isActiveDarkModeButton={isActiveDarkModeButton}/>
                        </div>
                }
            </div>
            :
            <div>
                <HeaderSpixDesktop isLogged={isLogged} darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={menuList}/>
                <div className={utilities.maxWidthBodyContentSpix}>
                    <div className={styleDesk.grid}>
                        <LeftCard
                            listSectionPro={listProductShow}
                            addItemGuest={addItemGuestSelected}
                            deleteItemGuest={removeItemGuestSelected}/>

                        <RightCard guestSelected={guestSelected}
                                   listGuest={listGuests}
                                   methodProps={methodProps}
                                   listProduct={ListProducts.listProducts}
                                   removeItemGuestSelected={removeItemGuestSelected}
                                   amountPerItem={amountPerItems}
                                   upDateGuestSelected={handleGuestSelected}/>
                    </div>
                </div>
            </div>
    )
}
