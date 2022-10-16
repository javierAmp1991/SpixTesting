import HeaderSpixMobile from "./Misc/headerSpixMobile";
import MenuSpixMobile from "./Misc/menuSpixMobile";
import React, {useState} from "react";
import {Menu} from "../../dataDemo/data";
import SuggHeaderMobile from "./Misc/suggHeaderMobile";
import utilities from "/styles/utilities.module.css";
import styleMobile from "/styles/Mobile/defaultLayout.module.css"
import SideSetting from "./Misc/sideSetting";

export default function DefaultLayoutMobile({children, isDarkMode}:
                                                { isDarkMode: boolean, children: JSX.Element }) {
    //region
    const listMenuMobile = Menu.listMenu
    //endregion

    //region hooks
    let [isOpenSideSetting, setIsOppenSideSettings] = useState(false)
    const handleSideSetting = () => setIsOppenSideSettings(isOpenSideSetting = !isOpenSideSetting)
    let [isDisplaySug, setIsDisplaySug] = useState(false)
    const handleDisplaySug = () => setIsDisplaySug(isDisplaySug = !isDisplaySug)
    const cssStyle = getCssStyle()
    //endregion
    return (
        <div className={utilities.bgBodyNormalMobile}>
            {
                isDisplaySug ?
                    <SuggHeaderMobile returnMet={handleDisplaySug}/>
                    :
                    <div className={`${cssStyle.stopScroll} ${styleMobile.mainCont}`}>
                        <HeaderSpixMobile isDarkMode={isDarkMode}
                                          isDesplegable={handleSideSetting}
                                          displaySug={handleDisplaySug}/>
                        <MenuSpixMobile listItemMenu={listMenuMobile} isDarkMode={isDarkMode}/>
                        {children}
                        <div className={cssStyle.desplegableCont}>
                            {/*<SideSetting closeDesplegable={handleSideSetting}/>*/}
                        </div>
                    </div>
            }
        </div>
    )

    function getCssStyle() {
        return {
            stopScroll: isOpenSideSetting && utilities.noScrollBody,
            desplegableCont: isOpenSideSetting ? styleMobile.menuDesplegableOut : styleMobile.menuDesplegableIn
        }
    }
}