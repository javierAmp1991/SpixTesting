import utilities from "/styles/utilities.module.css";
import styleMobile from "/styles/Mobile/defaultLayout.module.css"
import HeaderSpixMobile from "./Misc/headerSpixMobile";
import MenuSpixMobile from "./Misc/menuSpixMobile";
import SuggHeaderMobile from "./Misc/suggHeaderMobile";
import SideSetting from "./Misc/sideSetting";
import ProviderGlobal from "../Providers/providerGlobal";
import React, {createContext, useEffect, useState} from "react";
import {Menu} from "../../dataDemo/data";

export const SettingContextForNavMenu = createContext(null)

export default function DefaultLayoutMobile({children, isDarkMode}:
                                                { isDarkMode: boolean, children: JSX.Element }) {
    const listMenuMobile = Menu.listMenu
    let [isOpenSideSetting, setIsOppenSideSettings] = useState(false)
    const handleSideSetting = () => setIsOppenSideSettings(isOpenSideSetting = !isOpenSideSetting)
    let [isDisplaySug, setIsDisplaySug] = useState(false)
    const handleDisplaySug = () => setIsDisplaySug(isDisplaySug = !isDisplaySug)
    useEffect(() => {
        if (isOpenSideSetting) document.body.classList.add(utilities.noScrollBody)
        else document.body.classList.remove(utilities.noScrollBody)
    }, [isOpenSideSetting])
    const cssStyle = getCssStyle()

    return (
        <ProviderGlobal>
            <SettingContextForNavMenu.Provider value={handleSideSetting}>
                <div className={utilities.bgBodyNormalMobile}>
                    <div className={styleMobile.mainCont}>
                        <HeaderSpixMobile isDarkMode={isDarkMode}
                                          isDesplegable={handleSideSetting}
                                          displaySug={handleDisplaySug}/>
                        <MenuSpixMobile listItemMenu={listMenuMobile} isDarkMode={isDarkMode}/>
                        {children}
                        <div style={{transform: `translate(${cssStyle.desp})`}}
                             className={styleMobile.menuDesplegable}>
                            <SideSetting closeDesplegable={handleSideSetting}/>
                        </div>
                        {
                            isOpenSideSetting &&
                            <div className={styleMobile.blackScreen}
                                 onClick={handleSideSetting}/>
                        }
                    </div>
                </div>
            </SettingContextForNavMenu.Provider>
        </ProviderGlobal>
    )

    function getCssStyle() {
        return {
            desp: isOpenSideSetting ? "0vw" : "-100vw",
            stopScroll: isOpenSideSetting && utilities.noScrollBody,
            desplegableCont: isOpenSideSetting ? styleMobile.menuDesplegableOut : styleMobile.menuDesplegableIn
        }
    }
}