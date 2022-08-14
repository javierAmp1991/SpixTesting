import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import utilities from "/styles/utilities.module.css"
import {DropDownData} from "../dataDemo/data"
import {Menu} from "../dataDemo/data";
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import MainContainerFilters from "../components/Desktop/Search/mainContainerFilters";
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import NavMenu from "../components/Mobile/Misc/navMenu";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutPrincipalFilterMobile from "../components/Mobile/Search/layoutPrincipalFilterMobile";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import Image from "next/image";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function Search() {
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true)
    let [isOpenFilters, setIsOpenFilters] = useState(false)
    const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode)
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult)
    const handleOpenFilter = () => setIsOpenFilters(isOpenFilters = !isOpenFilters)
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let cssStyle = getCssStyle()

    //region desktop Components
    let dropDown =
        DropDownData.listDropDown.map((item, index) =>
            <EventVerticalView key={index} isHideName={false} dropDown={true} darkModeState={isDarkMode} info={item}/>
        )

    let buttonsNavegation = <LayoutButtonNavegation>
        {
            AntSig.map(item =>
                <ButtonNavegation isDarkMode={isDarkMode} key={item} item={item}/>
            )
        }
    </LayoutButtonNavegation>
    //endregion
    //region mobile Components
    let dropDownMobile = DropDownData.listDropDown.map((item, index) =>
        <EventHorizontalView darkModeState={isDarkMode} info={item} key={index}></EventHorizontalView>
    )
    let buttonsNavegationMobile =
        <LayoutButtonNavegation>
            {
                AntSig.map((item, index) =>
                    <ButtonNavegationMobile isDarkMode={isDarkMode} item={item} key={index}/>
                )
            }
        </LayoutButtonNavegation>
    //endregion
    return (
        isSmallDown ?
            <div className="pb-10">
                <HeaderSpixMobile displaySug={null}  isDarkMode={isDarkMode}/>
                <MenuSpixMobile isDarkMode={isDarkMode} listItemMenu={Menu.listMenu}/>
                <div className={cssStyle.bg}>

                    <Image className={style.styleBanner} src="images/atr2.jpg" alt=""/>
                    <LayoutPrincipalFilterMobile isDarkMode={isDarkMode} hiddeResult={handleClick}/>
                    {
                        isDisplayResult ?
                            <>
                                <div className={style.paddingContainer}>
                                    <div className={`${cssStyle.fontSubTitle} ${style.paddingTitle}`}>
                                        Resultados de {"Conciertos"}
                                    </div>
                                    <div className={style.gridResult}>
                                        {dropDownMobile}
                                    </div>
                                </div>
                                {buttonsNavegationMobile}
                            </>
                            :
                            <></>
                    }
                    <NavMenu isDarkMode={isDarkMode} toggleDarkMode={darkModeToggle} isLogged={false}
                             isActiveDarkModeButton={true}/>
                </div>
            </div>
            :
            <div>
                <HeaderSpixDesktop darkMode={isDarkMode} isLogged={false} toggleDarkMode={darkModeToggle}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={cssStyle.bg}>
                    <div className={`${utilities.maxWidthBodyContentSpix} ${cssStyle.gridFilterDesktop}`}>
                        <div className={`${cssStyle.mainContainer} ${cssStyle.bgInfo}`}>
                            {
                                <MainContainerFilters isDarkMode={isDarkMode} isOpenFilter={isOpenFilters}
                                                      closeFilters={handleOpenFilter}/>
                            }
                        </div>
                        <div>
                            <Image className={style.styleBanner} src="images/atr2.jpg" alt=""/>
                            <div className={style.paddingLeftResult}>
                                <div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    Resultados de {"conciertos"}
                                </div>
                                <div className={cssStyle.gridSearch}>
                                    {dropDown}
                                </div>
                            </div>
                            {buttonsNavegation}
                        </div>
                    </div>
                </div>
            </div>
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal,
            bgInfo: isDarkMode?
                isOpenFilters ? utilities.bgDarkModeInfo : ""
            :
                utilities.bgNormalInfo,
            gridFilterDesktop: isOpenFilters ? style.gridPrincipal : style.gridPrincipalClose,
            mainContainer: isDarkMode? style.mainContainerPropertiesDarkMode : style.mainContainerProperties,
            gridSearch: isOpenFilters ? style.gridSearchOpen : style.gridSearchClose,
            fontTitle: isDarkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
        }
    }
}