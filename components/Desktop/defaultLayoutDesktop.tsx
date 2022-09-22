import HeaderSpixDesktop from "./Misc/headerSpixDesktop";
import MenuSpixDesktop from "./Misc/menuSpixDesktop";
import {Menu} from "../../dataDemo/data";
import React, {useState} from "react";
import utilities from "/styles/utilities.module.css";

export default function DefaultLayoutDesktop({children, isDarkMode, darkModeToggle, isLogged}:
                                                 {
                                                     children: JSX.Element, isDarkMode: boolean,
                                                     isLogged: boolean, darkModeToggle: any
                                                 }) {
    const listMenu = Menu.listMenu
    const cssStyle = getCssStyle()
    const limitHeader: boolean = true
    return (
        <div className={cssStyle.bgBod}>
            <HeaderSpixDesktop limit={limitHeader} darkMode={isDarkMode} isLogged={isLogged} toggleDarkMode={darkModeToggle}/>
            <MenuSpixDesktop limit={limitHeader} darkMode={isDarkMode} listItemMEnu={listMenu}/>
            {children}
        </div>
    )

    function getCssStyle() {
        return {
            bgBod: isDarkMode ? utilities.bgBodyDarkModeDesktop : utilities.bgBodyNormalDesktop
        }
    }
}