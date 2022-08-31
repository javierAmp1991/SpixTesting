import React, {useState} from "react";
import SuggHeaderMobile from "../components/Mobile/Misc/suggHeaderMobile";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import {Menu} from "../dataDemo/data";
import Image from "next/image";
import NavMenu from "../components/Mobile/Misc/navMenu";
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Mobile/RestaurantFilterPage/restaurantFilterPage.module.css"
import {useMediaQuery} from "./index";
import FilterSection from "../components/Mobile/restauratnFilterPage/filterSection";
import ResultSection from "../components/Mobile/restauratnFilterPage/resultSection";
import {DropDownData} from "../dataDemo/data";

export default function RestaurantFilterPage() {
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let cssStyle = getCssStyle()
    const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode)
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)
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
                            <div className={cssStyle.bg}>
                                <div className={style.styleBanner}>
                                    <Image layout={"fill"} src="/images/atr2.jpg" alt=""/>
                                </div>
                                <FilterSection/>
                                <ResultSection listResult={DropDownData.listDropDown}/>
                            </div>
                        </>
                }
            </div>
            :
            <div>
                <HeaderSpixDesktop darkMode={isDarkMode} isLogged={false} toggleDarkMode={darkModeToggle}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={`${cssStyle.bg} ${utilities.maxWidthBodyContentSpix}`}>
                    <div className={style.styleBanner}>
                        <Image layout={"fill"} objectFit={"cover"} src="/images/atr2.jpg" alt=""/>
                    </div>
                </div>
            </div>
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal,
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            mainContainer: isDarkMode ? style.mainContainerPropertiesDarkMode : style.mainContainerProperties,
            fontTitle: isDarkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
        }
    }
}