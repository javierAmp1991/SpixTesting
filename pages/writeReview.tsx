import WriteReviewLeft from "../components/Desktop/Review/writeReviewLeft";
import {useMediaQuery} from "./index";
import SuggHeaderMobile from "../components/Mobile/Misc/suggHeaderMobile";
import React, {useState} from "react";
import NavMenu from "../components/Mobile/Misc/navMenu";
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import {Menu} from "../dataDemo/data";
import LayoutSideCard, {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import utilities from "/styles/utilities.module.css";
import SideCard from "../components/Desktop/Review/sideCard";
import WriteReviewMobile from "../components/Mobile/Review/writeReviewMobile";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";

export default function WriteReview() {
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)

    let firstChildren = <WriteReviewLeft/>
    let secondChildren = <SideCard/>

    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }

    return (
        isSmallDown ?
            <div>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <>
                        <HeaderSpixMobile isDesplegable={null} displaySug={handleIsDisplaySug} isDarkMode={isDarkMode}/>
                            <MenuSpixMobile isDarkMode={isDarkMode} listItemMenu={Menu.listMenu}/>
                        <WriteReviewMobile/>
                        </>
                }
            </div>
            :
            <div>
                <HeaderSpixDesktop darkMode={isDarkMode} isLogged={false} toggleDarkMode={null}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={`${utilities.maxWidthBodyContentSpix}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>

            </div>
    )
}