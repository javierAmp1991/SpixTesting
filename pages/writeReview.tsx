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

export default function WriteReview() {
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)
    const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode)

    let firstChildren = <WriteReviewLeft/>
    let secondChildren = <div>Prueba</div>

    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }

    return (
        isSmallDown ?
            <div className="pb-10">
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <WriteReviewLeft/>
                }
                <NavMenu isDarkMode={isDarkMode} toggleDarkMode={darkModeToggle} isLogged={false}
                         isActiveDarkModeButton={true}/>
            </div>
            :
            <div>
                <HeaderSpixDesktop darkMode={isDarkMode} isLogged={false} toggleDarkMode={darkModeToggle}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={`${utilities.maxWidthBodyContentSpix}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>

            </div>
    )
}