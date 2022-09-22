import utilities from "/styles/utilities.module.css"
import styleDesk from "/styles/Desktop/PayPage/payPage.module.css"
import styleMobile from "/styles/Mobile/PayPage/payPage.module.css"
import {useMediaQuery} from "./index";
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import NavMenu from "../components/Mobile/Misc/navMenu";
import {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import {ListProducts3} from "../dataDemo/data";
import {Menu} from "../dataDemo/data";
import {ListProducts} from "../dataDemo/data";
import {resumeBuy} from "../components/Desktop/PayPage/detailsPay";
import SuggHeaderMobile from "../components/Mobile/Misc/suggHeaderMobile";

const isDarkMode = false
const toggleDarkMode = null
const isLogged = false
const isActiveDarkModeButton = false
const mediaQuery = '(max-width: 768px)'
import LayoutSideCard from "../components/Desktop/Layouts/layoutSideCard";
import GridSelectedItems from "../components/Desktop/PayPage/gridSelectedItems";
import PayPageProductSelectedView from "../components/Desktop/PayPage/productSelectedView";
import DetailsPay from "../components/Desktop/PayPage/detailsPay";
import GridSelectedItemsMobile from "../components/Mobile/PayPage/gridSelectedItemsMobile";
import PayPageProductSelectedViewMobile from "../components/Mobile/PayPage/productSelectedViewMobile";
import DetailsPayMobile from "../components/Mobile/PayPage/detailsPayMobile";
import {useState} from "react";
import Image from "next/image";
import {GlobalConst} from "../public/globalConst";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";

export default function PayPage() {
    const isSmallDown = useMediaQuery(mediaQuery);
    let [isDisplayProdSelected, setIsDisplayProdSelected] = useState(false)
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)
    const handleDisplay = () => setIsDisplayProdSelected(
        isDisplayProdSelected = !isDisplayProdSelected)
    //region desktopComponents
    const resumeBuy: resumeBuy = {
        TotalProducts: getTotalProducts(),
        TotalPrice: getTotalPrice()
    }

    let firstChildren =
        <div className="grid gap-10 pb-4 pl-2">
            {
                ListProducts3.listProducts.map((item, index) =>
                    <GridSelectedItems isLast={
                        index == ListProducts3.listProducts.length - 1 ? true : false
                    } key={index} guestProducts={item}/>
                )
            }
        </div>

    let secondChildren = <DetailsPay resumeBuy={resumeBuy}/>
    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }
    //endregion
    //region mobileComponents
    /* let productSelected = ListProducts.listProducts.map((item, index) =>
         <PayPageProductSelectedViewMobile item={item} key={index}/>
     )*/

    let productSelected1 =
        <div className={styleMobile.divSelected}>
            <div className={styleMobile.gridSelected}>
                {
                    ListProducts3.listProducts.map((item, index) =>
                        <GridSelectedItemsMobile returnDisplay={handleDisplay} isLast={
                            index == ListProducts3.listProducts.length - 1 ? true : false
                        } key={index} guestProducts={item}/>
                    )
                }

            </div>
            <div className={styleMobile.positionArrowBack}>
                <button onClick={handleDisplay}
                        className={styleMobile.buttonBack}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowExitBlack}/>
                </button>
            </div>
        </div>
    //endregion
    return (
        isSmallDown ?
            <div>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <>
                            <HeaderSpixMobile isDesplegable={null} displaySug={handleIsDisplaySug}
                                              isDarkMode={isDarkMode}/>
                            <MenuSpixMobile listItemMenu={Menu.listMenu} isDarkMode={isDarkMode}/>
                            <div className={styleMobile.mainCont}>
                                {
                                    isDisplayProdSelected ?
                                        productSelected1
                                        :
                                        <DetailsPayMobile resumeBuy={resumeBuy} displaySelectedItem={handleDisplay}/>
                                }
                            </div>
                        </>
                }
            </div>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={isLogged} darkModeToggle={null}>
                <div className={`${utilities.maxWidthBodyContentSpix} ${styleDesk.mainContent}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>
            </DefaultLayoutDesktop>
    )

    function getTotalProducts(): number {
        let total = 0
        ListProducts3.listProducts.forEach(item => {
            total += item.ListProducts.length
        })
        return total
    }

    function getTotalPrice(): number {
        let total = 0
        ListProducts3.listProducts.forEach(item => {
            item.ListProducts.forEach(item2 => {
                total += item2.Price
            })
        })
        return total
    }
}