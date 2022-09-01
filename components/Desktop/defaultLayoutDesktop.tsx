import HeaderSpixDesktop from "./Misc/headerSpixDesktop";
import MenuSpixDesktop from "./Misc/menuSpixDesktop";
import {Menu} from "../../dataDemo/data";
import React from "react";

export default function DefaultLayoutDesktop({children, isDarkMode, darkModeToggle, isLogged}:
                                                 { children: JSX.Element, isDarkMode: boolean,
                                                     isLogged: boolean, darkModeToggle: any }) {
    //region components
    const listMenu = Menu.listMenu
    //endregion

    return (
        <div>
            <HeaderSpixDesktop darkMode={isDarkMode} isLogged={isLogged} toggleDarkMode={darkModeToggle}/>
            <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={listMenu}/>
            {children}
        </div>
    )
}