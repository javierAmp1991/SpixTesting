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
import {Menu} from "../dataDemo/data";
import {ListProducts} from "../dataDemo/data";
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

export default function PayPage() {
    const isSmallDown = useMediaQuery(mediaQuery);
    let [isDisplayProdSelected, setIsDisplayProdSelected] = useState(false)
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    const handleIsDisplaySug = ()=> setIsDisplaySug(isDiplaySug = !isDiplaySug)
    const handleDisplay = () => setIsDisplayProdSelected(
        isDisplayProdSelected = !isDisplayProdSelected)
    //region desktopComponents
    let firstChildren = <GridSelectedItems>
        {
            ListProducts.listProducts.map((item, index) =>
                <PayPageProductSelectedView item={item} key={index}/>
            )
        }
    </GridSelectedItems>
    let secondChildren = <DetailsPay/>
    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }
    //endregion
    //region mobileComponents
    let productSelected = ListProducts.listProducts.map((item, index) =>
        <PayPageProductSelectedViewMobile item={item} key={index}/>
    )
    //endregion
    return (
        isSmallDown ?
            <div>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <>
                            <HeaderSpixMobile displaySug={handleIsDisplaySug}  isDarkMode={isDarkMode}/>
                            <MenuSpixMobile listItemMenu={Menu.listMenu} isDarkMode={isDarkMode}/>
                            <div className={styleMobile.mainCont}>
                                {
                                    isDisplayProdSelected ?
                                        <GridSelectedItemsMobile returndisplay={handleDisplay}>
                                            {productSelected}
                                        </GridSelectedItemsMobile>
                                        :
                                        <DetailsPayMobile displaySelectedItem={handleDisplay}/>
                                }
                            </div>
                        </>
                }
                <NavMenu isDarkMode={isDarkMode}
                         toggleDarkMode={toggleDarkMode}
                         isLogged={isLogged}
                         isActiveDarkModeButton={isActiveDarkModeButton}/>
            </div>
            :
            <div>
                <HeaderSpixDesktop isLogged={isLogged}
                                   toggleDarkMode={toggleDarkMode}
                                   darkMode={isDarkMode}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={`${utilities.maxWidthBodyContentSpix} ${styleDesk.mainContent}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>
            </div>
    )
}