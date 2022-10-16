import HeaderSpixMobile from "./Misc/headerSpixMobile";
import MenuSpixMobile from "./Misc/menuSpixMobile";
import React, {useEffect, useState} from "react";
import {Menu} from "../../dataDemo/data";
import SuggHeaderMobile from "./Misc/suggHeaderMobile";
import utilities from "/styles/utilities.module.css";
import styleMobile from "/styles/Mobile/defaultLayout.module.css"
import SideSetting from "./Misc/sideSetting";
import ProviderGlobal from "../Providers/providerGlobal";

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
    useEffect(() => {
        if(isOpenSideSetting) document.body.classList.add(utilities.noScrollBody)
        else document.body.classList.remove(utilities.noScrollBody)
    },[isOpenSideSetting])
    const cssStyle = getCssStyle()
    //endregion
    return (
        <ProviderGlobal>
            <div className={utilities.bgBodyNormalMobile}>
                {
                    isDisplaySug ?
                        <SuggHeaderMobile returnMet={handleDisplaySug}/>
                        :
                        <div className={styleMobile.mainCont}>
                            <HeaderSpixMobile isDarkMode={isDarkMode}
                                              isDesplegable={handleSideSetting}
                                              displaySug={handleDisplaySug}/>
                            <MenuSpixMobile listItemMenu={listMenuMobile} isDarkMode={isDarkMode}/>
                            {children}
                            <div onClick={handleSideSetting} style={{transform: `translate(${cssStyle.desp})`}} className={styleMobile.menuDesplegable}>
                                <SideSetting closeDesplegable={handleSideSetting}/>
                            </div>
                        </div>
                }
            </div>
        </ProviderGlobal>
    )

    function getCssStyle() {
        return {
            desp: isOpenSideSetting? "0vw" : "-100vw",
            stopScroll: isOpenSideSetting && utilities.noScrollBody,
            desplegableCont: isOpenSideSetting ? styleMobile.menuDesplegableOut : styleMobile.menuDesplegableIn
        }
    }
}